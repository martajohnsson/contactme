define([
	'Backbone'
], function( Backbone ) {
	var categoryModel = Backbone.Model.extend ({
		defaults: {
			categoryType : "none",
		},
	});

	return categoryModel;
});