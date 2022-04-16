import { User } from "./models/User";

const user = new User({ name: "Mint", age: 20 });

console.log(user);
user.set({ name: "MintNext", age: 21 });
console.log(user);
