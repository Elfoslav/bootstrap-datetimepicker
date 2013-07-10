Package.describe({
	summary: "Bootstrap datepicker package for Meteor"
});

Package.on_use(function(api) {
	api.add_files('lib/bootstrap-datepicker/src/js/bootstrap-datetimepicker.js', 'client');
	api.add_files('lib/bootstrap-datepicker/src/less/bootstrap-datepicker.less', 'client');

	api.use('less', 'client');
});
