var store = localStorage;

utils.store = {
	set: function (name, data) {
		'use strict';
		if (typeof data === 'object') {
			data = JSON.stringify(data);
		}
		store.setItem('axe-core.' + name, data);
	},
	get: function (name) {
		'use strict';
 		var data = store.getItem('axe-core.' + name);
 		try {
 			return JSON.parse(data);
 		} catch (e) {
 			return data;
 		}
	},
	clear: store.clear.bind(store)
};