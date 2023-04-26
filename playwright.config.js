// @ts-check
const { defineConfig, devices } = require('@playwright/test');
global.userData = require('./data.json');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    headless: false,
    channel: "chromium",
    screenshot: "only-on-failure",
    video:"retain-on-failure",
    trace: "on",
    workers: 1
  },
  retries: 2,
  reporter: 'html',

});

