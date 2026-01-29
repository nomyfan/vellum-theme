// Theme sample: TypeScript syntax mix.

type ID = number | string;

enum Status {
  Ok = "ok",
  NotFound = "not_found",
}

interface User {
  id: ID;
  name: string;
  tags?: string[];
}

interface Greeter<T> {
  greet(value: T, prefix?: string): string;
}

class UserGreeter implements Greeter<User> {
  greet(value: User, prefix = "Hi"): string {
    return `${prefix}, ${value.name}`;
  }
}

function isUser(value: unknown): value is User {
  return !!value && typeof value === "object" && "name" in value;
}

const user: User = { id: 1, name: "Ada", tags: ["dev", "theme"] };
const greeter = new UserGreeter();

const values: Array<ID> = [1, "two", 3];
const mapped = values.map((item) => (typeof item === "number" ? item * 2 : item));

const status: Status = user.id === 0 ? Status.NotFound : Status.Ok;

console.log(greeter.greet(user), mapped, status, isUser(user));
