import { uniqueArray, mapArray } from '../src/arrays';

describe('Array Utilities', () => {
  describe('uniqueArray', () => {
    test('removes duplicates from a number array', () => {
      expect(uniqueArray([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    test('returns the same array if there are no duplicates', () => {
      expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('works with an empty array', () => {
      expect(uniqueArray([])).toEqual([]);
    });

    test('works with strings', () => {
      expect(uniqueArray(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
  });

  describe('mapArray', () => {
    test('maps numbers to strings using a generic function', () => {
      const nums = [1, 2, 3];
      const strings = mapArray(nums, n => `Number ${n}`);
      expect(strings).toEqual(['Number 1', 'Number 2', 'Number 3']);
    });

    test('maps strings to their lengths', () => {
      const words = ['a', 'ab', 'abc'];
      const lengths = mapArray(words, w => w.length);
      expect(lengths).toEqual([1, 2, 3]);
    });

    test('works with an empty array', () => {
      expect(mapArray([], n => n)).toEqual([]);
    });
  });
});