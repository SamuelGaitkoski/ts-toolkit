import { mergeObjects } from '../src/objects';

describe('Object Utilities', () => {
  test('mergeObjects: merges two objects with non-overlapping keys', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });

  test('mergeObjects: merges objects with overlapping keys, second object wins', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('mergeObjects: merges objects of different types', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 'test' };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 'test' });
  });
});