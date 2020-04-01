// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//https://levelup.gitconnected.com/how-to-build-an-awesome-website-with-gridsome-and-markdown-files-8f5422bb0183
//https://github.com/lauragift21/gridsome-minimal-blog/tree/master/src
module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Tinkering time',
  siteUrl: 'https://phalax4.github.io',
  pathPrefix: '/tensorflow-rnn-gridsome-site',

  plugins: [
    {
      use: '@gridsome/source-faker',
      options: {
        numNode: 50
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:title',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:title',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    BookEntry: '/showcase/:id',
    Post: '/blog/:title'
  }
}
