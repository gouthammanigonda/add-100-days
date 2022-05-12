const express = require("express");
const addDays = require("date-fns/addDays");
let app = express();

let newDate = new Date();
let result = addDays(newDate, 100);

const date = result.getDate();
const month = result.getMonth();
const year = result.getFullYear();

app.get("/", (request, response) => {
  response.send(`${date}/${month + 1}/${year}`);
});

app.listen(3000);
module.exports = app;
