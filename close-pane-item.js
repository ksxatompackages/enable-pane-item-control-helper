
((module) => {
	'use strict';

	var findParentElement = require('./utils.js').findParentElement;

	module.exports = (event) => getPaneItem(event).destroy();

	module.exports.ifAccepted = (event) => {
		var paneitem = getPaneItem(event);
		paneitem.acceptToBeClosed() && paneitem.destroy();
	};

	function getPaneItem(event) {
		return findPaneItemView(event.target).getPaneItem();
	}

	function findPaneItemView(begin) {
		return findParentElement(begin, (element) => typeof element.getPaneItem === 'function');
	}

})(module);
