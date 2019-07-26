 /******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {quote:'Hard work beats talent when talent fails to work hard'
    source:'Kevin Durant' 
  },

  {quote:'You miss 100 percent of the shots you dont take'
     source:'Wayne Gretzky' 
  },
 
  {quote:'Live the live you have imagined'
    source:'Henry David Thorreau' 
  },
 
  {quote:'Dont be afraid of failure this is the way to suceed'
   source:'Lebron James' 
  },
 
  {quote:'There is no way around hard work, embrace it'
  source:'Roger Federer'
  },
  ];
   console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
  function getRandomQuote(): {
  timeoutID = window.setTimeout(window.alert, 2000, 
  var randomNumber = Math.floor(Math.random(5)*quotes.lenth);
  return quotes [randomNumber];
  }




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
  function printQuote() {
    console.log("clicked")
    var actualQuote = getRandomQuote(quotes);  
    var stringOFQuoteProperties = "";
    stringOFQuoteProperties += "<p class='quotes>">" + actualQuote.quote +"</p> <p>class='source'>" + actualQuote.source + ""</p>
    <p class="quotes"> [quote here] </p>
    <p class="source"> [source here] </p>
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties; 
    
    console.log(printQuote());
  
  }





/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

  document.getElementById("javascript.js").src = javascript.js
  

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      