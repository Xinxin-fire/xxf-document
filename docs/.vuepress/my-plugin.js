module.exports = (options, ctx) => {
  console.log(options);
          console.log(ctx);
  return {
      name: 'vuepress-plugin-code-copy',
      chainMarkdown: (config) => {
        console.log('---------------------');
        console.log(config);
        // config.plugin('containers')
        //   .use(demoBlockContainers(options))
        //   .end();
      },
      async ready() {
          console.log('Hello World!');
          console.log(options);
          console.log(ctx);
      }
  }
}