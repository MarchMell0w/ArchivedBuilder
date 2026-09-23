let char_build = {
    build_points: 50,
    grade: 9,

    wrath: 0,
    gloom: 0,
    lust: 0,
    gluttony: 0,
    envy: 0,
    pride: 0,
    sloth: 0,
}

let traits = ["trait1", "trait2", "trait3"];

function addTrait(trait, x) {
    traits[x] = trait;
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

addTrait("traitTest", 0)

for(let trait of traits) {
    console.log(trait)
}

console.log(char_build);