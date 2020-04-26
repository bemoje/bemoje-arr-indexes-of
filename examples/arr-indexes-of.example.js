import arrIndexesOf from '../src/arr-indexes-of'

const arr = ['a', 'b', 'c', 'a']

arrIndexesOf(arr, 'a')
//=> [0, 3]

arrIndexesOf(arr, 'b')
//=> [1]

arrIndexesOf(arr, 'd')
//=> []
