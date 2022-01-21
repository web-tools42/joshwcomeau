GreetingsFromSpace.Models.Card = Backbone.Model.extend({
  defaults: {
    photoUrl:     null,
    photoDate:    moment().format("YYYY-MM-DD"),
    header:       null,
    content:      null,
    creatorId:    null,
    recipientId:  null
  },

  initialize: function() {
    // do fancy stuffs here
  }
});