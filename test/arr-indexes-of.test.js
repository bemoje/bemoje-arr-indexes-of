import arrIndexesOf from '../src/arr-indexes-of'

describe('arrIndexesOf', () => {
	test('works', () => {
		const arr = ['a', 'b', 'c', 'a']
		expect(arrIndexesOf(arr, 'a')).toStrictEqual([0, 3])
		expect(arrIndexesOf(arr, 'b')).toStrictEqual([1])
		expect(arrIndexesOf(arr, 'd')).toStrictEqual([])
	})
})
