(function($) {
var Contact = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el;
    }
  });

var contact = new Contact({ el: $(".contact-us .right-sidebar") });
})(jQuery);
