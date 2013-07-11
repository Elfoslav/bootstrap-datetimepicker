Package.describe({
	summary: "Bootstrap datepicker package for Meteor"
});

Package.on_use(function(api) {
	api.add_files('lib/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', 'client');
	api.add_files('lib/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'client');

	api.use('less', 'client');
});
