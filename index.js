
((module) => {
	'use strict';

	var CompositeDisposable = require('atom').CompositeDisposable;
	var closePaneItem = require('./close-pane-item.js');

	class PaneItemControlHelper {

		activate() {
			this.subscriptions = new CompositeDisposable();
			this.addCommand(
				'.enable-pane-item-control-helper.check-before-close',
				'package-pane-item-control-helper:close-if-accepted',
				closePaneItem.ifAccepted
			);
			this.addCommand(
				'.enable-pane-item-control-helper.able-to-be-closed',
				'package-pane-item-control-helper:close',
				closePaneItem
			);
		}

		deactivate() {
			this.subscriptions.dispose();
		}

		addCommand(target, command, handler) {
			this.subscriptions.add(atom.commands.add(target, {[command]: handler}));
		}

		get disposables() {
			return this.subscriptions;
		}

	}

	module.exports = new PaneItemControlHelper();

})(module);
