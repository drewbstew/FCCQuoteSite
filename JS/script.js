/*
Site created by DrewBStew, 2016
*/

/*
SELECTORS
*/

var quote = $("#quote");
var quoteInfo = $("#quote-info");
var newQuoteButton = $("#new-quote-btn");
var twitterButton = $("#twitter-btn");

/*
EVENTS
*/

var quoteNumber = getQuoteNumber();
var buttonNumber = getButtonNumber();

newQuoteButton.on("click", function(){
  updateQuote()
});

twitterButton.on("click", function() {
  postToTwitter()
});

function getQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
  // random number between 0 & 1, times the number of quotes, then floored
}

function getButtonNumber() {
  return Math.floor(Math.random() * buttonText.length);
}

function updateButtonText() {
  buttonNumber = getButtonNumber();
  newQuoteButton.text(buttonText[buttonNumber]);
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
  updateButtonText();
}

function postToTwitter() {
  twitterButton.attr("href","https://twitter.com/intent/tweet?url=http://drewbstew.github.io/homer_quotes&text=" + quote.text())
}

/*
DOCUMENT READY
*/

$(document).ready(function() {
  updateQuote();
});
