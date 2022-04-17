import { User } from "./models/User";

const user = new User({ name: "Mint", age: 20 });

console.log(user);
user.on("change", () => {
  console.log("Chage 1");
});
user.on("save", () => {
  console.log("Save");
});

user.trigger("change");
console.log(user);
