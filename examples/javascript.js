// Theme sample: JavaScript syntax mix.

import { readFile } from "node:fs/promises";

const user = {
  id: 1,
  name: "Ada",
  tags: ["dev", "theme"],
};

class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet(prefix = "Hi") {
    return `${prefix}, ${this.name}`;
  }
}

const numbers = [1, 2, 3, 4]
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2);

async function load(path) {
  try {
    const text = await readFile(path, "utf8");
    return text?.trim() ?? "";
  } catch (err) {
    return String(err);
  }
}

const re = /theme\s+(\w+)/gi;
const greeter = new Greeter(user.name);
console.log(greeter.greet(), numbers, re.test("theme highlight"));

load("./README.md").then((text) => {
  console.log(text.slice(0, 12));
});
