/// <reference types="./" />

const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

const vkVersion = "1.2.131.1";

process.stdout.write(`(nvk-continued) Using Vulkan v${vkVersion}\n`);

if(process.env.NVK_NO_API_VALIDATION === "true") {
  process.stdout.write(`(nvk-continued) Api validation disabled\n`);
  module.exports = require(`${__dirname}/interfaces-no-validation.js`);
} else {
  process.stdout.write(`(nvk-continued) Api validation enabled\n`);
  module.exports = require(`${__dirname}/interfaces.js`);
}
