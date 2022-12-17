const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");
const moment = require('moment');
const getTagList = require('./src/_assets/js/utils/getTagList.js')
moment.locale('zh-cn');

function sortByCreated(arr) {
  return arr
    .sort((a, b) => {
      return a.data.created - b.data.created
    })
    .reverse()
}

module.exports = function(eleventyConfig) {
  // pathCopy
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.addPassthroughCopy('src/admin');

  // Layout Alliases 
  // page
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'pages/page.njk');
  eleventyConfig.addLayoutAlias('article', 'pages/article.njk');

  // components
  eleventyConfig.addLayoutAlias('page-section', 'components/page-section.njk');
  eleventyConfig.addLayoutAlias('shared', 'components/shared.njk');

  // plugin
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  /****************************
   * Filter 
   */

  // Date Format
  eleventyConfig.addFilter('dateISO', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL');
  });

  // filter array
  eleventyConfig.addFilter('arrFilter', arr => {

    const selectedArr = arr.slice(0, 5);
    return selectedArr;
  });

  /**
   * Collections
   */

  eleventyConfig.addCollection('projects', collection => {
    return sortByCreated(
      collection.getFilteredByGlob('./src/projects/*.md')
    );
  });

  eleventyConfig.addCollection('blog', collection => {
    return sortByCreated(
      collection.getFilteredByGlob(['./src/blog/*.md'])
    )
  });

  eleventyConfig.addCollection('snippets', collection => {
    return sortByCreated(
      collection.getFilteredByGlob('./src/snippets/*.md')
    );
  });

  eleventyConfig.addCollection('weekly', collection => {
    return sortByCreated(
      collection.getFilteredByGlob('./src/weekly/*.md')
    );
  });

  /**
    * @return {Array} - blogs [{ year: 2021, blogs: [] }, { year: 2022, blogs: [] }]
    */
  eleventyConfig.addCollection('blogs', collection => {
    // {
    //    2022: [{ content: "..." }, { content: '...' }],
    //    2021: [{ content: "..." }, { content: '...' }]
    // }
    const blogsByCreated = sortByCreated(collection.getFilteredByGlob(['./src/blog/*.md']))
      .reduce((blogObj, item) => {
        const year = item.data.created.getFullYear()

        if (blogObj.hasOwnProperty(year)) {
            blogObj[year].push(item)
        } else {
          blogObj[year] = [item]
        }

        return blogObj
      }, {})
      
    return Object.keys(blogsByCreated)
      .map(item => {
        return {
          year: item,
          blogs: blogsByCreated[item]
        }
      })
      .reverse()
  });

  eleventyConfig.addCollection('tagList', getTagList);

  // html-minifer
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  
  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    }
  }
}
