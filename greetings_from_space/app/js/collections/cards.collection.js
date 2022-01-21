GreetingsFromSpace.Collections.cards = Backbone.Firebase.Collection.extend({
  url: 'https://greetings-from-space.firebaseio.com/cards',
  model: GreetingsFromSpace.Models.Card
});