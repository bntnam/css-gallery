const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "git@github.com:bntnam/bntnam.github.io.git",
  },
  () => {
    console.log("Deploy Completed!");
  }
);
