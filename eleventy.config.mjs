import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import pluginRss from '@11ty/eleventy-plugin-rss';
import htmlmin from 'html-minifier';
import moment from 'moment';
import getTagList from './src/assets/scripts/getTagList.js';
import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import {pathToFileURL} from 'node:url';
import {evaluate} from '@mdx-js/mdx';
import {renderToStaticMarkup} from 'react-dom/server';
import * as runtime from 'react/jsx-runtime';

moment.locale('zh-cn');

function sortByCreated(arr) {
  return arr
    .sort((a, b) => {
      return a.data.created - b.data.created;
    })
    .reverse();
}

export default async function (eleventyConfig) {
  //compile tailwind before eleventy processes the files
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/assets/styles/index.css');

    const tailwindOutputPath = './dist/styles/index.css';

    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([
    //compile tailwind
    tailwindcss(),

    //minify tailwind css
    cssnano({
      preset: 'default',
    }),
  ]);


  // pathCopy
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/admin');

  // Layout Alliases 
  // page
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');

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
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(new Date(date)).format('LL');
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
      collection.getFilteredByGlob(['./src/blog/*.md*'])
    );
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
    const blogsByCreated = sortByCreated(collection.getFilteredByGlob(['./src/blog/*.md*']))
      .reduce((blogObj, item) => {
        const year = item.data.created.getFullYear();

        if (blogObj.hasOwnProperty(year)) {
          blogObj[year].push(item);
        } else {
          blogObj[year] = [item];
        }

        return blogObj;
      }, {});

    return Object.keys(blogsByCreated)
      .map(item => {
        return {
          year: item,
          blogs: blogsByCreated[item]
        };
      })
      .reverse();
  });

  eleventyConfig.addCollection('tagList', getTagList);

  // html-minifer
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // MDX
  eleventyConfig.addExtension('mdx', {
    compile: async (str, inputPath) => {
      const { default: mdxContent } = await evaluate(str, {
        ...runtime,
        baseUrl: pathToFileURL(inputPath)
      });

      return async function(data) {
        let res = await mdxContent(data);
        return renderToStaticMarkup(res);
      };
    }
  });

  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', 'mdx'],
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    }
  };
}
