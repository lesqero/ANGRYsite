module.exports = function(eleventyConfig) {

      // Copy `img/` to `_site/img`
      eleventyConfig.addPassthroughCopy("components");

      eleventyConfig.addPassthroughCopy("img");

      eleventyConfig.addPassthroughCopy("css");

      eleventyConfig.addPassthroughCopy("fonts");

      eleventyConfig.addPassthroughCopy("about.html");

      eleventyConfig.ignores.add("about.html");

      eleventyConfig.addPassthroughCopy("contact.html");

      eleventyConfig.ignores.add("contact.html");

    return {
      dir: {
        output: "docs"
      }
    }
  

  };