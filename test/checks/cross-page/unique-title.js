describe('unique-title', function () {
	'use strict';

	var fixture = document.getElementById('fixture');
	var url;

	before(function () {
		url = window.location.href;
	});

	afterEach(function () {
		fixture.innerHTML = '';
		localStorage.clear();
	});

	function setTitle(title) {
		document.getElementsByTagName('title')[0].textContent = title;
	}

	it('returns true when there are no titles', function () {
		setTitle('test title');

		localStorage.setItem('axe-core.unique-title', '{}');

		assert.isTrue(checks['unique-title'].evaluate());
	});

	it('returns true when the title is unique', function () {
		setTitle('test title');

		var data = {};
		data[url + '/1'] = 'some title';
		data[url + '/2'] = 'other title';
		data[url + '/3'] = 'better title';
		localStorage.setItem('axe-core.unique-title', JSON.stringify(data));

		assert.isTrue(checks['unique-title'].evaluate());
	});

	it('returns true if the url is already known', function () {
		setTitle('test title');

		var data = {};
		data[url] = 'test title';
		data[url + '/2'] = 'other title';
		data[url + '/3'] = 'better title';
		localStorage.setItem('axe-core.unique-title', JSON.stringify(data));

		assert.isTrue(checks['unique-title'].evaluate());
	});

	it('returns false if the url is used on another url', function () {
		setTitle('test title');

		var data = {};
		data[url + '/1'] = 'test title';
		data[url + '/2'] = 'other title';
		data[url + '/3'] = 'better title';
		localStorage.setItem('axe-core.unique-title', JSON.stringify(data));

		assert.isFalse(checks['unique-title'].evaluate());
	});


});