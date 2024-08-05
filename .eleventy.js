const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addCollection("allblogs", (collection) => {
    return collection.getFilteredByGlob("./src/blogs/**/*.md");
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  
  eleventyConfig.addPassthroughCopy("src/scripts/*.js");
  eleventyConfig.addPassthroughCopy("src/not_found.html");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy("**/**.{jpg,webp,png,gif,mp3,ogg,css}");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "../_built",
    }
  }
}