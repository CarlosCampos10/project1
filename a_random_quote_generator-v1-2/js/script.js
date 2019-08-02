//These are my quotes put inside an array//
let quotes = [
  {
    quote: "Hard work beats talent when talent fails to work hard.",
    source: "Kevin Durant"
  },
  {
    quote:
      "The best decisions aren't made with your mind, but with your instinct."",
    source: "Lionel Messi",
    citation: "Fifa interview",
    year: "2012"
  },
  {
    quote: "Live the live you have imagined",
    source: "Henry David Thorreau"
  },
  {
    quote: "Dont be afraid of failure this is the way to suceed",
    source: "Lebron James"
  },
  {
    quote: "There is no way around hard work, embrace it",
    source: "Roger Federer"
  }
];

let storedNum;

//this function selects a random quote from 1-4//
//return random quote//
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 4);
  if (randomNum === storedNum) {
    return getRandomQuote();
  }
  if (randomNum !== storedNum) {
    storedNum = randomNum;
  }
  return quotes[randomNum];
}
//I got these color codes online but im still having trouble because they wont change //
//the background color//
let colors = ["E633FF", "070E07", "FFF933", "337DFF", "FF3333"];

//Function to choose a color at random//
function randomColor() {
  let randomNum2 = Math.floor(Math.random() * 4);
  return colors[randomNum2];
}
// Function to change quote//
//timer to change quote every 13 seconds//
let timer;

function quoteTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 13000);
}

function randomBackgroundColor() {
  let newBackground = randomColor();
  //I understood we werent suppposed to touch the css files which is why//
  //im trying to change the background from here, but it wont change//
  document.body.style.background = newBackground;
  document.getElementById("loadQuote").style.backgroundColor = newBackground;
}
//this function should display a different quote when icon is clicked//
function printQuote() {
  let html = "";
  let randomQuote = getRandomQuote();

  randomBackgroundColor();
  quoteTimer();
  html += '<p class="quote">' + randomQuote.quote + "</p>";
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + "</span>";
  }
  html += "</p>";

  //https://www.w3schools.com/jsref/jsref_return.asp//
  let quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = html;
  return quoteDiv;
}

/***
  So do not make any changes to the line of code below this
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
