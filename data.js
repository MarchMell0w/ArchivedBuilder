// lists of available things from each category to be picked from
export let weaponsList = [
    {
        name: "Advanced Zweihander",
        grade: 5,
        damageType: "Slash",
        damageAmount: 9,
        swingDelay: 0.58,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Butler's Briefcase",
        grade: 4,
        damageType: "Slash",
        damageAmount: 5,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 7,
        rangeWidth: 8,
        rangeHeight: 7
    },
    {
        name: "Blade Lineage Hwando",
        grade: 5,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.57,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Bloodfiend Claws",
        grade: 0,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.44,
        hitStartup: null,
        status: [],
        properties: ["Unblockable", "Auto Execute"],
        rangeLength: 7.5,
        rangeWidth: 6,
        rangeHeight: 7
    },
    {
        name: "Blade Lineage Jikdo",
        grade: 1,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Backstreet Chef's Knife",
        grade: 0,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.46,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 7,
        rangeWidth: 6,
        rangeHeight: 7
    },
    {
        name: "Crystal Atelier",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.59,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak", "Unblockable"],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Dagger",
        grade: 0,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.46,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 7,
        rangeWidth: 6,
        rangeHeight: 7
    },
    {
        name: "Durandal",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.71,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 12.5,
        rangeWidth: 6,
        rangeHeight: 9.5
    },
    {
        name: "Fixer's Shortsword",
        grade: 0,
        damageType: "Slash",
        damageAmount: 5.5,
        swingDelay: 0.37,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Undodgeable"],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 9
    },
    {
        name: "Fixer's Battleaxe",
        grade: 0,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.68,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Fixer's Blade",
        grade: 0,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.48,
        hitStartup: 0.33, // Este foi o que você forneceu
        status: ["Bleed"],
        properties: [],
        rangeLength: 9,
        rangeWidth: 6,
        rangeHeight: 9.5
    },
    {
        name: "Fused Blade of Ruined Mirror Worlds",
        grade: 1,
        damageType: "Slash",
        damageAmount: 10,
        swingDelay: 0.75,
        hitStartup: null,
        status: ["Sinking"],
        properties: ["Undodgeable", "Guardbreak", "Unblockable", "Auto Execute"],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Family Heir's Sabre",
        grade: 4,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.63,
        hitStartup: null,
        status: ["Sinking"],
        properties: ["Undodgeable", "Guardbreak"],
        rangeLength: 11,
        rangeWidth: 4,
        rangeHeight: 10
    },
    {
        name: "Hardblood Blade",
        grade: 0,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.57,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Auto Execute"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Hardblood Greatblade",
        grade: 1,
        damageType: "Slash",
        damageAmount: 9,
        swingDelay: 0.73,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 10.5,
        rangeWidth: 7,
        rangeHeight: 10.5
    },
    {
        name: "Hardblood Claws",
        grade: 0,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.59,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Guardbreak"],
        rangeLength: 7.5,
        rangeWidth: 6,
        rangeHeight: 7
    },
    {
        name: "Hardblood Scissorblades",
        grade: 5,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.54,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Great Hardblood Scissorblades",
        grade: 2,
        damageType: "Slash",
        damageAmount: 9,
        swingDelay: 0.67,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Undodgeable", "Guardbreak"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 13
    },
    {
        name: "Hardblood Polearm",
        grade: 4,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.54,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Undodgeable", "Guardbreak", "Unblockable"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Hardblood Whip",
        grade: 2,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.65,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 14,
        rangeWidth: 6,
        rangeHeight: 14
    },
    {
        name: "Index Greatsword",
        grade: 4,
        damageType: "Slash",
        damageAmount: 9,
        swingDelay: 0.67,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "Index Cleaver",
        grade: 4,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.73,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak", "Unblockable", "Auto Execute"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Kurokumo Katana",
        grade: 6,
        damageType: "Slash",
        damageAmount: 7.5,
        swingDelay: 0.69,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Kurokumo Gilded Katana",
        grade: 6,
        damageType: "Slash",
        damageAmount: 7.5,
        swingDelay: 0.59,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 6,
        rangeHeight: 9.5
    },
    {
        name: "Mimicry Blade",
        grade: 1,
        damageType: "Slash",
        damageAmount: 6.5,
        swingDelay: 0.5,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak", "Unblockable", "Auto Execute"],
        rangeLength: 10.5,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Mook Workshop",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.45,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak", "Auto Execute"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Rabbit Rifle",
        grade: 5,
        damageType: "Slash",
        damageAmount: 5,
        swingDelay: 0.4,
        hitStartup: null,
        status: ["Bleed", "Rupture"],
        properties: [],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 8.5
    },
    {
        name: "Reverberation Scythe",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.63,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "R Corp. Sabre",
        grade: 5,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.62,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10.5,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Sharp Greatsword",
        grade: 0,
        damageType: "Slash",
        damageAmount: 9.4,
        swingDelay: 0.62,
        hitStartup: null,
        status: ["Rupture"],
        properties: [],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Soldato Rifle",
        grade: 6,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Sweeper Hooks",
        grade: 0,
        damageType: "Slash",
        damageAmount: 5.5,
        swingDelay: 0.42,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Guardbreak"],
        rangeLength: 8,
        rangeWidth: 6,
        rangeHeight: 8
    },
    {
        name: "Seven Association Longsword",
        grade: 7,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.69,
        hitStartup: null,
        status: ["Rupture"],
        properties: ["Unblockable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Stigma Workshop Sword",
        grade: 4,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.61,
        hitStartup: null,
        status: ["Burn"],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 6,
        rangeHeight: 9
    },
    {
        name: "Shi Association Katana",
        grade: 4,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.53,
        hitStartup: null,
        status: ["Bleed", "Poise"],
        properties: ["Undodgeable", "Guardbreak", "Auto Execute"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Tanglecleaver",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.57,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Twinhook",
        grade: 7,
        damageType: "Slash",
        damageAmount: 5.5,
        swingDelay: 0.4,
        hitStartup: null,
        status: ["Bleed", "Poise"],
        properties: ["Auto Execute"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 8.5
    },
    {
        name: "TIMETRACK Corp. Collection Pickaxe",
        grade: 5,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.7,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak"],
        rangeLength: 12.5,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Udjat Khopesh",
        grade: 4,
        damageType: "Slash",
        damageAmount: 6.5,
        swingDelay: 0.55,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Udjat Vanguard Khopesh",
        grade: 4,
        damageType: "Slash",
        damageAmount: 5.5,
        swingDelay: 0.45,
        hitStartup: null,
        status: [],
        properties: ["Auto Execute"],
        rangeLength: 11,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "WARP Corp. Machetes",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "WARP Corp. Odachi",
        grade: 3,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.44,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Zweihander",
        grade: 6,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "Index Longsword",
        grade: 1,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Scythe of Mimicry",
        grade: 3,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.59,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak", "Unblockable", "Auto Execute"],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Palermitian Style Blades",
        grade: 1,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.7,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Superthermogenesis Gladius",
        grade: 1,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.6,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 7
    },
    {
        name: "Moonlit Azure Blade",
        grade: 1,
        damageType: "Slash",
        damageAmount: 5,
        swingDelay: 0.48,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Farmwatch Scythe",
        grade: 3,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.69,
        hitStartup: null,
        status: [],
        properties: ["Unparriable"],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "4th Match Blade",
        grade: 3,
        damageType: "Slash",
        damageAmount: 7,
        swingDelay: 0.68,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Ebony Stem Cutlass",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6.5,
        swingDelay: 0.54,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Flaring Brand",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6.5,
        swingDelay: 0.63,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Nine Children of the Dragon Guan Dao",
        grade: 3,
        damageType: "Slash",
        damageAmount: 9,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Red Eyes Blade",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6.5,
        swingDelay: 0.57,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Sanguine Desire Axe",
        grade: 3,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.75,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "Rough Axe",
        grade: 5,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.58,
        hitStartup: null,
        status: [],
        properties: ["Unparriable"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Fascia (Sealed)",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.7,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 12.5,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Crimson Scar Carver",
        grade: 3,
        damageType: "Slash",
        damageAmount: 5.5,
        swingDelay: 0.65,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 8.5
    },
    {
        name: "Thermal Blade Weaponry",
        grade: 3,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.54,
        hitStartup: null,
        status: [],
        properties: ["Unparriable", "Guardbreak"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Iron Brotherhood Saw",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 8.25,
        swingDelay: 0.63,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 7.5,
        rangeWidth: 6,
        rangeHeight: 11
    },
    {
        name: "Fixer's Chainsaw",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 9.9,
        swingDelay: 0.73,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 6,
        rangeHeight: 11
    },
    {
        name: "Fixer's Spear",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 12,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Fixer's Handsaw",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.42,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 9,
        rangeWidth: 6,
        rangeHeight: 9
    },
    {
        name: "Hook Cleaver",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 5,
        swingDelay: 0.62,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 9,
        rangeWidth: 6,
        rangeHeight: 9
    },
    {
        name: "Scrap Spear",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 5,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Whaling Harpoon",
        grade: 8,
        damageType: "Pierce",
        damageAmount: 7,
        swingDelay: 0.55,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Undodgeable", "Guardbreak"],
        rangeLength: 11,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Liu Guan Dao",
        grade: 7,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.59,
        hitStartup: null,
        status: ["Burn"],
        properties: ["Guardbreak"],
        rangeLength: 10.5,
        rangeWidth: 6,
        rangeHeight: 10.5
    },
    {
        name: "Gasharpoon",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.57,
        hitStartup: null,
        status: ["Bleed", "Burn"],
        properties: ["Unparriable", "Guardbreak"],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Pointillist Brush",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 7,
        swingDelay: 0.54,
        hitStartup: null,
        status: ["Bleed", "Burn", "Rupture", "Tremor", "Sinking"],
        properties: [],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Liu Martial Arts",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.51,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 7.5,
        rangeWidth: 4,
        rangeHeight: 8
    },
    {
        name: "Molar Boatwork's Arm Harpoon",
        grade: 4,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.58,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "N Corp. Nail",
        grade: 2,
        damageType: "Pierce",
        damageAmount: 7,
        swingDelay: 0.59,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak"],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "The Silver Bullet",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.58,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Seraphic Lance",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.57,
        hitStartup: null,
        status: [],
        properties: ["Unparriable", "Guardbreak"],
        rangeLength: 10,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Cinq Rapier",
        grade: 4,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.57,
        hitStartup: null,
        status: ["Poise"],
        properties: [],
        rangeLength: 5,
        rangeWidth: 4,
        rangeHeight: 11
    },
    {
        name: "Executioner's Polearm",
        grade: 4,
        damageType: "Pierce",
        damageAmount: 7.5,
        swingDelay: 0.7,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "Explosive Spear",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.49,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Full-Stop Pistol",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 4,
        swingDelay: 0.71,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "WARP Corp. Dagger",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.37,
        hitStartup: null,
        status: [],
        properties: ["Unblockable", "Auto Execute"],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Augury Spear",
        grade: 2,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.58,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak", "Unblockable"],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Eye Gouger",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 5,
        swingDelay: 0.43,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Guardbreak"],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Deathseeker Nail",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 4,
        swingDelay: 0.62,
        hitStartup: null,
        status: ["Bleed"],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Allas Workshop",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 7.5,
        swingDelay: 0.64,
        hitStartup: null,
        status: ["Rupture"],
        properties: ["Guardbreak"],
        rangeLength: 7,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Yesterday's Promise",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.42,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak", "Unblockable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Ranga Workshop",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.51,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 7
    },
    {
        name: "Hardblood Parasol",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 6.5,
        swingDelay: 0.55,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 6,
        rangeHeight: 11
    },
    {
        name: "Hardblood Lance",
        grade: 2,
        damageType: "Pierce",
        damageAmount: 9,
        swingDelay: 0.65,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 4,
        rangeHeight: 14
    },
    {
        name: "Hardblood Greatlance",
        grade: 2,
        damageType: "Pierce",
        damageAmount: 10,
        swingDelay: 0.75,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 4,
        rangeHeight: 14
    },
    {
        name: "Executioner's Claw",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.65,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Auto Execute"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Thundering Pole",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 8,
        swingDelay: 0.62,
        hitStartup: null,
        status: [],
        properties: ["Unblockable", "Guardbreak", "Auto Execute"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Dimension Shredding Spear",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 7,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Auto Execute"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Roseate Desire Scissors",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 8,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Blooming Staff",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.6,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Fell Bullet Rifle",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.52,
        hitStartup: null,
        status: ["Poise"],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Sunshower Umbrella",
        grade: 3,
        damageType: "Pierce",
        damageAmount: 6.5,
        swingDelay: 0.55,
        hitStartup: null,
        status: ["Rupture", "Sinking"],
        properties: [],
        rangeLength: 7,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Solemn Lament Pistols",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.55,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 12.5
    },
    {
        name: "Viriscent Pyrojade Ring",
        grade: 6,
        damageType: "Pierce",
        damageAmount: 5,
        swingDelay: 0.54,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Zweihander",
        grade: 6,
        damageType: "Slash",
        damageAmount: 8,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "Index Proxy's Shackles",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.51,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Greatsword",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 9.4,
        swingDelay: 0.64,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Flaming Bat",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.63,
        hitStartup: null,
        status: ["Burn"],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Steam Gauntlet",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.54,
        hitStartup: null,
        status: ["Burn", "Poise"],
        properties: ["Guardbreak"],
        rangeLength: 7,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Scrap Bat",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.6,
        hitStartup: null,
        status: ["Rupture"],
        properties: [],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Brawler",
        grade: 8,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.53,
        hitStartup: null,
        status: ["Tremor"],
        properties: [],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Brutish Brawler",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.67,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Unblockable", "Auto Execute"],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Beak Bat",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.6,
        hitStartup: null,
        status: [],
        properties: ["Auto Execute"],
        rangeLength: 11,
        rangeWidth: 6,
        rangeHeight: 10
    },
    {
        name: "Rosespanner Hammer",
        grade: 7,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.72,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak", "Auto Execute"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Hardblood Gauntlets",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 5.5,
        swingDelay: 0.55,
        hitStartup: null,
        status: ["Bleed"],
        properties: ["Guardbreak"],
        rangeLength: 7.5,
        rangeWidth: 6,
        rangeHeight: 7
    },
    {
        name: "Hardblood Staff",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.55,
        hitStartup: null,
        status: ["Bleed", "Rupture"],
        properties: [],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 8.5
    },
    {
        name: "Multicrack Charged Blades",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 10,
        swingDelay: 0.79,
        hitStartup: null,
        status: ["Rupture"],
        properties: ["Unblockable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Dieci Association Kata",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.74,
        hitStartup: null,
        status: ["Sinking"],
        properties: ["Auto Execute"],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7
    },
    {
        name: "Chains of Loyalty",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.6,
        hitStartup: null,
        status: [],
        properties: ["Unblockable", "Auto Execute"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Rosespanner Crusher",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 8,
        swingDelay: 0.56,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak", "Auto Execute"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10.5
    },
    {
        name: "N Corp. Inquisitor Hammer",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.75,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "R Corp. Hammer",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 10,
        swingDelay: 0.68,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 15,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Smoke Staff",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 9.5
    },
    {
        name: "Full-Stop Automatic",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 5.5,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "R Corp. Staff",
        grade: 5,
        damageType: "Blunt",
        damageAmount: 8,
        swingDelay: 0.56,
        hitStartup: null,
        status: ["Sinking"],
        properties: ["Unblockable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Dieci Association Key",
        grade: 4,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.62,
        hitStartup: null,
        status: ["Sinking"],
        properties: ["Undodgeable"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "WARP Corp. Gauntlets",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.56,
        hitStartup: null,
        status: ["Rupture"],
        properties: ["Guardbreak", "Auto Execute"],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Knuckles of Discipline",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.69,
        hitStartup: null,
        status: ["Bleed", "Rupture", "Tremor"],
        properties: [],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Dragon's Bite",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Zelkova Workshop",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 8,
        swingDelay: 0.54,
        hitStartup: null,
        status: ["Bleed", "Tremor"],
        properties: ["Guardbreak"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Old Boys Workshop",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.56,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak", "Auto Execute"],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Wheel's Industry (Sword)",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 10,
        swingDelay: 0.7,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Wheel's Industry (Fist)",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.7,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "L'Heure du Loup",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.56,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "The Crying Children",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.49,
        hitStartup: null,
        status: ["Burn"],
        properties: ["Guardbreak"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Leaflet Workshop Steamgun",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 7.5,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 11.5
    },
    {
        name: "Stigma Workshop Gauntlets",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.58,
        hitStartup: null,
        status: ["Burn"],
        properties: [],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Zwei Association Greatsword",
        grade: 4,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.6,
        hitStartup: null,
        status: ["Tremor"],
        properties: ["Guardbreak"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "N Corp. Mittelhammer Hammer",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.73,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Worn Sledgehammer",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 8.5,
        swingDelay: 0.6,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Hell and Heaven",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 5.5,
        swingDelay: 0.49,
        hitStartup: null,
        status: [],
        properties: ["Unblockable"],
        rangeLength: 7,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Piston Gauntlets",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.47,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Blue Star Orb",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 5,
        swingDelay: 0.57,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Smile Hammer",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 8,
        swingDelay: 0.62,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Auto Execute"],
        rangeLength: 9.5,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Smiling Mass",
        grade: 4,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.75,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Guardbreak", "Unblockable", "Auto Execute"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Blind Obsession Anchor",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.79,
        hitStartup: null,
        status: ["Poise"],
        properties: ["Guardbreak"],
        rangeLength: 12,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Regret Hammer",
        grade: 3,
        damageType: "Blunt",
        damageAmount: 7.5,
        swingDelay: 0.67,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak"],
        rangeLength: 11,
        rangeWidth: 8,
        rangeHeight: 12
    },
    {
        name: "Furnace Workshop Hammer",
        grade: 4,
        damageType: "Blunt",
        damageAmount: 9,
        swingDelay: 0.78,
        hitStartup: null,
        status: [],
        properties: ["Guardbreak", "Auto Execute"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Magic Bullet Rifle",
        grade: 6,
        damageType: "Blunt",
        damageAmount: 6.5,
        swingDelay: 0.59,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Fluid Sac Hammer",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 8.5,
        swingDelay: 0.75,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 13,
        rangeWidth: 8,
        rangeHeight: 11
    },
    {
        name: "Oni Tekko",
        grade: 1,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.54,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 7.5,
        rangeWidth: 8,
        rangeHeight: 7.5
    },
    {
        name: "Lamp",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 7,
        swingDelay: 0.67,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 9
    },
    {
        name: "Executioner's Claw",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 6,
        swingDelay: 0.65,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable", "Auto Execute"],
        rangeLength: 8.5,
        rangeWidth: 8,
        rangeHeight: 8
    },
    {
        name: "Ebony & Ivory",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 4,
        swingDelay: 0.60,
        hitStartup: null,
        status: [],
        properties: ["Auto Execute"],
        rangeLength: 4,
        rangeWidth: 4,
        rangeHeight: 11
    },
    {
        name: "Golden Ecstasy",
        grade: 0,
        damageType: "Blunt",
        damageAmount: 6,
        swingDelay: 0.50,
        hitStartup: null,
        status: [],
        properties: ["Unparriable", "Guardbreak"],
        rangeLength: 4,
        rangeWidth: 4,
        rangeHeight: 13
    },
    {
        name: "Libe & Hessen",
        grade: 0,
        damageType: "Pierce",
        damageAmount: 5,
        swingDelay: 0.55,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8.5,
        rangeWidth: 6,
        rangeHeight: 11
    },
    {
        name: "Leviathan Blade",
        grade: 3,
        damageType: "Slash",
        damageAmount: 8.5,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 9,
        rangeWidth: 8,
        rangeHeight: 10
    },
    {
        name: "Five-Seven & Deagle",
        grade: 1,
        damageType: "Pierce",
        damageAmount: 7,
        swingDelay: 0.58,
        hitStartup: null,
        status: [],
        properties: [],
        rangeLength: 8,
        rangeWidth: 8,
        rangeHeight: 12.5
    },
    {
        name: "Dawnbreaker",
        grade: 2,
        damageType: "Slash",
        damageAmount: 6,
        swingDelay: 0.52,
        hitStartup: null,
        status: [],
        properties: ["Undodgeable"],
        rangeLength: 10,
        rangeWidth: 8,
        rangeHeight: 9
    }
];

export let outfitsList = [
{
    name: "A Corp. Citizen",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 15,
    keypage: "Singularity: Decrease incoming status effects by half"
  },
  {
    name: "Ambitious Fixer",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 1.0,
    speed: 18,
    keypage: "Slashing Prowess: 25% Chance to boost Slash Damage by 10%. Errand Gone Wrong: When entering combat, apply 3 Haste to self."
  },
  {
    name: "Backstreets Berserker",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 1.2,
    speed: 17,
    keypage: "N/A"
  },
  {
    name: "Backstreets Headhunter",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.3,
    speed: 16,
    keypage: "Skull Crushing: Increase Blunt damage by 10%"
  },
  {
    name: "Backstreets Investigator",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 0.8,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Backstreets Rat",
    bluntRes: 1.3,
    pierceRes: 1.2,
    slashRes: 0.7,
    speed: 16,
    keypage: "A Rat's Guide To Survival: Gain increased Dodge frames."
  },
  {
    name: "Backstreets Mole",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "Skewing: Increase Pierce damage by 10%"
  },
  {
    name: "Backstreets Scum",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 14,
    keypage: "Cowardice: Gain increased Speed when reaching low Health threshold."
  },
  {
    name: "Backstreets Survivor",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 1.2,
    speed: 17,
    keypage: "Experience: N/A"
  },
  {
    name: "Bartender",
    bluntRes: 1.2,
    pierceRes: 1.2,
    slashRes: 0.7,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Beak",
    bluntRes: 0.8,
    pierceRes: 1.2,
    slashRes: 1.0,
    speed: 17,
    keypage: "N/A"
  },
  {
    name: "Black Silence",
    bluntRes: 0.8,
    pierceRes: 1.1,
    slashRes: 1.0,
    speed: 17,
    keypage: "A Fighter that Never Retreats: On Emotion Level increase, gain 2 Protection for 20 seconds and 1 Value Power Up for 2 minutes. Clenched Grudge: Gain more stamina when hitting someone."
  },
  {
    name: "Blade Lineage",
    bluntRes: 1.0,
    pierceRes: 1.3,
    slashRes: 0.7,
    speed: 16,
    keypage: "Clash of Blades: Gain 2 Poise... Minimum Offense: If User has 10+ Poise, M1s do 50% damage through block. Yield My Flesh - To Claim Their Bones: Gain Unique Page 'Yield My Flesh'"
  },
  {
    name: "Blade Lineage Mentor",
    bluntRes: 1.3,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 16,
    keypage: "Unrelenting: If User has 5+ Poise Potency, when taking fatal damage, nullify for one hit. In Memoriam: Gain +4 Dice Power on To Claim Their Bones. Swordplay of Homeland: Gain Rending. Yield My Flesh - To Claim Their Bones."
  },
  {
    name: "Blade Lineage Salsu",
    bluntRes: 1.3,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 16,
    keypage: "Poised: [On Crit Hit] If user's Poise > 10, consume half to deal damage. Sanguine Plum Blossoms: Apply 1 Red Plum Blossom on Crit. Yield My Flesh - To Claim Their Bones."
  },
  {
    name: "Brawler",
    bluntRes: 0.6,
    pierceRes: 1.0,
    slashRes: 1.2,
    speed: 13,
    keypage: "Cold-Hard Fists: If user has a \"Fist\" Weapon equipped, Increase M1 Damage by 10%."
  },
  {
    name: "Brute Fixer",
    bluntRes: 0.7,
    pierceRes: 1.3,
    slashRes: 0.7,
    speed: 14,
    keypage: "Health Hauler: If you take more than 20 damage in a single hit, reduce the damage by 4 and gain 5 Regen up"
  },
  {
    name: "Butcher's Attire",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 0.7,
    speed: 14,
    keypage: "Emergency Rations: Increased natural regeneration rates by 20%. Talented Chef: N/A"
  },
  {
    name: "Butler Fixer",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.3,
    speed: 16,
    keypage: "Butler Style Response: [Clash Win] inflict 3 Sinking on the target"
  },
  {
    name: "Brutish Stray Dog",
    bluntRes: 0.6,
    pierceRes: 0.8,
    slashRes: 1.3,
    speed: 13,
    keypage: "Restfulness: [On Page Use] Reduce Page Light Cost by 1. Enhancement Tattoos: Gain 1 Enhancement Tattoos on charged attacks/parrying."
  },
  {
    name: "Calm Stray Dog",
    bluntRes: 0.7,
    pierceRes: 0.7,
    slashRes: 1.3,
    speed: 15,
    keypage: "Deep Breaths: 25% chance to reduce page Light cost by 2. Enhancement Tattoos: Gain 1 Enhancement Tattoos on charged attacks/parrying."
  },
  {
    name: "Cunning Stray Dog",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.2,
    speed: 18,
    keypage: "Double Kick: [Clash Win] deal 5 damage and inflict 2 Fragile. Enhancement Tattoos: Gain 1 Enhancement Tattoos on charged attacks/parrying."
  },
  {
    name: "Casual Fixer",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.3,
    speed: 16,
    keypage: "Moving Up The Ranks: Gain 25% more EXP"
  },
  {
    name: "Casual Jacket",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Cinq Association",
    bluntRes: 1.2,
    pierceRes: 0.7,
    slashRes: 1.3,
    speed: 18,
    keypage: "Have At Thee!: Gain 7% more Crit Chance for every 2 Haste (max 25%). One Step Ahead: Gain 2 Haste on Flourishes and 3 Haste on a Focused Strike."
  },
  {
    name: "Cinq Association Specialist",
    bluntRes: 1.2,
    pierceRes: 0.7,
    slashRes: 1.3,
    speed: 18,
    keypage: "Have At Thee!: Gain 7% more Crit Chance for every 2 Haste. Mentors Counsel: [On Clash Start] Gain 1 Clash Power if your faster than the opponent."
  },
  {
    name: "Claw Executioner",
    bluntRes: 1.0,
    pierceRes: 0.9,
    slashRes: 1.2,
    speed: 16,
    keypage: "Tri Serum Brew: Apply or receive debuffs and buffs depending on the Serum you have installed. Serum Injection: Gain a unique page called 'Serum Injection'"
  },
  {
    name: "Clean Suit",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 0.8,
    speed: 16,
    keypage: "Slugger: [When Hit] hitting the enemy back from the same [Hyperarmor] move makes that move deal 20% more damage."
  },
  {
    name: "Corporative",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.2,
    speed: 16,
    keypage: "Standard Procedure: During EGO, Stamina Damage is Halved."
  },
  {
    name: "Dawn Office Fixer",
    bluntRes: 1.0,
    pierceRes: 0.6,
    slashRes: 1.2,
    speed: 16,
    keypage: "Passion: When proccing [Stagger] on a target, inflict 5 Burn afterwards the Count is halved."
  },
  {
    name: "Devyat Association",
    bluntRes: 1.3,
    pierceRes: 0.7,
    slashRes: 1.1,
    speed: 19,
    keypage: "Emergency Rations: Increased natural regeneration rates by 20%. Dimensional Storage: Lose less items on Death. Hoarder: Increased Inventory Carry Capacity by 100"
  },
  {
    name: "Dieci Association Key Branch",
    bluntRes: 1.3,
    pierceRes: 0.8,
    slashRes: 0.8,
    speed: 17,
    keypage: "Enlightenment: Charged Attacks Inflict 3 Sinking and Gain 6 Shield HP. Sinking Knowledge: [When Hit] inflict 2 Sinking"
  },
{
    name: "Dieci Association Fist Branch",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 0.9,
    speed: 18,
    keypage: "Sinking Knowledge: [When Hit] whilst having Shield HP inflict 2 Sinking on the attacker. Enlightenment: Flourishes now apply 2 Sinking and Give 4 Shield HP. At 20+ Shield HP, deal +15% more Blunt damage"
  },
  {
    name: "Death Sentence Pit Fighter",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 16,
    keypage: "Glory Scars: Increased Damage to Death Sentence NPCs"
  },
  {
    name: "Eerie Bloodfiend",
    bluntRes: 0.8,
    pierceRes: 1.4,
    slashRes: 1.1,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Family Heir",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 16,
    keypage: "Suffering: Deal (Enemy Sinking * 1)% more damage (Max. 20%)"
  },
  {
    name: "Full-Stop Organizer",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 0.8,
    speed: 16,
    keypage: "Target Spotted: [On Final Hit of Critical from Full-Stop Pistol] If the user spent 3+ Bullets, inflict 5 Fragile on target. If target has 20+ Fragile, gain 10 Poise instead. Basics of C Q C [On Charged Attack/Final M1] If user has 3+ Bullets gain 5 Poise, otherwise gain 1 Bullets back instead. (10S CD)"
  },
  {
    name: "Full-Stop Fixer",
    bluntRes: 1.2,
    pierceRes: 0.9,
    slashRes: 1.1,
    speed: 17,
    keypage: "Surplus Ammo: [On Reload] with Full-Stop Automatic, Half of your ammo is converted into Atelier Logic Bullets. AL-HV Round: [On Crit Hit] with Full-Stop Rifle if Poise Procs, gain 1 Atelier Logic Ammo"
  },
  {
    name: "Gouger's Outfit",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 1.0,
    speed: 18,
    keypage: "Essence Of Disarming: Final Slash on Eye Gouger Critical Sets the weapon of the person hit to Brawler for a bit of time"
  },
  {
    name: "Hana Association",
    bluntRes: 1.0,
    pierceRes: 0.9,
    slashRes: 1.0,
    speed: 17,
    keypage: "Brace Up: Take less damage during [Hyperarmor]. For every hit taken above 10 damage during [Hyperarmor], Gain 1 Value Power Up for 10s. Four Trigrams: If the User of this Outfit is in an Office aligned with the Hana Association Gain a Unique Page called 'Rotate Trigram', a 0 Light cost Page with the ability to switch the effect of True-Trigram Formation in accordance to the Trigrams; Geon Gon Gam Ri. [On Use] with any Hana Association Pages Gain 1 Trigram"
  },
  {
    name: "Index Proselyte",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.2,
    speed: 17,
    keypage: "Will Of The Prescript: On [Singleton], all pages gain +1 Value Power Up. Grace Of The Prescript: [On Unlock Hit] Gain 1 Grace Of The Prescript. If user already has Grace Of The Prescript, rotate it's type. Unlock: If the User of this Outfit is in an Office aligned with The Index Syndicate Gain a Unique Page called 'Unlock', a 0 Light cost Page that switches between 3 Forms, Gaining Unlock Blade, where upon reaching 3 Counts of Unlock Blade, convert them to Unlocked Blade, a status which enhances certain Pages/Crits from The Index Syndicate"
  },
  {
    name: "Journalist",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 0.8,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "K Corp. Assistant",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 1.2,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Kurokumo Henchman",
    bluntRes: 0.8,
    pierceRes: 0.8,
    slashRes: 1.3,
    speed: 17,
    keypage: "Dark Cloud Blade: On [Clash Win] Inflict 3 Bleed Count. Keen Strike: [On Charged Attack/Final M1] Apply 1 Bleed. If user has 6+ Dark Cloud apply 3 Bleed instead. Gathering Dark Clouds: [Requires Kurokumo Clan Allegiance] On Kurokumo Katana/Kurokumo Gilded Katana critical, gain 2 Dark Cloud on final hit."
  },
  {
    name: "Kurokumo Wakashu",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.2,
    speed: 16,
    keypage: "Kokuundō: Deal bonus damage equal to (Enemy Bleed)% (Max. 20%). Gathering Dark Clouds: [Requires Kurokumo Clan Allegiance] On Kurokumo Katana/Kurokumo Gilded Katana critical, gain 2 Dark Cloud on final hit."
  },
  {
    name: "Leaflet Workshop",
    bluntRes: 1.0,
    pierceRes: 0.9,
    slashRes: 1.0,
    speed: 15,
    keypage: "Puffy Brume: Smoke stacks on self now increase outgoing M1 Damage instead of incoming."
  },
  {
    name: "Leaflet Workshop Rep",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 15,
    keypage: "Puffy Brume: Smoke stacks on self now increase outgoing M1 Damage instead of incoming. Immediate Repairs: Unstagger once every 2 minutes."
  },
  {
    name: "Liu Association",
    bluntRes: 0.6,
    pierceRes: 1.4,
    slashRes: 1.0,
    speed: 15,
    keypage: "Fervor: Gain 2 Value Power Up while in Emotion Level II. Hugging Fire, Sitting on Brushwood: [On Hit] that apply Burn to the target, inflict 5 stamina damage. Ignite Weaponry: If the user of this outfit is in an office aligned with the Liu Association gain a unique page called 'Ignite Weaponry', a 1 Light cost page that sets ablaze the User's weapon, causing their M1 attacks to inflict 1 Burn and Liu Association Pages apply 1 more Burn on dices that inflicts Burn"
  },
  {
    name: "Liu Association Operative",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 0.8,
    speed: 15,
    keypage: "Hugging Fire, Sitting on Brushwood: [On Hit] that apply Burn to the target, inflict 5 stamina damage. Firm As A Great Mountain Whenever your Emotion level rises, gain 7.5% Health. Ignite Weaponry: If the user of this outfit is in an office aligned with the Liu Association gain a unique page called 'Ignite Weaponry', a 1 Light cost page that sets ablaze the User's weapon, causing their M1 attacks to inflict 1 Burn and Liu Association Pages apply 1 more Burn on dices that inflicts Burn"
  },
  {
    name: "Liu Association Specialist",
    bluntRes: 0.8,
    pierceRes: 1.2,
    slashRes: 0.8,
    speed: 15,
    keypage: "Fervor: Gain 2 Value Power Up while in Emotion Level II. Firm As A Great Mountain Whenever your Emotion level rises, gain 7.5% Health. Ignite Weaponry: If the user of this outfit is in an office aligned with the Liu Association gain a unique page called 'Ignite Weaponry', a 1 Light cost page that sets ablaze the User's weapon, inflicting themselves with 5 Burn and causing their M1 attacks to inflict 1 Burn"
  },
  {
    name: "Lone Fixer",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.1,
    speed: 16,
    keypage: "Lone Fixer: If you have no allies (Not being in an Office), gain 1 Value Power Up"
  },
  {
    name: "Middle Little Sibling",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 17,
    keypage: "Little Vengeance: If target has Paralyze stacks, increase Blunt damage by 10%. Enhancement Tattoos: Charged attacks, parrying flourishes and parrying [Guard Break] Gain 1 Enhancement Tattoos."
  },
  {
    name: "Middle Big Sibling",
    bluntRes: 1.5,
    pierceRes: 0.7,
    slashRes: 0.7,
    speed: 18,
    keypage: "Domineer: Anyone who deals less than 5 damage when hitting you gets their sp reduced by 2. Enhancement Tattoos: Charged attacks, parrying flourishes and parrying [Guard Break] Gain 1 Enhancement Tattoos."
  },
  {
    name: "Multicrack Office Rep",
    bluntRes: 1.3,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "N Corp. Inquisitor",
    bluntRes: 1.2,
    pierceRes: 0.6,
    slashRes: 1.0,
    speed: 16,
    keypage: "Thou Shalt Hammer: When someone with the Whistles Keypage triggers a [Guard Break], gain 1 Fanatic."
  },
  {
    name: "N Corp. The One Who Grips",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 14,
    keypage: "Bliss of Execution: Killing an enemy now grants 2 Haste and 5 Value Power Up for 10 seconds. Whistles: On [Guard Break] vs. Target, Inflict 2 Nails and grant 1 Fanatic to any nearby ally that has N Corp. Inquisitor outfit on."
  },
  {
    name: "N Corp. Staff",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Nest Citizen",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.3,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Nest Lurker",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 1.0,
    speed: 16,
    keypage: "N/A"
  },
  {
    name: "Nest Researcher",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 16,
    keypage: "Experimental Rat: K Corp. Ampules have less negative drawbacks on you."
  },
  {
    name: "Streetlight Office Operative",
    bluntRes: 0.9,
    pierceRes: 0.9,
    slashRes: 0.9,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Night Awl Associate",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 16,
    keypage: "Stiletto: [On Hit] if damage type is Pierce, boost damage by 15% otherwise reduce the damage deal by 15%"
  },
  {
    name: "Old Boatman",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Old Reaper",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Old Whaler",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 15,
    keypage: "N/A"
  },
  {
    name: "Outskirts Wanderer",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 1.0,
    speed: 16,
    keypage: "Overcome Horrors: Deal 20% more damage against players with E.G.O activated."
  },
  {
    name: "Outskirts Runner Jumpsuit",
    bluntRes: 0.8,
    pierceRes: 1.2,
    slashRes: 1.3,
    speed: 18,
    keypage: "Hoarder: Increases Inventory Carry Capacity by 100"
  },
  {
    name: "Parade Bloodfiend",
    bluntRes: 1.2,
    pierceRes: 1.2,
    slashRes: 1.0,
    speed: 18,
    keypage: "N/A"
  },
  {
    name: "Whaling Crew Captain",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 15,
    keypage: "Overheated Harpoon: [On Hit] Coin3 of Gasharpoon Critical Attack, Gain 1 Overheated Gasharpoon. Overheated Gasharpoon gives Gasharpoon Critical Attack +4 Value Power Up"
  },
  {
    name: "Whaling Crew Harpooner",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.2,
    speed: 15,
    keypage: "Sharpened Harpoon: On [Critical Strike], apply 4 Bleed. (10 second cooldown)"
  },
  {
    name: "Pointillist’s Uniform",
    bluntRes: 1.0,
    pierceRes: 0.7,
    slashRes: 1.0,
    speed: 15,
    keypage: "Sanguine Pointilist [At Max Sanity] Increase the amount of all \"Negative Status Effect application\" by 1.25x. (This effect does not stack with Inner Ardor or Wasted Hours, Lying Down from Skill Tree) Assignment Evaluation [On Hit] By light attack Heal 1 Sanity per different status effect on target"
  },
  {
    name: "R Corp. Rabbit",
    bluntRes: 1.3,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 18,
    keypage: "Rabbit Augmentation: \"If taken more than 15 Damage, gain 5 Haste.\" RRR Suit: Increase Charge cap to 50 Maximum Charge"
  },
  {
    name: "R Corp. Rhino",
    bluntRes: 0.5,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 13,
    keypage: "Rhino Procedure: \"If taken more than 15 Damage, gain 5 Protection.\" RRR Suit: Increase Charge cap to 50 Maximum Charge"
  },
  {
    name: "Red Mist",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 15,
    keypage: "The Strongest: [On Use] Set Dice Value to maximum. (1 minute cooldown). Retaliate: When taking more than 20 damage in a singular attack, negate half of the incoming damage. (2 minute cooldown)."
  },
  {
    name: "Reverberation Ensemble",
    bluntRes: 0.8,
    pierceRes: 1.3,
    slashRes: 0.8,
    speed: 17,
    keypage: "Nuovo Fabric: Reduces all incoming damage by 1. Only Procs [When Hit] By Pages"
  },
  {
    name: "Rosespanner Workshop Fixer",
    bluntRes: 1.0,
    pierceRes: 1.3,
    slashRes: 0.8,
    speed: 16,
    keypage: "Chronic Fatigue: [On Clash] If the enemy has 5 Tremor Count they are afflicted with -2 clash power."
  },
  {
    name: "Seven Association",
    bluntRes: 1.2,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 17,
    keypage: "Investigation: If the user of this outfit is in an office aligned with the Seven Association gain a unique page called 'Investigation' which allows the user to see the Health bar of the target. Thorough Search: When killing someone after using Investigation, a page that's exclusive to Seven Association, gain a chance of stealing 10% of their Total Ahn. Cut. In. Half.: [On Final M1] Deal True Damage Equal to Rupture on Target."
  },
  {
    name: "Seven Association Operative",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.0,
    speed: 16,
    keypage: "Investigation: If the user of this outfit is in an office aligned with the Seven Association gain a unique page called 'Investigation' which allows the user to see the Health bar of the target. Thorough Search: When killing someone after using Investigation, a page that's exclusive to Seven Association, gain a chance of stealing 10% of their Total Ahn. Exploiting the Gap: [Clash Win] Deal Damage = 1/3 Target's of Rupture count on target and reduce targets Rupture Count by 1/2."
  },
  {
    name: "Seven Association Specialist",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 1.3,
    speed: 17,
    keypage: "Investigation: If the user of this outfit is in an office aligned with the Seven Association gain a unique page called 'Investigation' which allows the user to see the Health bar of the target. Grasping Vulnerabilities: If Target's Damage Type weakness to incoming damage type is higher than 1.15, increase it by 15%. Opportunistic: [On Clash Win] Apply 2 Rupture and 3 Fragile"
  },
  {
    name: "Shi Association",
    bluntRes: 1.0,
    pierceRes: 1.3,
    slashRes: 0.7,
    speed: 17,
    keypage: "Extreme Fatigue: Gain 60 Health but be unable to heal past the increase Walking the Line Of Death: When below 25% Health, increase Poise proc chance by 25% Kizuna: Gain 1 Value Power Up on Ally Death. (Max 2) Boundary of Death: If the user of this outfit is in an office aligned with the Shi Association gain a unique page called 'Boundary of Death', a high risk high reward 3 Light cost True Damage page"
  },
  {
    name: "Shi Association Operative",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.3,
    speed: 17,
    keypage: "Extreme Fatigue: Gain 60 Health but be unable to heal past the increase Divide in Two: Having Haste increases M1 Damage by 10% Singular Strike [On Hit] with Boundary of Death: If the page rolled a natural 4, sacrifice 44 HP per enemy hit to increase damage by 50%. Boundary of Death: If the user of this outfit is in an office aligned with the Shi Association gain a unique page called 'Boundary of Death', a high risk high reward 3 Light cost True Damage page"
  },
  {
    name: "Shi Association Specialist",
    bluntRes: 1.2,
    pierceRes: 0.7,
    slashRes: 1.2,
    speed: 17,
    keypage: "Extreme Fatigue:Gain 60 Health but be unable to heal past the increase Self Neglect: Deal 20% more damage when below 30% HP. Boundary of Death: If the user of this outfit is in an office aligned with the Shi Association gain a unique page called 'Boundary of Death', a high risk high reward 3 Light cost True Damage page"
  },
  {
    name: "Smiling Face Rags",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 13,
    keypage: "Puffy Brume: Smoke stacks on self now increase outgoing M1 Damage instead of incoming."
  },
  {
    name: "Sweeping Fixer",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "Corpse Cleanup: Gain 50 Regen Up upon gripping an enemy. (Note: This does not work for Auto Grips)."
  },
  {
    name: "Sneaking Suit",
    bluntRes: 1.2,
    pierceRes: 1.2,
    slashRes: 1.2,
    speed: 19,
    keypage: "Cold Hard Fists: When using a Fist Style, boost light attack damage by 10%."
  },
  {
    name: "Thumb Soldato",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 16,
    keypage: "Rifle Training: With Soldato Rifle equipped, Your alt-fire deals 15% more damage. Ammunition Tribute: [On Reload] Nearby allies wearing either the Thumb East Capo outfit or Thumb Soldato will now recieve ammo euqivalent to half of how many bullets you gained. (20 CDs per ally). Ammo Supply: [On Final M1] Gain a random bullet type equivalent to 20% of your weapon's ammo cap (Min. 1) Reload: If the user of this outfit is in an office aligned with The Thumb Syndicate gain a unique page called 'Reload'."
  },
  {
    name: "Twinhook Pirate",
    bluntRes: 1.0,
    pierceRes: 1.2,
    slashRes: 0.8,
    speed: 16,
    keypage: "Easy Breathing: [Clash Win] Gain 5 Poise"
  },
  {
    name: "Ting Tang Gang",
    bluntRes: 1.4,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 16,
    keypage: "Gambit: Chance to gain 4 Value Power Up when using dice (1/10)"
  },
  {
    name: "Udjat",
    bluntRes: 0.6,
    pierceRes: 1.2,
    slashRes: 1.1,
    speed: 17,
    keypage: "The Udjat: When entering combat, gain 10 Protection (60s CD)"
  },
  {
    name: "Thumb Capo's Suit",
    bluntRes: 1.2,
    pierceRes: 0.9,
    slashRes: 0.8,
    speed: 15,
    keypage: "Thumb Officer: [With Thumb Weapon Equipped] When applying Tremor, apply 1/2 of its Count as Burn, and when applying Burn, apply 1/2 of its count as Tremor. This effect will inflict a minimum of 1 Tremor or Burn, rounded up. Reload: If the user of this outfit is in an office aligned with The Thumb Syndicate gain a unique page called 'Reload."
  },
  {
    name: "WARP Corp. Cleaner",
    bluntRes: 1.0,
    pierceRes: 0.7,
    slashRes: 1.0,
    speed: 16,
    keypage: "Charge Suit: Increase Charge cap to 50 Maximum Charge"
  },
  {
    name: "Zwei Association",
    bluntRes: 1.2,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 16,
    keypage: "Your Shield: Successful Blocks will now consume only half of the stamina and Gain Tremor. If the user of this outfit is in an office aligned with Zwei Association Gain Shield HP upon Block Hit. Stride: [Clash Win] Gain 10 Health Guardian: On [Guard Break] If you have 10 Defense Up, Consume all stacks to block the Guardbreak and gain Shield HP equivalent to count."
  },
  {
    name: "Zwei Association Operative",
    bluntRes: 0.9,
    pierceRes: 0.9,
    slashRes: 0.9,
    speed: 15,
    keypage: "Your Shield: Successful Blocks will now consume only half of the stamina and Gain Tremor. If the user of this outfit is in an office aligned with Zwei Association Gain Shield HP upon Block Hit. Guardian: On [Guard Break] If you have 10 Defense Up, Consume all stacks to block the Guardbreak and gain Shield HP equivalent to count."
  },
  {
    name: "Zwei Association Specialist",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.3,
    speed: 17,
    keypage: "Undercover: You are now unable to be Investigated by Seven Association members. Your Shield: Successful Blocks will now consume only half of the stamina and Gain Tremor. If the user of this outfit is in an office aligned with Zwei Association Gain Shield HP equivealent to the damage taken. Light Armour: No longer takes tremor from \"Your Shield\", but heal a flat 5 Shield HP instead. Protection Request: at 50% HP, Gain 6 Defense Up. At 25% HP, Gain 12 Protection."
  },
  {
    name: "Oni's Rag",
    bluntRes: 1.2,
    pierceRes: 1.3,
    slashRes: 1.2,
    speed: 17,
    keypage: "Extreme Fatigue Increase Max Health by 60, but unable to heal past the increase. Raging Demon When using Oni Tekko, All M1s are now [True Damage]. Your Charged attack now uppercuts [20 CD], You also take 2x Stamina Damage"
  },
{
    name: "4th Match Flame",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 0.8,
    speed: 17,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. The Fourth Match: Every 4th page used by this unit causes 10 Burn to be inflicted in a ??-stud radius around the user."
  },
  {
    name: "Apostle",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. I Will Follow Thee: [On Hit], if the Damage Type is not the same as Equipped Weapons Damage Type, reduce it by 15%. Otherwise, increase it by 15% Example: with a Blunt Weapon, your resistance will go from (1 Blunt 1 Pierce 1 Slash) to (1.4 Blunt 0.6 Pierce 0.6 Slash)"
  },
  {
    name: "Blind Obsession",
    bluntRes: 0.7,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 18,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Dream Devouring: On [Critical Strike] Gain 2 Poise"
  },
  {
    name: "Dimension Shredder",
    bluntRes: 0.9,
    pierceRes: 0.8,
    slashRes: 1.1,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Charge Suit: Increase Charge cap to 50 Maximum Charge"
  },
  {
    name: "Ebony Stem",
    bluntRes: 1.0,
    pierceRes: 0.6,
    slashRes: 1.0,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Ebony Stem: Increase Rupture damage by 10%"
  },
  {
    name: "Fluid Sac",
    bluntRes: 0.9,
    pierceRes: 0.9,
    slashRes: 0.9,
    speed: 17,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Liquid Veil: On [Combat Start] Gain 2 Protection, Protection cannot drop below 1"
  },
  {
    name: "Farmwatch",
    bluntRes: 0.6,
    pierceRes: 1.3,
    slashRes: 1.0,
    speed: 18,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested."
  },
  {
    name: "Hex Nail",
    bluntRes: 0.8,
    pierceRes: 1.2,
    slashRes: 0.8,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. [On Hit] If the target has Bleed, apply 2 Nails (28s CD)"
  },
  {
    name: "Magic Bullet",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 0.7,
    speed: 17,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested."
  },
  {
    name: "Mimicry",
    bluntRes: 0.9,
    pierceRes: 0.9,
    slashRes: 0.9,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Regenerative Shell: [When taking Damage] Gain Regen Up equal to half of the damage taken."
  },
  {
    name: "Nihil",
    bluntRes: 0.8,
    pierceRes: 0.7,
    slashRes: 0.8,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested."
  },
  {
    name: "Nine Children of the Dragon",
    bluntRes: 1.0,
    pierceRes: 0.7,
    slashRes: 0.7,
    speed: 15,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Bā Xià: Take no damage from Burn Hugging Fire: [On Burn Apply] Deal stamina damage."
  },
  {
    name: "Red Eyes",
    bluntRes: 0.6,
    pierceRes: 1.2,
    slashRes: 1.2,
    speed: 17,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Alertness: [On Page Use] Give every nearby ally 2 Protection. (40 Second CD) The Hunt Begins: [On Ally Death] Gain 4 Value Power Up and Protection for 20 Seconds."
  },
  {
    name: "Regret",
    bluntRes: 0.6,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 13,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Violence: [On Blunt Dice Hit] Apply 1 Bind and 1 Paralyze. Note: This keypage does not have the 30s CD listed ingame. Does not work with Weapon Criticals."
  },
  {
    name: "Solemn Lament",
    bluntRes: 0.8,
    pierceRes: 0.7,
    slashRes: 1.3,
    speed: 18,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Lament: [On Page Use] If more than 2 unique negative status effects are applied to character, Gain 3 Value Power Up"
  },
  {
    name: "Spicebush",
    bluntRes: 0.7,
    pierceRes: 1.3,
    slashRes: 0.9,
    speed: 15,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested."
  },
  {
    name: "Smile",
    bluntRes: 1.4,
    pierceRes: 0.8,
    slashRes: 0.7,
    speed: 19,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. In Search Of Corpses: [On Hit] Deal 200% more Damage to Allies. Terrifying Laughter: [On Ally Death] Gain 5 Value Power Up"
  },
  {
    name: "Telepole",
    bluntRes: 1.0,
    pierceRes: 0.8,
    slashRes: 0.8,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Haphazard Discharge: During [Absolute Envy Resonance] Damage now chains lighting to nearby targets."
  },
  {
    name: "Waxen Pinion",
    bluntRes: 0.6,
    pierceRes: 1.4,
    slashRes: 0.8,
    speed: 15,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Passion: When proccing [Stagger] on a target, inflict 5 Burn Tempered Mind: Sanity no longer affects dice rolls."
  },
  {
    name: "Sanguine Desire",
    bluntRes: 1.0,
    pierceRes: 0.6,
    slashRes: 0.7,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Massive Wound: On [Guard Break] Apply 10 Bleed to Target"
  },
  {
    name: "Fell Bullet",
    bluntRes: 0.8,
    pierceRes: 1.0,
    slashRes: 1.2,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Crushed Pendant: [On Sin Resonance Increase] Gain 3 Poise Fell Bullet: [On Hit] Deal 200% more Damage to Allies."
  },
  {
    name: "The Wild Hunt",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Call Of The Erlking: [On Use] Pages from Fragment of Ruined Mirror Worlds and The Wild Hunt E.G.O pages gain 1 Coffin O Dullahan...: Gain a unique page called 'O Dullahan...!' which call upon The Dullahan."
  },
  {
    name: "Blue Star Worshipper",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "Unstable Outfit: Reduce passive Health regeneration by 75% when your E.G.O. is not manifested. Martyr: [On Sin Resonance Increase] Gain 1.5 Weakness to a random Damage Type and 0.65 Resistance to other Damage Types"
  },
{
    name: "Circusgoer",
    bluntRes: 1.2,
    pierceRes: 1.2,
    slashRes: 1.3,
    speed: 19,
    keypage: "Fools Act: No Passive"
  },
  {
    name: "Arrancar Coat",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "None: N/A"
  },
  {
    name: "Rogue Shinigami",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "None: N/A"
  },
  {
    name: "Quincy Coat",
    bluntRes: 1.0,
    pierceRes: 1.0,
    slashRes: 1.0,
    speed: 16,
    keypage: "None: N/A"
  }
];

export let egoList = [
{
    name: "Mimicry",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: ["Bleed", "Imitation"],
    unseal: false
},

{
    name: "4th Match Flame",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: ["Burn"],
    unseal: false
},

{
    name: "Apostle",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: [],
    unseal: false
},

{
    name: "Nine Children of the Dragon",
    sinPages: [
        { sin: "Wrath", amount: 1 },
        { sin: "None", amount: 1 }
    ],
    effects: ["Burn"],
    unseal: false
},

{
    name: "Regret",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: ["Tremor", "Tremor Burst"],
    unseal: false
},

{
    name: "Waxen Pinion",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: ["Burn", "Volatile Passion"],
    unseal: false
},

{
    name: "Ardor Blossom Star",
    sinPages: [
        { sin: "Wrath", amount: 2 }
    ],
    effects: ["Burn", "Ember"],
    unseal: false
},

{
    name: "Sanguine Desire",
    sinPages: [
        { sin: "Desire", amount: 2 }
    ],
    effects: ["Bleed", "Health"],
    unseal: false
},

{
    name: "Roseate Desire",
    sinPages: [
        { sin: "Desire", amount: 1 }
    ],
    effects: ["Value Power Down"],
    unseal: false
},

{
    name: "Nihil",
    sinPages: [
        { sin: "Sloth", amount: 2 }
    ],
    effects: [],
    unseal: false
},

{
    name: "Sunshower",
    sinPages: [
        { sin: "Sloth", amount: 2 }
    ],
    effects: ["Sinking", "Rupture"],
    unseal: false
},

{
    name: "Spicebush",
    sinPages: [
        { sin: "Sloth", amount: 2 }
    ],
    effects: ["Sinking", "Blooming", "Tremor Burst"],
    unseal: false
},

{
    name: "Smile",
    sinPages: [
        { sin: "Gluttony", amount: 2 }
    ],
    effects: ["Health", "Value Power Up"],
    unseal: false
},

{
    name: "Ebony Stem",
    sinPages: [
        { sin: "Gluttony", amount: 2 }
    ],
    effects: ["Rupture"],
    unseal: false
},

{
    name: "Farmwatch",
    sinPages: [
        { sin: "Gluttony", amount: 2 }
    ],
    effects: ["Bind"],
    unseal: false
},

{
    name: "Blue Star Worshipper",
    sinPages: [
        { sin: "Gloom", amount: 2 }
    ],
    effects: ["Sinking"],
    unseal: false
},

{
    name: "Fluid Sac",
    sinPages: [
        { sin: "Gloom", amount: 2 }
    ],
    effects: ["Sinking", "Bleed", "Sanity", "Tremor Burst"],
    unseal: false
},

{
    name: "Solemn Lament",
    sinPages: [
        { sin: "Gloom", amount: 2 }
    ],
    effects: ["Sinking", "Tremor"],
    unseal: false
},

{
    name: "Falling Blossom",
    sinPages: [
        { sin: "Pride", amount: 1 },
        { sin: "None", amount: 1 }
    ],
    effects: ["Bleed"],
    unseal: false
},

{
    name: "Blind Obsession",
    sinPages: [
        { sin: "Pride", amount: 2 }
    ],
    effects: ["Poise", "Charge", "Fluorescence Shard"],
    unseal: false
},

{
    name: "Magic Bullet",
    sinPages: [
        { sin: "Pride", amount: 1 }
    ],
    effects: ["Burn", "Fragile", "Paralyze"],
    unseal: false
},

{
    name: "Fell Bullet",
    sinPages: [
        { sin: "Pride", amount: 2 }
    ],
    effects: ["Poise", "Bleed", "Sinking"],
    unseal: false
},

{
    name: "Dimension Shredder",
    sinPages: [
        { sin: "Envy", amount: 2 }
    ],
    effects: ["Charge", "Rupture"],
    unseal: false
},

{
    name: "Hex Nail",
    sinPages: [
        { sin: "Envy", amount: 2 }
    ],
    effects: ["Bleed", "Nails"],
    unseal: false
},

{
    name: "Red Eyes",
    sinPages: [
        { sin: "Envy", amount: 2 }
    ],
    effects: ["Bind"],
    unseal: false
},

{
    name: "Telepole",
    sinPages: [
        { sin: "Envy", amount: 1 },
        { sin: "None", amount: 1 }
    ],
    effects: ["Charge", "Paralyze"],
    unseal: false
},

{
    name: "Wild Hunt",
    sinPages: [
        { sin: "Envy", amount: 2 }
    ],
    effects: ["Sinking", "Coffin", "Dullahan"],
    unseal: false
},

{
    name: "Twilight",
    sinPages: [
        { sin: "None", amount: 2 }
    ],
    effects: {
        Default: ["Sinking"],
        Gloom: ["Sinking"],
        Envy: ["Fragile"],
        Wrath: ["Burn"],
        Desire: ["Bleed"]
    },
    unseal: false
},

{
    name: "Prince of The Parade",
    sinPages: [
        { sin: "Desire", amount: 2 }
    ],
    effects: ["Bleed", "Bloodfeast", "Stored Blood", "Health"],
    unseal: true
},

{
    name: "The Manager of La Manchaland",
    sinPages: [
        { sin: "Wrath", amount: 1 },
        { sin: "Desire", amount: 1 }
    ],
    effects: [
        "Bleed",
        "Bloodfeast",
        "Hardblood",
        "Shimmering Blood",
        "Health"
    ],
    unseal: true
},

{
    name: "The Founder of La Manchaland",
    sinPages: [
        { sin: "Desire", amount: 2 }
    ],
    effects: ["Bleed", "Bloodfeast"],
    unseal: true
}
];

export let egoGiftList = [
    {
        name: "Ammunition Crate",
        tier: 1,
        effect: "When reloading Workshop firearms, load 20% more ammunition, All firearms fire 10% faster."
    },

    {
        name: "Aspiration",
        tier: 3,
        effect: "[Combat Start] Gain 7 Aspiration. [On Hit] Gain 1 Aspiration (1s CD). [On Kill] via Gripping: Gain 5 Aspiration, 3 Haste, and 20 Health.",
        status: ["Aspiration", "Haste"]
    },

    {
        name: "Awe",
        tier: 3,
        effect: "Hitting a player with 7+ Tremor using a dice that applies Tremor will inflict 1 Tremor Hemorrhage.",
        status: ["Tremor", "Tremor Hemorrhage"]
    },

    {
        name: "Barbed Lasso",
        tier: 2,
        effect: "[On Hit] if the target has 5+ Rupture; Inflict 1 Bind. At 5+ Bind, consume all Bind on target to apply 8 Rupture instead (5s CD).",
        status: ["Rupture", "Bind"]
    },

    {
        name: "Blue Sand",
        tier: 3,
        effect: "[On Hit] if Sinking Deluge triggers, Inflict 1 Blue Sand on target (90s CD per target).",
        status: ["Sinking Deluge", "Blue Sand"]
    },

    {
        name: "CENSORED",
        tier: 4,
        effect: "When applying Sinking Deluge on an enemy; gain 3 Overwhelming. When hitting an enemy with 15+ Sinking, or when winning a Clash gain 1 Overwhelming. Note: currently broken (again).",
        status: ["Sinking Deluge", "Overwhelming", "Sinking"]
    },

    {
        name: "Melted Spring",
        tier: 3,
        effect: "Using a page in [Absolute Sloth Resonance] applies Tremor Everlasting on target.",
        status: ["Tremor Everlasting"]
    },

    {
        name: "Mirage of the Udjat",
        tier: 3,
        effect: "[On Use] with any [Sloth Resonance] or [Gloom Resonance] affinity page: Gain (Light Cost - 2) Protection (15s CD). At 10+ Protection, consume 5 Protection to roll the maximum value on the current page (10s CD).",
        status: ["Protection"]
    },

    {
        name: "Rusted Muzzle",
        tier: 1,
        effect: "[On Hit] Dealing 14+ Base Damage in a single hit inflicts 2 Bleed. If the user is under [Absolute Lust Resonance], inflict 7 Bleed instead.",
        status: ["Bleed"]
    },

    {
        name: "Small Beak",
        tier: 2,
        effect: "Decrease a page's cost by 1 Light for the cost of 15 Health (60 seconds cooldown, can decrease up to 2)."
    },

    {
        name: "Talisman Bundle",
        tier: 1,
        effect: "[On Hit] Dealing 20+ Base Damage in a single hit inflicts 2 Rupture. If the user is under [Absolute Gluttony Resonance], inflict 8 Rupture instead.",
        status: ["Rupture"]
    },

    {
        name: "Volatile Fluid Of Unknown Origin",
        tier: 3,
        effect: "E.G.O. duration is infinite, but you lose 10 Sanity every 20 Seconds. At -45 Sanity immediately lose EGO.",
        status: ["Sanity"]
    },

    {
        name: "Red Order",
        tier: 2,
        effect: "[On Hit] if target has Sinking while below -35 Sanity: apply 1 SP Loss Efficiency to the target (60s CD per enemy).",
        status: ["Sinking", "Sanity", "SP Loss Efficiency"]
    },

    {
        name: "Hardwood Cup",
        tier: 1,
        effect: "On [Clash Lose], gain 3 Protection and gain Shield HP.",
        status: ["Protection", "Shield HP"]
    },

    {
        name: "Phlebotomy Pack",
        tier: 1,
        effect: "If Health is below 25%, dealing damage heals 6% of the damage dealt."
    },

    {
        name: "Nebulizer",
        tier: 2,
        effect: "When using Pages, gain 2 Poise. If said Page has [Pride Resonance], gain 4 Poise instead. (10s CD)",
        status: ["Poise"]
    },

    {
        name: "Fiery Down",
        tier: 2,
        effect: "[On Hit] against a target that has more than 4 Burn, apply 4 Burn to nearby targets. (40s CD)",
        status: ["Burn"]
    },

    {
        name: "Rusty Commemorative Coin",
        tier: 2,
        effect: "On [Clash Win], if a page's Light cost is 2 or lower, reuse the page again. (60s CD)"
    },

    {
        name: "Boombox of Dramatic Entrances",
        tier: 2,
        effect: "On [Combat Start] or [Absolute Envy Resonance], gain 2 Value Power Up for 35 seconds (separate CDs). Surrounds the user with the aura of The Middle whilst playing their music. (60s CD)",
        status: ["Value Power Up"]
    },

    {
        name: "The Book of Vengeance",
        tier: 2,
        effect: "Moves that absorb damage to return it later now absorb 2x as much."
    },

    {
        name: "Swishing Fuel Tank",
        tier: 3,
        effect: "Gain a 50% chance to resist being knocked. Passively survive dice with the [Auto Execute] property."
    },

    {
        name: "Sin Drenched Roses",
        tier: 3,
        effect: "[On Use] Pages Sin Affinity gets changed to your Highest Sin Affinity in Skill Tree."
    },

    {
        name: "Shatterbound Cannon",
        tier: 3,
        effect: "On [Combat Start], gain 1 Delicateness and 1 Firepower.",
        status: ["Delicateness", "Firepower"]
    },

    {
        name: "Shoddy Dressing",
        tier: 2,
        effect: "Gain 40 bonus max Health but be unable to heal past the increase."
    },

    {
        name: "Silver Watch Case",
        tier: 4,
        effect: "Allow you to slow M1s down on any weapon class."
    },

    {
        name: "Equalizer",
        tier: 4,
        effect: "Damage you Deal and Take now uses the Lowest Resistance of your Outfit."
    },

    {
        name: "Contaminated Thread and Needle",
        tier: 2,
        effect: "Inflict 3 Bleed [On Hit] with the first dice of a Page.",
        status: ["Bleed"]
    },

    {
        name: "Bongy Plush",
        tier: 4,
        effect: "Deal up to +15% damage the fuller your inventory is."
    },

    {
        name: "Tango Marinade",
        tier: 2,
        effect: "Gain up to 3 Clash Power depending on the speed difference between you and your target."
    }
];

export let traits = [
{
    name: "Agile",
    altname: "Quickstep",
    effects: "Replaces dash with a longer invisible dash that leaves black trails. Slightly increases i-frames. Causes 10 stamina loss on dash. Affected by Haste. Increases dash cooldown.",
    notes: "Alternatively, this trait can be obtained by choosing the \"Run as fast as you can, Abandoning your group\" option in character creation.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Bizzare",
    altname: "Unorthodox Timing",
    effects: "Recolors parry purple. -0.3s parry frames. -1s cooldown on parry whiff.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Calm",
    altname: "Composed Guard",
    effects: "Reduced stamina damage on block. Increased stamina loss on parry whiff.",
    notes: "Mutually Exclusive with Hot-Headed/Hair-Triggered.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "ChainDashes",
    altname: "Chain Steps",
    effects: "Gain the ability to Dash a second time for 1s~ after the first one. Decreased Dash Distance. Works with Agile/Quickstep. Dash CD isn't increased. Despite decreasing Dash Distance, using it twice has a greater total distance.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Hot-Headed",
    altname: "Hair-Triggered",
    effects: "Recolors parry red. Increases parry stun by a flat amount (0.2 seconds). Higher stamina damage on block.",
    notes: "Mutually Exclusive with Calm/Composed Guard. Alternatively, this trait can be obtained by skipping character creation.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Hypoxic",
    altname: "Adaptive Recovery",
    effects: "Greatly increases Health Regeneration. Greatly reduces Stamina Regeneration.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Immovable",
    altname: "",
    effects: "You will no longer be knocked back when parrying or being parried.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Indomitable",
    altname: "Iron Chin",
    effects: "Reduces damage taken while in Stagger.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Maniacal",
    altname: "Manic",
    effects: "Recover more stamina on parry. Decreased sanity recovery.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Overprepared",
    altname: "Mechanical Climber",
    effects: "You can travel up Ziplines.",
    notes: "Bugged.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Problem Solving",
    altname: "Problem Solving Throw",
    effects: "Letting go of a knocked Player/NPC while running will throw them forward.",
    notes: "Does not trigger when dropping them because of damage. NPCs will sometimes not be thrown far.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Proficient",
    altname: "Lightspeed Reflexes",
    effects: "Recolors parry to blue. +0.3s parry frames. +3s parry cooldown on whiff.",
    notes: "Alternatively, this trait can be obtained by choosing \"How to become Book Smart\" in character creation.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Reactive",
    altname: "Reflexive Instinct",
    effects: "Allows ragdoll cancel more frequently. Lose more stamina on ragdoll cancel.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Resolute",
    altname: "Iron Will",
    effects: "Reduces speed penalty while at low HP.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Resourceful",
    altname: "Quick Recovery",
    effects: "Increases Stamina Regeneration.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Shimmering",
    altname: "",
    effects: "Restore 1 additional Light when parrying heavy attacks.",
    notes: "",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "Steadfast",
    altname: "Tough Skin",
    effects: "Reduces most vulnerable damage resistance by 0.1.",
    notes: "The bonus resistance gets voided when changing suits, because it gets applied when respawning. When there are multiple resistances of the same value, the most-left one gets chosen.",
    offensive: false,
    defensive: true,
    misc: false
},

{
    name: "TimeDistortionField",
    altname: "Time-Distorting Field",
    effects: "Activating the Parry keybind during a Page will cancel it and stun enemies in a large area around you, at the cost of 100 Emotion Level Points. Can be done at any point while a page is being used. Adds a Mechanical Spine to the user's back.",
    notes: "Requires Emotion Level 1 or 2 to be active (200 and 402 points).",
    offensive: false,
    defensive: true,
    misc: false
},
{
    name: "BlindspotFinder",
    altname: "Blindspot Finder",
    effects: "Parrying an attack will cause you to quickly move behind the target.",
    notes: "15s Cooldown. Heavy parries will still trigger the effect, but the location you move to will not reflect this. Alters your character's face.",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Coldness",
    altname: "Heartless Execution",
    effects: "Makes gripping/carrying uncancellable unless ragdolled.",
    notes: "",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Energetic",
    altname: "Happy Feet",
    effects: "Reduces threshold to activate Emotion Level. Enhances Emotion Level gain.",
    notes: "",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Leeching",
    altname: "Strength Leech",
    effects: "Deal 20 Stamina Damage after parrying a Heavy Attack.",
    notes: "This effect cannot cause a Stagger.",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Lunging",
    altname: "Gap Closing",
    effects: "Fully charged Charged Attacks have a longer hitbox that moves you forward.",
    notes: "Said attacks aren't considered Heavy Attacks when parried.",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "MechanicalThrusters",
    altname: "Mechanical Thrusters",
    effects: "The 3rd light attack of an M1 Combo does damage, causing both you and the target to be lifted into the air.",
    notes: "20s Cooldown. Alters your character's appearance. Can be triggered by Chip Damage. Doesn't require the previous 2 hits to land.",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Methodical",
    altname: "Swift Execution",
    effects: "Reduces time to grip a target.",
    notes: "",
    offensive: true,
    defensive: false,
    misc: false
},

{
    name: "Paranoid",
    altname: "Cautious Fury",
    effects: "Reduces all damage dealt while not in a PERMADEATH server by 10%. Increases all damage dealt while in a PERMADEATH dungeon by 10%.",
    notes: "",
    offensive: true,
    defensive: false,
    misc: false
},
{
    name: "Chromatic",
    altname: "Chromatic Emotion",
    effects: "Changes most VFX to your CosmeticColor. Also changes your hair color to your CosmeticColor, but only while under emotion level.",
    notes: "",
    offensive: false,
    defensive: false,
    misc: true
},

{
    name: "Culinary Knowledge",
    altname: "",
    effects: "Spices will now be awarded from random drops.",
    notes: "Use a Recipe Book gained during the Shadou questline.",
    offensive: false,
    defensive: false,
    misc: true
},

{
    name: "Garde Pardue",
    altname: "",
    effects: "Consuming food only inflicts 50% of negative status counts they inflict.",
    notes: "This trait can be obtained exclusively from Shadou's questline. This trait does not count towards the trait cap of 3.",
    offensive: false,
    defensive: false,
    misc: true
},

{
    name: "Rojima Alliance",
    altname: "Token Of Rojima",
    effects: "Rats no longer aggro unless attacked.",
    notes: "This trait can be obtained exclusively from Random Rat's questline. This trait does not count towards the trait cap of 3.",
    offensive: false,
    defensive: false,
    misc: true
},
];