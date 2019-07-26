 
//These are my quotes put inside an array//
let quotes = [
  {
  quote:"You miss 100 percent of the shots you dont take", 
    source: "Wayne Gretzky",
  citation: "",
  year: ""
  },
  {
  quote:"Live the live you have imagined",
    source:"Henry David Thorreau" ,
  },
  {
  quote:"Dont be afraid of failure this is the way to suceed",
   source:"Lebron James",
  },
  {
  quote:"There is no way around hard work, embrace it",
  source:"Roger Federer"
  },
];

//This function gets a random Quote by first getting a random Number and then searching the index of the quotes array for that object.
let storedNum;

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
//Background color array containing css colors.
let colors = ['E633FF', '070E07' , 'FFF933', '337DFF', 'FF3333'];

//Function to pull a random color from the background color array.
function randomColor() {
  let randomNum2 = Math.floor(Math.random() * 4);
  return colors[randomNum2];

}

/*
This function creates an empty html string.
It then uses the getRandomQuote function to select a random quote from the quote array.
It starts to compile a string of html from the different key/value pairs associated with that random quote.  Once the html is all concatenated, it will then print that quote to the webpage.
I set an interval time to reload the quote of 25 seconds.
Background color changes when the button is pressed or when the interval time elapses.
*/
let timer;

function quoteTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 13000);
}

function randomBackgroundColor() {
  let newBackground = randomColor();
  //Sets a new background color, then matches it to the quote button
  document.body.style.background = newBackground;
  document.getElementById("loadQuote").style.backgroundColor = newBackground;
}

function printQuote() {
  let html = '';
  let randomQuote =  getRandomQuote();

  randomBackgroundColor();
  quoteTimer();

  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  html += '</p>';

//The variable div is being set to the quote box ID.
//Then the innerHTML is changed to the html string we compiled.
//Then we return that div.
  let div = document.getElementById('quote-box');
  div.innerHTML = html;
  return div
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
