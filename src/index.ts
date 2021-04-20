import connect from "./entity/conection";
import User from "./entity/User";
import {getRepository} from "typeorm";

export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}
console.log(sayHelloWorld("Ibsem2"));

connect().then(async() => {
  const repository = getRepository(User);
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    repository.save(user);
})