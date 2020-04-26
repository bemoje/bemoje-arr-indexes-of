import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Returns all indexes at which an element is found.
 * @param {Array} arr - The array to search
 * @param {*} element - The element to find
 * @returns {Array<number>}
 */
export default function arrIndexesOf(arr, element) {
	assertArgs(arr, element)
	assertType(Array, arr)

	return arr.reduce((accum, elem, i) => {
		if (elem === element) {
			accum.push(i)
		}
		return accum
	}, [])
}
