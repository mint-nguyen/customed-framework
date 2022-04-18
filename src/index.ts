import { User } from "./models/User";

const user = new User({ name: "New", age: 23 });

user.events.on("change", () => {
  console.log(`It's changed`);
});

user.events.trigger("change");

user.save();
