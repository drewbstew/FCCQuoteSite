/*
Site created by DrewBStew, 2016
*/

/*
SELECTORS
*/

var quote = $("#quote");
var quoteInfo = $("#quote-info");
var newQuoteButton = $("#new-quote-btn");

/*
EVENTS
*/

var quoteNumber = getQuoteNumber();

newQuoteButton.on("click", function(){
  updateQuote() });

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
  quote.html('<i class="fa fa-quote-left"></i>' + quotes[quoteNumber].string + '<i class="fa fa-quote-right"></i>');
  quoteInfo.html('Season ' + quotes[quoteNumber].season +
    ', Episode ' + quotes[quoteNumber].episode_no + ': ' +
    quotes[quoteNumber].episode_name + ' (' + quotes[quoteNumber].airdate + ')');
}

/*
DOCUMENT READY
*/

$(document).ready(function() {
  updateQuote();
});
