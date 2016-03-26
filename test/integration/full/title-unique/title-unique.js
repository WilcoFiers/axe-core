describe('skip link fail test', function () {
	'use strict';
	var results = [];

	var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5'];
	frames.forEach(function (frameId) {

		before(function (done) {
			var frm1 = document.getElementById(frameId);

			frm1.addEventListener('load', function () {
				var axe = frm1.contentWindow.window.axe;
				axe.a11yCheck(frm1.contentDocument, {
					runOnly: {
						type: 'rule',
						values: ['title-unique']
					}
				}, function (result) {
					results.push(result);
					done();
				});
			});

		});
	});

	it('has results', function () {
		assert(results.length > 0, 'no results');
		console.log(results);
	});

	describe('violations', function () {

	});

	describe('passes', function () {

	});
});
