const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require("html-minifier");
const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {

  // pathCopy
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/assets/uploads');

  eleventyConfig.addPassthroughCopy('src/admin');

  // Layout Alliases 
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('articles', 'layouts/articles.njk');
  eleventyConfig.addLayoutAlias('bookmarks', 'layouts/bookmarkspage.njk');
  eleventyConfig.addLayoutAlias('categories', 'layouts/categoriespage.njk');
  eleventyConfig.addLayoutAlias('home', 'layouts/homepage.njk');
  eleventyConfig.addLayoutAlias('projects', 'layouts/projects.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  // syntaxhightlight
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

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

  /**
   * Collections
   */

  eleventyConfig.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md').reverse();
  });

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob(['./src/posts/*.md']).reverse();
  });

  eleventyConfig.addCollection('bookmarks', collection => {
    return collection.getFilteredByGlob('./src/bookmarks/*.md').reverse();
  });

  eleventyConfig.addCollection('tagList', require('./src/_templates/getTagList'));

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
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
      output: '_site',
      includes: '_templates'
    }
  }
}