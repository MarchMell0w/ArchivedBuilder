// all info pertaining character in builder
let char_build = {
    build_points: 50,
    grade: 9,
    weapon: null,
    outfit: null,
    EGO: null,
    singu: null,
    mang: 0,
    mang_prog: 0,
    bloodfiend: false,

    office: null,

    wrath: 0,
    gloom: 0,
    lust: 0,
    gluttony: 0,
    envy: 0,
    pride: 0,
    sloth: 0,
}

// lists of available things from each category to be picked from
let weaponsList = ["weapon1", "weapon2"];
let outfitsList = ["outfit1", "outfit2"];
let egoList = ["ego1", "ego2"];
let egoGiftList = ["egift1", "egift2"];
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
// "slots" from each category that the user can apply available options to via the relevant functions
let char_traits = ["trait1", "trait2", "trait3"];
let char_pages = ["page1", "page2", "page3", "page4", "page5"];
let char_egoGift = ["gift1", "gift2", "gift3"];

// functions
function addGift(egoGift, slot) {
    if(egoGiftList.indexOf(egoGift) != -1){
        char_egoGift[slot] = egoGift;
    }
}

function removeGift(slot) {
    char_egoGift[slot] = null;
}

function addWeapon(weapon) {
    if(weaponsList.indexOf(weapon) != -1){
        char_build.weapon = weapon;
    }
}

function removeWeapon() {
    char_build.weapon = null;
}

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

// test area
addWeapon("weapon1");

addTrait("agile", 0);
addTrait("hypoxic", 1);
addTrait("bizarre", 2);
console.log(char_traits);

removeTrait(0)

console.log(char_traits);
console.log(char_build);
console.log(char_egoGift);
console.log(char_egoGift);