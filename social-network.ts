export interface Person{
  name:String;
  age: number | string;
  profession?: string;
}

// type Person = { name: string; age: number; } | { name: string; age: string; };

export interface SocialNetwork{
  title:String;
  getUsers():Person[];
}