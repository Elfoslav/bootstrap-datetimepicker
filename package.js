Package.describe({
	summary: "Bootstrap datepicker package for Meteor"
});

Package.on_use(function(api) {
	api.add_files('lib/bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js', 'client');
	api.add_files('lib/bootstrap-datetimepicker/src/less/bootstrap-datetimepicker.less', 'client');

	api.use('less', 'client');
});
