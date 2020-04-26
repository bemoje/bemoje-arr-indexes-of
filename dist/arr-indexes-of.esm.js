import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

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

export default arrIndexesOf;