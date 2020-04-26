(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-indexes-of'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Returns all indexes at which an element is found.
	 * @param {Array} arr - The array to search
	 * @param {*} element - The element to find
	 * @returns {Array<number>}
	 */
	function arrIndexesOf(arr, element) {
		assertArgs(arr, element);
		assertType(Array, arr);

		return arr.reduce((accum, elem, i) => {
			if (elem === element) {
				accum.push(i);
			}
			return accum
		}, [])
	}

	return arrIndexesOf;

})));
