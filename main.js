let char_build = {
    build_points: 50,
    grade: 9,
    weapon: null,
    outfit: null,
    EGO: null,

    wrath: 0,
    gloom: 0,
    lust: 0,
    gluttony: 0,
    envy: 0,
    pride: 0,
    sloth: 0,
}

let weaponsList = ["weapon1", "weapon2"];
let outfitsList = ["outfit1", "outfit2"];
let egoList = ["ego1", "ego2"];

let traits = [
    "agile", 
    "bizarre", 
    "calm", 
    "chain_dashes", 
    "hot-headed", 
    "hypoxic", 
    "immovable", 
    "indomitable", 
    "maniacal", 
    "overprepared", 
    "problem_solving", 
    "proficient", 
    "reactive", 
    "resolute", 
    "resourceful", 
    "shimmering", 
    "steadfast", 
    "time_distortion", 
    "blindspot", 
    "coldness", 
    "energetic", 
    "leeching", 
    "lunging", 
    "thrusters", 
    "methodical", 
    "paranoid", 
    "chromatic", 
    "culinary", 
    "garde", 
    "rojima"
];
let char_traits = ["trait1", "trait2", "trait3"];

function addTrait(trait, slot) {
    if(traits.indexOf(trait) != -1) {
        char_traits[slot] = trait;
    }
}

function removeTrait(slot) {
    char_traits[slot] = null;
}

function increaseStat(sin, x) {
    if(sin in char_build && char_build.build_points >= x) {
    char_build[sin] += x;
    char_build.build_points -= x;
    return x;
    }
}

function decreaseStat(sin, x) {
    if(sin in char_build && char_build[sin] >= x) {
    char_build[sin] -= x;
    char_build.build_points += x;
    return x;
    }
}

addTrait("agile", 0);
addTrait("hypoxic", 1);
addTrait("bizarre", 2);
console.log(char_traits);

removeTrait(0)

console.log(char_traits);
console.log(char_build);