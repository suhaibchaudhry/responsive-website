(function($) {
var Contact = Backbone.View.extend({
	events: {
		'submit form': 'submitContact'
	},
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el;
    },
    submitContact: function(e) {
    	e.stopPropagation();
    	e.preventDefault();

    	$.post('/public/sendemail', $(e.currentTarget).serializeArray(), function(data) {
    		console.log(data);
    	});
    }
  });

var contact = new Contact({ el: $(".contact-us .right-sidebar") });
})(jQuery);
