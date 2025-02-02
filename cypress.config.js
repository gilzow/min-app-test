const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'k7k61v',
    baseUrl: 'http://localhost:1313/',
    env: {
      barfoo: 'from config',
      environment: 'local',
      site: 'platformsh',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: [
      'www.googletagmanager.com',
      'cdn.cookielaw.org',
      'cdn.heapanalytics.com',
      'heapanalytics.com',
      'cdn.matomo.cloud',
    ],
  },
});
