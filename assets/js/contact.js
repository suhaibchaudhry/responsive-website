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
	var that = this;
    	$.post('/public/sendemail', $(e.currentTarget).serializeArray(), function(data) {
    		//console.log(data);
		that.$el.html('<div data-alert class="alert-box success radius">Your request was dispatched successfully.</div>');
    	});
    }
  });

var contact = new Contact({ el: $(".contact-us .right-sidebar") });
})(jQuery);
