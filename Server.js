const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
const timer = new Date();
console.log(timer.getHours());
app.use((res, req, next) => {
  const heur = timer.getHours;
  const day = timer.getDay();
  if (heur > 15  && heur < 17 || day >= 1 && day <= 5) {
    res.next();
  } else {
    console.log("merci de connecter demain");
  }
});

//create port
const port = 5000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server run in port ${port}`);
});
