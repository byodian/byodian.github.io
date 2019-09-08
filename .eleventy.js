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

  eleventyConfig.addCollection('tagsList', collection => {
    return collection.getFilteredByGlob(['./src/posts/*.md', './src/bookmarks/*.md']).reverse()
  });

  /**
   * 
  [
    { 
      inputPath: './test1.md',
      fileSlug: 'test1', // fileSlug was added in 0.5.3
      outputPath: './_site/test1/index.html',
      url: '/test1/',
      date: 2018-01-09T04:10:17.000Z,
      data: { title: 'Test Title', tags: ['tag1', 'tag2'], date: 'Last Modified' },
      templateContent: '<h1>This is my title</h1>\n\n<p>This is content…' 
    },
      { 
      inputPath: './test1.md',
      fileSlug: 'test1', // fileSlug was added in 0.5.3
      outputPath: './_site/test1/index.html',
      url: '/test1/',
      date: 2018-01-09T04:10:17.000Z,
      data: { title: 'Test Title', tags: ['tag1', 'p>This is content…' tag2'], date: 'Last Modified' },
      templateContent: '<h1>This is my title</h1>\n\n<
    }
  ]
   */



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