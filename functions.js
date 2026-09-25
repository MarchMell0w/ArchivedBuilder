// functions
import * as data from "./data.js";
import * as chardata from "./char_data.js";

export function removeEgo() {
    chardata.char_ego = null;
}

export function addEgo(ego) {
    chardata.char_ego = ego;
}

export function addGift(egoGift, slot) {
    if(egoGiftList.indexOf(egoGift) != -1){
        chardata.char_egoGift[slot] = egoGift;
    }
}

export function removeGift(slot) {
    chardata.char_egoGift[slot] = null;
}

export function addWeapon(weapon) {
    if(data.weaponsList.indexOf(weapon) != -1){
        chardata.char_build.weapon = weapon;
    }
}

export function removeWeapon() {
    chardata.char_build.weapon = null;
}

export function addTrait(trait, slot) {
    if(data.traits.indexOf(trait) != -1) {
        chardata.char_traits[slot] = trait;
    }
}

export function removeTrait(slot) {
    chardata.char_traits[slot] = null;
}

export function increaseStat(sin, x) {
    if(sin in chardata.char_build && chardata.char_build.build_points >= x) {
    chardata.char_build[sin] += x;
    chardata.char_build.build_points -= x;
    return x;
    }
}

export function decreaseStat(sin, x) {
    if(sin in chardata.char_build && chardata.char_build[sin] >= x) {
    chardata.char_build[sin] -= x;
    chardata.char_build.build_points += x;
    return x;
    }
}