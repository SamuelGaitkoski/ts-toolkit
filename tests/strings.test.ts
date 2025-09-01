import { capitalize } from '../src/strings';

describe('String Utilities', () => {
  test('capitalize: capitalizes the first letter of a lowercase word', () => {
    expect(capitalize('word')).toBe('Word');
  });

  test('capitalize: leaves first letter capitalized if already capitalized', () => {
    expect(capitalize('Word')).toBe('Word');
  });

  test('capitalize: works with single-character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('capitalize: returns empty string as is', () => {
    expect(capitalize('')).toBe('');
  });
});