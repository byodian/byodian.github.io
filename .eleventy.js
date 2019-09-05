const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Layout Alliases 
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("articles", "layouts/articles.njk");
  eleventyConfig.addLayoutAlias("bookmarks", "layouts/bookmarkspage.njk");
  eleventyConfig.addLayoutAlias("categories", "layouts/categoriespage.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/homepage.njk");
  eleventyConfig.addLayoutAlias("projects", "layouts/projects.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // syntaxhightlight

  eleventyConfig.addPlugin(pluginSyntaxHighlight, {


    init: function({ Prism }) {
        // Add your own custom language to Prism!
    }
  });

  return {

    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "dist",
      includes: "_templates"
    }
  }
}