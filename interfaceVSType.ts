
//Interfaces help with typos and errors
//Interfaces can extend other interfaces
type aliasT = string | boolean;

interface Material{
  type: string;
}

type staff = {
  name?: string; 
  test: string;
  material?: Material;
}
interface AttackFunction {
  (opponent: ComicBookCharacter, attackWith: number): number;
}

interface OptionalAttributes {
  insanity?: number;
  dexterity?: number;
  healingFactor?: number;
  attack: AttackFunction;
}

interface ComicBookCharacter extends OptionalAttributes {
  strength: number;
  secretIdentity?: string;
  alias: aliasT;
  health: number;
  attack: AttackFunction;
}

function attackFunc(
  this: ComicBookCharacter,
  opponent: ComicBookCharacter,
  attackWith: number
): number {
  opponent.health -= attackWith;
  console.log(
    `${this.alias} has just attacked ${opponent.alias}, who's health = ${
    opponent.health
    } `
  );
  return opponent.health;
}
let superHero: ComicBookCharacter = {
  alias: true,
  health: 5000,
  strength: 5000,
  attack: attackFunc
}
let superVillian: ComicBookCharacter = {
  strength: 0,
  secretIdentity: "Jack Napier",
  alias: "Joker",
  health: 75,
  insanity: 175,
  attack: attackFunc
}

let staff1: staff = {
  test: "ajd"
}
let staff2: staff = {
  name: "ajd",
  test: "ajd"
}

type TestType ={ name: string; count: number;}

const data: TestType = {
  name: "Name",
  count: 1
}

console.log(staff1);
console.log(staff2);

function getSecretIdentity(character: ComicBookCharacter) {
  if (character.secretIdentity) {
    console.log(`${character.alias} is ${character.secretIdentity}`);
  } else {
    console.log(`${character.alias} has no secret identity`);
  }
}

getSecretIdentity(superHero);
getSecretIdentity(superVillian);
superHero.attack(superVillian, superHero.strength); 


interface Foo {
  bar?: number;
  bas?: string;
}

var foo: Foo = {};
var foo1 = {} as Foo;
var foo2 = <Foo>{};
