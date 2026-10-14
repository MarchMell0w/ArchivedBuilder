// functions
//import * as data from "./data.js";
//import * as chardata from "./char_data.js";

/* 
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

commented out entire code block was doing some weird stuff and bricking the js file would have to look into it.*/ 

//LOWK this is super inefficent and i probably could of just made a constructor to make all of these but fuck it idk how to use javascript
let wrathVar = 0;
let envyVar = 0;
let prideVar = 0;
let gloomVar = 0;
let gluttonVar = 0;
let slothVar = 0;
let desireVar = 0;
let sinstatCounter = 50;

const wrathButtonIncrease = document.getElementById("wrathButtonIncrease");
const wrathButtonDecrease = document.getElementById("wrathButtonDecrease");

const envyButtonIncrease = document.getElementById("envyButtonIncrease");
const envyButtonDecrease = document.getElementById("envyButtonDecrease");

const prideButtonIncrease = document.getElementById("prideButtonIncrease");
const prideButtonDecrease = document.getElementById("prideButtonDecrease");

const gloomButtonIncrease = document.getElementById("gloomButtonIncrease");
const gloomButtonDecrease = document.getElementById("gloomButtonDecrease");

const gluttonButtonIncrease = document.getElementById("gluttonButtonIncrease");
const gluttonButtonDecrease = document.getElementById("gluttonButtonDecrease");

const slothButtonIncrease = document.getElementById("slothButtonIncrease");
const slothButtonDecrease = document.getElementById("slothButtonDecrease");

const desireButtonIncrease = document.getElementById("desireButtonIncrease");
const desireButtonDecrease = document.getElementById("desireButtonDecrease");

const sinPoints = document.getElementById("sinPoints")

const wrathValue = document.getElementById("wrathValue");
const envyValue = document.getElementById("envyValue");
const prideValue = document.getElementById("prideValue");
const gloomValue = document.getElementById("gloomValue");
const gluttonValue = document.getElementById("gluttonValue");
const slothValue = document.getElementById("slothValue");
const desireValue = document.getElementById("desireValue");

//wrath counter

/** 
function createCounter(increaseButton, decreaseButton, val, counterVar) 
{
    increaseButton.addEventListener("click", function() 
    {
    counterVar++;
    val.textContent = counterVar;
    })

    

     decreaseButton.addEventListener("click", function() 
    {
    if(counterVar > 0){
        counterVar--;
        val.textContent = counterVar;
    } // Added if statement so you cant have negative sin points since that doesnt make sense
        
    })
}
*/




wrathButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            wrathVar++;
            document.getElementById("wrathValue").textContent = wrathVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

wrathButtonDecrease.addEventListener("click", function() 
{
    if(wrathVar > 0){
        wrathVar--;
        document.getElementById("wrathValue").textContent = wrathVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})


envyButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            envyVar++;
            document.getElementById("envyValue").textContent = envyVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

envyButtonDecrease.addEventListener("click", function() 
{
    if(envyVar > 0){
        envyVar--;
        document.getElementById("envyValue").textContent = envyVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})


slothButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {

            slothVar++;
            document.getElementById("slothValue").textContent = slothVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

slothButtonDecrease.addEventListener("click", function() 
{
    if(slothVar > 0){
        slothVar--;
        document.getElementById("slothValue").textContent = slothVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})

prideButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            prideVar++;
            document.getElementById("prideValue").textContent = prideVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

prideButtonDecrease.addEventListener("click", function() 
{
    if(prideVar > 0){
        prideVar--;
        document.getElementById("prideValue").textContent = prideVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})

gloomButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            gloomVar++;
            document.getElementById("gloomValue").textContent = gloomVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

gloomButtonDecrease.addEventListener("click", function() 
{
    if(gloomVar > 0){
        gloomVar--;
        document.getElementById("gloomValue").textContent = gloomVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})


gluttonButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            gluttonVar++;
            document.getElementById("gluttonValue").textContent = gluttonVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

gluttonButtonDecrease.addEventListener("click", function() 
{
    if(gluttonVar > 0){
        gluttonVar--;
        document.getElementById("gluttonValue").textContent = gluttonVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})

desireButtonIncrease.addEventListener("click", function() 
{
    if(sinstatCounter > 0) 
        {
            desireVar++;
            document.getElementById("desireValue").textContent = desireVar;
            sinstatCounter--;
            document.getElementById("sinPoints").textContent = sinstatCounter;

        }
})

desireButtonDecrease.addEventListener("click", function() 
{
    if(desireVar > 0){
        desireVar--;
        document.getElementById("desireValue").textContent = desireVar;
        sinstatCounter++;
        document.getElementById("sinPoints").textContent = sinstatCounter;
    }
})




//createCounter(wrathButtonDecrease, wrathButtonDecrease, wrathValue, wrathVar)
console.log("functions loaded");
