/*
Site created by DrewBStew, 2016
*/

/*
SELECTORS
*/

var quote = document.getElementById("quote");
var quoteInfo = document.getElementById("quote-info");
var newQuoteButton = document.getElementById("new-quote-btn");

/*
EVENTS
*/

var quoteNumber = getQuoteNumber();

newQuoteButton.addEventListener("click", updateQuote);

function getQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
  // random number between 0 & 1, times the number of quotes, then floored
}

function updateQuote() {
  newRando = getQuoteNumber();
  while (newRando == quoteNumber) {
    newRando = getQuoteNumber();
  }
  quoteNumber = newRando;
  // This gets rid of repeated quotes
  quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quotes[quoteNumber].string + '<i class="fa fa-quote-right"></i>';
  quoteInfo.innerHTML =  'Season ' + quotes[quoteNumber].season +
   ', Episode ' + quotes[quoteNumber].episode_no + ': ' +
   quotes[quoteNumber].episode_name + ' (' + quotes[quoteNumber].airdate + ')';
}

/*
DOCUMENT READY
*/

updateQuote();
