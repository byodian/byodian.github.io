module.exports = function(collection) {
  const tagSet = new Set();
  // This Set items contain the `filter` in the /src/tags.njk 
  const filterTag = new Set( ['blog', 'snippets', 'all', 'workflows', 'tagList'] );

  /**
    * collections.getAll() return an array about all collections
    * Each collection item have the following data:
    *  { 
    *  inputPath: './test1.md',
    *  fileSlug: 'test1', // fileSlug was added in 0.5.3
    *  outputPath: './_site/test1/index.html',
    *  url: '/test1/',
    *  date: 2018-01-09T04:10:17.000Z,
    *  data: { title: 'Test Title', tags: ['tag1', 'tag2'], date: 'Last Modified' },
    *  templateContent: '<h1>This is my title</h1>\n\n<p>This is content…' 
    * }
   */

  collection.getAll().forEach( item => {
    if ( 'tags' in item.data ) {
      let tags = item.data.tags;

      if (typeof tags === 'string') {
        tags = [tags];
      }

      tags = tags.filter( item => !filterTag.has(item));

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // Return an array in addCollections
  return [...tagSet];
};
