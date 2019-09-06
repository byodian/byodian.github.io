const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {

  // pathCopy
  eleventyConfig.addPassthroughCopy('src/assets');
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

  // Date Format
  eleventyConfig.addFilter('dateISO', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL');
  });

  return {

    passthroughFileCopy: true,
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_templates'
    }
  }
}