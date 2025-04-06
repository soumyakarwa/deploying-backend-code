require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const rest = require("restler");
const port = process.env.PORT || 3000;

app.use(express.static("public"));

console.log(process.env.API_KEY);

// Find all of the objects with the word "dog" in the title and return only a few fields per record
rest
  .get("https://api.harvardartmuseums.org/object", {
    query: {
      apikey: process.env.API_KEY,
      title: "flower",
      fields: "objectnumber,title,dated,images",
    },
  })
  .on("complete", function (data, response) {
    const titles = data.records.map((record) => record.title);
    const cleanedTitles = titles.map((title) => title.replace(/^\[|\]$/g, ""));
    console.log(cleanedTitles);
    app.get("/endpoint", (req, res) => {
      res.json(cleanedTitles);
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
