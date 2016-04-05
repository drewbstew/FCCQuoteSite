/*
Site created by DrewBStew, 2016

Pseudo-code fun:

1) Each quote has its own object
2) objects have properties of string (the actual quote), season#, episode#, episode_name, airdate
3) Example: string="Mmm... sacrilicious.", season#=5, episode#=16, episode_name="Homes Loves Flanders", airdate="1994"
*/

/*
SELECTORS
*/

var quote = document.getElementById("quote");
var quoteInfo = document.getElementById("quote-info")
var newQuoteButton = document.getElementById("new-quote-btn")

/*
QUOTES
*/

// Can I keep all this shit in a separate JS doc and link to it?
var quotes = [
  {
    string:"Mmm... sacrilicious.",
    season:"5",
    episode_no:"16",
    episode_name:"Homer Loves Flanders",
    airdate:"1994"
  },
  {
    string:"Oh, they have the internet on computers now!",
    season:"9",
    episode_no:"14",
    episode_name:"Das Bus",
    airdate:"1998"
  },
  {
    string:"Hey! Just because I don't care doesn't mean I don't understand!",
    season:"2",
    episode_no:"19",
    episode_name: "Lisa's Substitute",
    airdate:"1991"
  }
];

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
  quoteNumber = getQuoteNumber();
  quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quotes[quoteNumber].string + '<i class="fa fa-quote-right"></i>';
  quoteInfo.innerHTML =  'Season ' + quotes[quoteNumber].season +
   ', Episode ' + quotes[quoteNumber].episode_no + ': ' + quotes[quoteNumber].episode_name + ' (' + quotes[quoteNumber].airdate + ')';
}

/*
DOCUMENT READY
*/

updateQuote();
