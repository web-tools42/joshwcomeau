
////// Create a new Card
// This is the card that the user will be creating
var card = new GreetingsFromSpace.Models.Card;

//////// Create a new collection of Cards
// this collection will immediately begin syncing data
// no call to fetch is required, and any calls to fetch will be ignored
var cards = new GreetingsFromSpace.Collections.cards();

cards.on('sync', function(collection) {
  console.log('collection is loaded', collection);
});

////// Add a blank card to the collection.
cards.add({header: null});

console.log("Last card", cards.last())

// Attach our views to the DOM
var cardGeneratorView = new GreetingsFromSpace.Views.cardGenerator({ model: cards.last() });
var cardView          = new GreetingsFromSpace.Views.card({ model: cards.last() });