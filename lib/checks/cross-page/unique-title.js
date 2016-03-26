var result;
var data = utils.store.getItem('unique-title');
var url = window.location.href;
var currTitle = document.getElementsByTagName('title')[0].textContent

if (data) {
	result = !data.reduce(function (result, title) {
		return result || title === currTitle;
	}, false);

} else {
	data = {};
	result = true;
}

data[url] = currTitle;

utils.store.set('unique-title', data);

return result;