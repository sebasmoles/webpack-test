import "./sass/app.scss";
import laughing from "./assets/laughing.svg";
import { generateJoke } from "./generateJoke";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

// Looks for the first joke
generateJoke();
