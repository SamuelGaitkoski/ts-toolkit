// Array utilities

// Remove duplicates from an array using Set
export function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Map an array using a callback function with generics
export function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}