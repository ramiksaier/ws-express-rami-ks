const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use((req, res, next) => {
  const heur = timer.getHours;
  const day = timer.getDay();
  if (heur > 15 && heur < 17 && day >= 1 && day <= 5) {
    res.next();
  } else {
    res.send(
      `<img src="https://www.hostinger.fr/tutoriels/wp-content/uploads/sites/9/2017/05/comment-reparer-erreur-lors-de-la-connexion-a-la-bases-de-donnees-wordpress-1.png" alt="image1"/>
      <br>
      <h1>merci de connecter de lundi au vendredi de 7h jusqu'a 17:00</h1>
      <h2>merci pour votre comprehension</h2>`
    );
  }
});
app.use(express.static(path.join(__dirname, "public")));
const timer = new Date();
console.log(timer.getHours());

//create port
const port = 5000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server run in port ${port}`);
});
