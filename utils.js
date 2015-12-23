
((module) => {
	'use strict';

	module.exports = {
		findParentElement: findParentElement
	};

	function findParentElement(begin, check) {
		for ( ; begin; begin = begin.parentElement) {
			if (check(begin)) {
				return begin;
			}
		}
	}

})(module);
