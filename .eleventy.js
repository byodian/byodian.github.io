const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");
const moment = require('moment');
const getTagList = require('./src/_assets/scripts/utils/getTagList.js')
moment.locale('zh-cn');

function sortByCreated(arr) {
  return arr.sort((a, b) => a.data.created - b.data.created).reverse()
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
    return moment(date).format('L');
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

  eleventyConfig.addCollection('workflows', collection => {
    return sortByCreated(
      collection.getFilteredByGlob('./src/workflows/*.md')
    );
  });

  eleventyConfig.addCollection('weekly', collection => {
    return sortByCreated(
      collection.getFilteredByGlob('./src/weekly/*.md')
    );
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
