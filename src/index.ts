import { User } from "./models/User";

const user = new User({ id: 5 });

user.fetch();
console.log(user);
