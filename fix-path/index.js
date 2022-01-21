'use strict';
const shellPath = require('shell-path');

module.exports = () => {
	if (window.process.platform !== 'darwin') {
		return;
	}

	window.process.env.PATH =
		shellPath.sync() ||
		[
			'./node_modules/.bin',
			'/.nodebrew/current/bin',
			'/usr/local/bin',
			window.process.env.PATH,
		].join(':');
};
