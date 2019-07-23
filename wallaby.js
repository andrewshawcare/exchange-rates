module.exports = () => {
  return {
    files: ["./{,!(dist|node_modules)/**}/index.js"],
    tests: ["./{,!(dist|node_modules)/**}/test.js"],
    env: {
      type: "node",
      runner: "node"
    },
    testFramework: "jasmine",
    setup: wallaby => {
      wallaby.testFramework.loadConfig({
        helpers: [
          `${wallaby.localProjectDir}/node_modules/esm`,
          `${wallaby.localProjectDir}/helpers/**/*.js`
        ]
      });
    }
  };
};
