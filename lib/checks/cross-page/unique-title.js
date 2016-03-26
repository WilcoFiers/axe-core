var store = localStorage;

utils.store = {
	set: function (name, data) {
		if (typeof data === 'object') {
			data = JSON.stringify(data);
		}
		store.setItem('axe-core.' + name, data);
	},
	get: function (name) {
 		var data = store.getItem('axe-core.' + name);
 		try {
 			return JSON.parse(data);
 		} catch (e) {
 			return data;
 		}
	}
}