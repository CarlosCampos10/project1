
// the quotes i chose
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


    //this function returns a random quote from the array
  function getRandomQuote(): {
  timeoutID = window.setTimeout(window.alert, 2000, 
  var randomNumber = Math.floor(Math.random(5)*quotes.lenth);
  return quotes [randomNumber];
  }



    // the printQuote function calls the getRandomQuote (im still having trouble here)
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

      document.getElementById('loadQuote').addEventListener("click", printQuote, false);



  document.getElementById("javascript.js").src = javascript.js
  
