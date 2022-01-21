GreetingsFromSpace.Views.card = Backbone.View.extend({
  el: "#card",
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  },
  template: function(templateData, nasaData) {
    return _.template(templateData, { photoUrl: nasaData.url })
  },

  buildNasaLink: function() {
    var link = '/api/nasa/';
    var time = moment(this.model.get("photoDate"));

    link += time.format("YYYY")+'/';
    link += time.format("MM")+'/';
    link += time.format("DD");

    return link;
  },

  render: function() {
    var template;

    $.ajax({
      url: this.buildNasaLink(), 
      dataType: 'json',
      success: function(rawNasaData) {
        var nasaData = JSON.parse(rawNasaData);

        $.get( '/templates/card.template.html', function(templateData) {
          template = this.template(templateData, nasaData);
          this.$el.html(template);
        }.bind(this), 'html');

      }.bind(this)
    });



    
  }
});