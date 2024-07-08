const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles/*.css");
  eleventyConfig.addPassthroughCopy("src/scripts/*.js");
  eleventyConfig.addPassthroughCopy("src/not_found.html");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy("**/*.{jpg,webp,png,gif,mp3,ogg}");
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