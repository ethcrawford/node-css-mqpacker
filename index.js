#!/usr/bin/env node
const fs = require("fs");
const mqpacker = require("css-mqpacker");

const result = mqpacker.pack(fs.readFileSync("input.css", "utf8"), {
  from: "input.css",
  map: {
    inline: false
  },
  sort: true,
  to: "output.css"
});
fs.writeFileSync("output.css", result.css);
fs.writeFileSync("output.css.map", result.map);
