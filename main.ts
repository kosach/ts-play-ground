
import {SocialNetwork} from "./social-network";
import "./interfaceVSType";
import "/generics";

class App implements SocialNetwork {
  title = "Test";
  getUsers(){
    return [{name: "Jhon", age: '12'}];
  }
}

const test = new App();
// console.log(test.getUsers());
