"use strict";
function attackFunc(opponent, attackWith) {
    opponent.health -= attackWith;
    console.log(this.alias + " has just attacked " + opponent.alias + ", who's health = " + opponent.health + " ");
    return opponent.health;
}
var superHero = {
    alias: true,
    health: 5000,
    strength: 5000,
    attack: attackFunc
};
var superVillian = {
    strength: 0,
    secretIdentity: "Jack Napier",
    alias: "Joker",
    health: 75,
    insanity: 175,
    attack: attackFunc
};
var staff1 = {
    test: "ajd"
};
var staff2 = {
    name: "ajd",
    test: "ajd"
};
var data = {
    name: "Name",
    count: 1
};
console.log(staff1);
console.log(staff2);
function getSecretIdentity(character) {
    if (character.secretIdentity) {
        console.log(character.alias + " is " + character.secretIdentity);
    }
    else {
        console.log(character.alias + " has no secret identity");
    }
}
getSecretIdentity(superHero);
getSecretIdentity(superVillian);
superHero.attack(superVillian, superHero.strength);
var foo = {};
var foo1 = {};
var foo2 = {};
