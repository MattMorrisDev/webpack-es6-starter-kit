class ExamplePlugin {
  apply(compiler) {
    compiler.plugin('run', (compiler, callback) => {
      console.log(`EXAMPLE PLUGIN REPORTING AT RUNTIME!`);
      callback();
    });
  }
}

module.exports = ExamplePlugin;
