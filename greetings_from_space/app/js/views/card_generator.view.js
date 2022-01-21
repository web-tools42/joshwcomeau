GreetingsFromSpace.Views.cardGenerator = Backbone.View.extend({
  el: "#card-generator",
  initialize: function() {
    this.render();
  },
  getDateForCard: function() {
    this.model.set("photoDate", this.$("input").val());
  },
  template: function(templateData, nasaData) {
    return _.template(templateData)
  },

  events: {
    'change input': 'getDateForCard'
  },

  render: function() {
    var template;

    $.get( '/templates/card_generator.template.html', function(templateData) {
      template = this.template(templateData);
      this.$el.html(template);
    }.bind(this), 'html');
    
  }
});