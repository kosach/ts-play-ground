import Main from "../Main";
import schema from "./shema";
import { postValidate } from '../../common/validator';

type People= {
  id: string;
  name: string
};

export default class Peoples extends Main{
  static shema: string = "asdal'ksd;ak";

  constructor(){ super() }

  static get(): Promise<People>{
    return new Promise((resolve) => resolve({
      id: 'testId',
      name: 'Name'
    }));
  }

  @postValidate(schema)
  static create(people: People): Promise<People>{
    console.log(this.shema);
    return new Promise((resolve) => resolve(people));
  }
}