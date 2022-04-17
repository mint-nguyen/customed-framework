import { User } from "./models/User";

const user = new User({ name: "New", age: 23 });

user.save();
