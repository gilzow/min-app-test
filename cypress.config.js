const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "k7k61v",
    baseUrl: 'http://localhost:1313/',
    env: {
      barfoo: "from config",
      environment: "local",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
