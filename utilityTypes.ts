// utilityTypes.ts
// Day 11 topic: built-in utility types — reshaping existing types
// instead of writing new ones from scratch

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

// 1. Partial<T> — makes every property optional
// Useful for "update" functions where only some fields change
function updateUser(id: string, updates: Partial<User>): void {
  console.log(`Updating user ${id}`, updates);
}
updateUser("u-01", { name: "New Name" }); // ✅ other fields not required

// 2. Required<T> — the opposite of Partial: forces every property to
// be present, even ones that were originally optional
interface Draft {
  title: string;
  body?: string;
}
type FinalPost = Required<Draft>;
const post: FinalPost = { title: "Hello", body: "Must be present now" };
// const bad: FinalPost = { title: "Hello" }; // ❌ 'body' is now required

// 3. Readonly<T> — locks every property against reassignment
const lockedUser: Readonly<User> = {
  id: "u-01",
  name: "Onileola",
  email: "dev@example.com",
  age: 24,
};
// lockedUser.name = "New Name"; // ❌ Cannot assign to 'name' — readonly

// 4. Pick<T, K> — build a smaller type from selected keys
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: "u-01", name: "Onileola" };

// 5. Omit<T, K> — the inverse of Pick: everything EXCEPT selected keys
type PublicUser = Omit<User, "email">;
const publicUser: PublicUser = { id: "u-01", name: "Onileola", age: 24 };

// 6. Record<K, V> — build an object type from a set of keys to one value type
type RolePermissions = Record<"admin" | "editor" | "viewer", string[]>;
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

// 7. ReturnType<T> — extract a function's return type without repeating it
function createUser(name: string, age: number): User {
  return { id: "u-99", name, email: `${name}@example.com`, age };
}
type CreatedUser = ReturnType<typeof createUser>; // same shape as User

// 8. Parameters<T> — extract a function's parameter types as a tuple
type CreateUserArgs = Parameters<typeof createUser>; // [string, number]
const args: CreateUserArgs = ["Onileola", 24];

// 9. Combining utility types — they compose
type UpdatablePreview = Partial<Pick<User, "name" | "email">>;
const change: UpdatablePreview = { name: "Updated Name" }; // both fields optional

// Key takeaway:
// Utility types reshape an existing type instead of forcing you to
// hand-write a near-duplicate. Partial for updates, Pick/Omit for
// subsets, Readonly for immutability, Record for dictionaries, and
// ReturnType/Parameters for deriving types straight from functions
// you've already written — one source of truth, many derived shapes.