// Custom types and generics

// Conditional type: if T is an array, return its element type; otherwise return T
export type ElementType<T> = T extends (infer U)[] ? U : T;

// Interface for a user object
export interface User {
  id: number;      // unique identifier
  name: string;    // user's name
  email?: string;  // optional property for email
}