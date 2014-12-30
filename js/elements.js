var elementDefinitions = {
    Steel:    {
        name: "Steel",
        effects: {
            Steel: 0.5,
            Fighting: 1,
            Dragon: 1,
            Water: 0.5,
            Thunder: 0.5,
            Fairy: 2,
            Fire: 0.5,
            Ice: 2,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 1,
            Psy: 1,
            Rock: 2,
            Ground: 1,
            Ghost: 1,
            Dark: 1,
            Flying: 1
        }
    },
    Fighting: {
        name:"Fighting",
        effects: {
            Steel: 2,
            Fighting: 1,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 0.5,
            Fire: 1,
            Ice: 2,
            Bug: 0.5,
            Normal: 2,
            Grass: 1,
            Poison: 0.5,
            Psy: 0.5,
            Rock: 2,
            Ground: 1,
            Ghost: 0,
            Dark: 2,
            Flying: 0.5
        }
    },
    Dragon:   {
        name: "Dragon",
        effects: {
            Steel: 0.5,
            Fighting: 1,
            Dragon: 2,
            Water: 1,
            Thunder: 1,
            Fairy: 0,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 1,
            Psy: 1,
            Rock: 1,
            Ground: 1,
            Ghost: 1,
            Dark: 1,
            Flying: 1
        }
    },
    Water:    {
        name: "Water",
        effects: {
            Steel: 1,
            Fighting: 1,
            Dragon: 0.5,
            Water: 0.5,
            Thunder: 1,
            Fairy: 1,
            Fire: 2,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 0.5,
            Poison: 1,
            Psy: 1,
            Rock: 2,
            Ground: 2,
            Ghost: 1,
            Dark: 1,
            Flying: 1
        }
    },
    Thunder: {
        name:"Thunder",
        effects: {
            Steel: 1,
            Fighting: 1,
            Dragon: 0.5,
            Water: 2,
            Thunder: 0.5,
            Fairy: 1,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 0.5,
            Poison: 1,
            Psy: 1,
            Rock: 1,
            Ground: 0,
            Ghost: 1,
            Dark: 1,
            Flying: 2
        }
    },
    Fairy:    {
        name:"Fairy",
        effects: {
            Steel: 0.5,
            Fighting: 2,
            Dragon: 2,
            Water: 1,
            Thunder: 1,
            Fairy: 1,
            Fire: 0.5,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 0.5,
            Psy: 1,
            Rock: 1,
            Ground: 1,
            Ghost: 1,
            Dark: 2,
            Flying: 1
        }
    },
    Fire:     {
        "name":"Fire",
        effects: {
            Steel: 2,
            Fighting: 1,
            Dragon: 0.5,
            Water: 0.5,
            Thunder: 1,
            Fairy: 1,
            Fire: 0.5,
            Ice: 2,
            Bug: 2,
            Normal: 1,
            Grass: 2,
            Poison: 1,
            Psy: 1,
            Rock: 0.5,
            Ground: 1,
            Ghost: 1,
            Dark: 1,
            Flying: 1
        }
    },
    Ice:      {
        name:"Ice",
        effects: {
            Steel: 0.5,
            Fighting: 1,
            Dragon: 2,
            Water: 0.5,
            Thunder: 1,
            Fairy: 1,
            Fire: 0.5,
            Ice: 0.5,
            Bug: 1,
            Normal: 1,
            Grass: 2,
            Poison: 1,
            Psy: 1,
            Rock: 1,
            Ground: 2,
            Ghost: 1,
            Dark: 1,
            Flying: 2
        }
    },
    Bug:      {
        name: "Bug",
        effects: {
            Steel: 0.5,
            Fighting: 0.5,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 0.5,
            Fire: 0.5,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 2,
            Poison: 0.5,
            Psy: 2,
            Rock: 1,
            Ground: 1,
            Ghost: 0.5,
            Dark: 2,
            Flying: 0.5
        }
    },
    Normal:   {
        name: "Normal",
        effects: {
            Steel: 0.5,
            Fighting: 0.5,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 1,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 1,
            Psy: 1,
            Rock: 0.5,
            Ground: 1,
            Ghost: 0,
            Dark: 1,
            Flying: 1
        }
    },
    Grass:    {
        name: "Grass",
        effects: {
            Steel: 0.5,
            Fighting: 1,
            Dragon: 0.5,
            Water: 2,
            Thunder: 1,
            Fairy: 1,
            Fire: 0.5,
            Ice: 1,
            Bug: 0.5,
            Normal: 1,
            Grass: 0.5,
            Poison: 0.5,
            Psy: 1,
            Rock: 2,
            Ground: 2,
            Ghost: 1,
            Dark: 1,
            Flying: 0.5
        }
    },
    Poison:   {
        name: "Poison",
        effects: {
            Steel: 0,
            Fighting: 1,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 2,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 2,
            Poison: 0.5,
            Psy: 1,
            Rock: 0.5,
            Ground: 0.5,
            Ghost: 0.5,
            Dark: 1,
            Flying: 1
        }
    },
    Psychic:  {
        name: "Psychic",
        effects: {
            Steel: 0.5,
            Fighting: 2,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 1,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 2,
            Psy: 0.5,
            Rock: 1,
            Ground: 1,
            Ghost: 1,
            Dark: 0,
            Flying: 1
        }
    },
    Rock:     {
        name: "Rock",
        effects: {
            Steel: 0.5,
            Fighting: 0.5,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 1,
            Fire: 2,
            Ice: 2,
            Bug: 2,
            Normal: 1,
            Grass: 1,
            Poison: 1,
            Psy: 1,
            Rock: 1,
            Ground: 0.5,
            Ghost: 1,
            Dark: 1,
            Flying: 2
        }
    },
    Ground:   {
        name: "Ground",
        effects: {
            Steel: 2,
            Fighting: 1,
            Dragon: 1,
            Water: 1,
            Thunder: 2,
            Fairy: 1,
            Fire: 2,
            Ice: 1,
            Bug: 0.5,
            Normal: 1,
            Grass: 0.5,
            Poison: 2,
            Psy: 1,
            Rock: 2,
            Ground: 1,
            Ghost: 1,
            Dark: 1,
            Flying: 0
        }
    },
    Ghost:    {
        name: "Ghost",
        effects: {
            Steel: 1,
            Fighting: 1,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 1,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 0,
            Grass: 1,
            Poison: 1,
            Psy: 2,
            Rock: 1,
            Ground: 1,
            Ghost: 2,
            Dark: 0.5,
            Flying: 1
        }
    },
    Dark:     {
        name: "Dark",
        effects: {
            Steel: 1,
            Fighting: 0.5,
            Dragon: 1,
            Water: 1,
            Thunder: 1,
            Fairy: 0.5,
            Fire: 1,
            Ice: 1,
            Bug: 1,
            Normal: 1,
            Grass: 1,
            Poison: 1,
            Psy: 2,
            Rock: 1,
            Ground: 1,
            Ghost: 2,
            Dark: 0.5,
            Flying: 1
        }
    },
    Flying:   {
        "name":"Flying",
        effects: {
            Steel: 0.5,
            Fighting: 2,
            Dragon: 1,
            Water: 1,
            Thunder: 0.5,
            Fairy: 1,
            Fire: 1,
            Ice: 1,
            Bug: 2,
            Normal: 1,
            Grass: 2,
            Poison: 1,
            Psy: 1,
            Rock: 0.5,
            Ground: 1,
            Ghost: 1,
            Dark: 1,
            Flying: 1
        }
    }
};