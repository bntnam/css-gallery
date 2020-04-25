const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "git@github.com:bntnam/css-gallery.git",
  },
  () => {
    console.log("Deploy Completed!");
  }
);
