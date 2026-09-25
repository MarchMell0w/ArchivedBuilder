import * as arcfunctions from "./functions.js";
import * as arcdata from "./data.js";
import * as arcchar from "./char_data.js";

// test area
arcfunctions.addWeapon("weapon1");

arcfunctions.addTrait("agile", 0);
arcfunctions.addTrait("hypoxic", 1);
arcfunctions.addTrait("bizarre", 2);
console.log(arcchar.char_traits);

arcfunctions.removeTrait(0)

console.log(arcchar.char_traits);
console.log(arcchar.char_build);
console.log(arcchar.char_egoGift);
console.log(arcchar.char_egoGift);// all info pertaining character in builder