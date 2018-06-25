interface Crocodile { personality: string; }
interface Taxes { year: number; }
interface Container<T> { unit: T; }

let crocContainer: Container<Crocodile> = { unit: { personality: "mean" } };
let taxContainer: Container<Taxes> = { unit: { year: 2011 } };

interface RedCroc extends Crocodile { color: "red"; }
interface BlueCroc extends Crocodile { color: "blue"; }

interface CrocContainer<T extends Crocodile> { crocUnit: T; }

let blueCrocContainer: CrocContainer<BlueCroc> = { crocUnit: { personality: "cool", color: "blue" } };

class ClassyContainer<T extends Crocodile> {
  classyCrocUnit: T;
}

let classyCrocContainer = new ClassyContainer();
classyCrocContainer.classyCrocUnit = { personality: "classy" };

let classyCrocContainer1 = new ClassyContainer<RedCroc>();
classyCrocContainer.classyCrocUnit = { personality: "classy", color: "red" };

class CCC<T extends Crocodile> {
  constructor(public cccUnit: T) { }
};

let ccc = new CCC({ personality: "ultra classy", likesCheetos: true });

let ccc1 = new CCC<BlueCroc>({ personality: "ultra classy", likesCheetos: true, color: "blue" });


