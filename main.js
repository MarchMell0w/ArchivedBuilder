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

function addTrait(x, y) {
    char_traits.indexOf(x)
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
console.log(char_traits.indexOf("trait2"));

console.log(char_build);