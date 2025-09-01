import { uniqueArray, mapArray } from '../src/arrays';

test('uniqueArray removes duplicates', () => {
  expect(uniqueArray([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test('mapArray works with generics', () => {
  const nums = [1, 2, 3];
  const strings = mapArray(nums, n => `Number ${n}`);
  expect(strings).toEqual(['Number 1', 'Number 2', 'Number 3']);
});