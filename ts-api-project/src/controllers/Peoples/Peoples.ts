import Main from "../Main";
import * as validate from "typescript-validator";

type People= {
  id: string;
  name: string
};
// const PeopleV = validate.object<People>({
//   id: validate.string(),
//   name: validate.string()
// });
export default class Peoples extends Main{
  static get(): Promise<People>{
    console.log('Get');
    return new Promise((resolve) => resolve({
      id: 'testId',
      name: 'Name'
    }));
  }
  static create(people: People): Promise<People>{
    // console.log(PeopleV(people));
    return new Promise((resolve) => resolve(people));
  }
}