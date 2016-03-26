var result;
var data = commons.utils.store.get('unique-title');
var url = window.location.href;
var currTitle = document.getElementsByTagName('title')[0].textContent

if (data) {
	result = !Object.keys(data).reduce(function (result, pageUrl) {
		var title = data[pageUrl]
		return result || (title === currTitle && pageUrl !== url);
	}, false);

} else {
	data = {};
	result = true;
}

data[url] = currTitle;

commons.utils.store.set('unique-title', data);

return result;	