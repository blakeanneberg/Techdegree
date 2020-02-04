/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

var quotes = [
  {
      quote: "Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.",
      source: "A Treatise of Human Nature",
      citation: "David Hume",
      year: "1739",
      categorization: "old"
  },
  {
    quote: "To write well and to speak well is mere vanity if one does not live well.",
    source: "Quotation",
    citation: "Bridget of Sweden",
    year: "1303-1373",
    categorization: "old"
  },
  {
    quote: "Lagom är bäst.",
    source: "Quotation",
    citation: "",
    year: "",
    categorization: "old"
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    source: "Quotation",
    citation: "",
    year: "",
    categorization: "new"
  },
  {
    quote: "Happiness is not something readymade. It comes from your own actions.",
    source: "Quotation",
    citation: "",
    year: "",
    categorization: "old"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Sweden",
    citation: "",
    year: "",
    categorization: "old"
  }
];
var newArray = [];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  // Random number generator
  var quoteIndex = Math.floor(Math.random() * quotes.length);

  for (var i = 0; i < array.length; i++) {
// array.length rather than the actual quotes variable makes this function a little bit more flexible

    var randomQuote = array[quoteIndex]; 
    // Random quote variable with the index set to your random number variable
  }
  return randomQuote; // Returns random quote variable
}

/***
 * `printQuote` function
***/

function printQuote() {
  //call getRandomQuote and print using template in

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
