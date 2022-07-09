//Builder
function Organ(itemID) {
    this.itemID = itemID
    this.pseudoOrgan = false
    this.organScores = []
}

Organ.prototype = {
    addScore: function(score, value) {
        if(score.indexOf('\:') != -1){
            this.organScores.push({'id': score, 'value': value});
        }
        else
        {
            this.organScores.push({'id': `chestcavity:${score}`, 'value': value});
        }
        return this;
    },

    pseudo: function() {
        this.pseudoOrgan = true;
        return this
    },

    build: function() {
        return this;
    }
}

//Main
onEvent('server.datapack.high_priority', event => {
    function registerOrgan(organ) {
        if(organ.itemID.indexOf('\:') == -1){
            organ.itemID = `kubejscavity:${organ.itemID}`
        }
        modid = organ.itemID.split('\:')[0]
        item = organ.itemID.split('\:')[1]
        event.addJson(`chestcavity:organs/kubejs/kubejscavity/${item}.json`, organ)
    }

    //Register your organs here!
    //Refer to https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java
    //for valid Organ Scores

    //if mod id is not present for the item, it defaults to kubejscavity
    //if mod id is not present for the organ stats, it defaults to chestcavity

    // registerOrgan([new Organ...]) : you need to put your organ stat inside here to make custom organ stats register.
    // new Organ([item id]) : this is how you make an organ stat for certain item.
    // .addScore([organ score id],[intager]) : this is how you can add an organ stat for the item. 
    // .pesudo() : this dictates if the organ is pesudo, and makes that organ stats does not show up in the tooltip.
    // .build() : you need to put this in the end to finish organ stat making.
    
    /*
    Example for minecraft:beetroot :
    registerOrgan(new Organ('minecraft:beetroot').addScore('health', 10).addScore('speed', 10).build()) 

    Pesudo organ example for kubejscavity:someorgan :
    registerOrgan(new Organ('someorgan').addScore('health', 2).addScore('speed', 20).pseudo().build()) 
    
    Can also build it like this :
    registerOrgan(new Organ('minecraft:reetboot')
        .addScore('health', 10)
        .addScore('speed', 10)
        .build()
    )
    */
    
    //After finishing the script, you can reload the organ stats in-game using /reload command!
    

    /* 
        Explanation of chest cavity stats

        Tiers:
        severely            is hydroallergenic specific and is 2
        supernatural        = 1.5 or more   (generally 1.5)
        exceptional         = 1.25 to 1.5   (generally 1.25)
        good                = 1 to 1.25     (generally 1)
        average             = 0.75 to 1     (generally 0.75)
        poor                = 0.5 to 0.75   (generally 0.5)
        pathetic            = 0 to 0.5      (generally 0.25)
        slightly reduces    = -0.25 to 0    (generally -0.25)
        reduces             = -0.5 to -0.25 (generally -0.5)
        greatly reduces     = -0.75 to -0.5 (generally -0.75)
        cripples            = -1 or less    (generally -1) 

        Luck (appendixes)                                       affects loot tables, such as fishing, chests you find, what mobs drop
        Health (hearts)                                         affects max health
        Nutrition (intestines)                                  affects how saturated food makes you
        Filtration (kidneys)                                    if you don’t have enough you get poisoned
        Detoxification (liver)                                  affects how long debuffs last
        Recovery (lungs)                                        affects how fast you gain breath bubbles
        Breath Capacity (lungs and gills)                       affects how slow you lose breath bubbles
        Strength (muscles)                                      affects damage
        Speed (muscles)                                         affects movement speed, obviously
        Defense (ribs, spine)                                   affects how much damage you take
        Metabolism (spleen)                                     affects how fast hunger heals you
        Nerves                                                  affect movement speed
        Digestion (stomach)                                     affects how many shanks eating restores
        Endurance (lung)                                        affects how fast you lose hunger and saturation
        Water breath (gills, saltwater organs)                  is the same as breath, but you regain breath in water and lose it on land
        Herbivore digestion (herbivore stomach, rumen)          is how much shanks you gain from eating vegetables/fruits
        Herbivore nutrition (herbivore intestine)               is how much saturation you get from vegetables/fruits
        Grazing (herbivore rumen)                               lets you eat grass by pressing v
        Carnivorous digestion (carnivore stomach)               affects how many shanks you get from meat
        Carnivorous nutrition (carnivore intestines)            affects how much saturation you get from meat
        Silk glands                                             let you produce string by pressing v if you have enough hunger to heal. If you have 2 it places a cobweb. If you have 3 it places wool. Any more will place wool + how ever many string
        Venom glands                                            induce effects on mobs you punch with your fist. These can be crafted with a potion to change the effect, length, and strength.
        Arrow dodging (ender appendix)                          teleports you away before you get hit by an arrow
        Hydroallergenic (ender/blaze organs)                    makes you take damage in water. The more submerged you are the more you take 
        Hydrophobic (ender kidneys)                             makes you teleport when touching water
        Dragon bombs (dragon appendix)                          let you shoot dragon fireballs with r
        Buff purging (dragon liver, dragon kidneys)             decreases buff duration (buffs are positive effects)
        Impact resistant (dragon ribs and dragon spine)         decrease fall and eytra damage
        Dragon breath (dragon lungs)                            lets you breath death with r
        Launching (dragon muscles and piston muscles)           makes any mob you hit fly into the air
        Fire resistant (blaze organs, gas bladder)              decreases damage dealt by fire and lava
        Buoyant (gas bladder)                                   makes you floaty, both in water and in air
        Ghastly (volatile stomach)                              lets you shoot fireballs with r
        Creepy (creeper appendix)                               lets you explode when you press r. Power can be increased with more creeper appendixes, gunpowder, or tnt.
        Shulker bullets (shulker spleen)                        lets you shoot a shulker bullet of your very own with r that ignores you and seeks out other mobs
        Pyromancy (active blaze rods)                           lets you shoot fireballs with r
        Withered (withered ribs, withered spine)                reduces the duration of the wither effect
        Forceful spit (llama lungs)                             lets you spit by pressing r. Does one damage
        Rot digestion (rotten stomach)                          affects how much hunger you gain from rotten flesh. Also removes the ability for rotten flesh to hunger you
        Rot nutrition (rotten intestines)                       affects how saturating rotten flesh is. Also removes hunger from rotten flesh
        Crystal synthesis (mana reactor)                        when you’re near an end crystal this saturates you
        Swim speed (aquatic muscles)                            affects how fast you move in water
        Ease of access (doors and trapdoors)                    lets you open the mob without it taking damage, and ignores the health cap
        Iron repair (golem plating)                             lets you consume iron to heal using v
        Furnace powered (inner furnaces)                        lets you consume fuels for food over time using v
        Knockback Resistance (golem core, golem cable)          reduces knockback taken

    */
    registerOrgan(new Organ('creative_soul')
        .addScore('filtration',2)
        .addScore('breath_recovery',2)
        .addScore('nutrition',4)
        .addScore('nerves',1)
        .addScore('strength',8)
        .addScore('health',1)
        .addScore('breath_capacity',2)
        .addScore('detoxification',1)
        .addScore('speed',8)
        .addScore('endurance',2)
        .addScore('luck',1)
        .addScore('defense',4.5)
        .addScore('digestion',1)
        .addScore('metabolism',1)
        .build()
    )
    registerOrgan(new Organ('actuator').addScore('speed',1.5).addScore('strength',0.5).build())
    registerOrgan(new Organ('blood_pump').addScore('health',0.5).addScore('metabolism',0.25).addScore('detoxification',0.25).build())
    registerOrgan(new Organ('captured_soul').addScore('buoyant',3.25).build())
    registerOrgan(new Organ('clockwork_core').addScore('health',0.5).addScore('defense',0.5).addScore('speed',0.5).addScore('strength',0.5).addScore('endurance',-1).build())
    registerOrgan(new Organ('copper_frame').addScore('defense',0.5).addScore('knockback_resistant',1).build())
    registerOrgan(new Organ('copper_wiring').addScore('nerves',1.25).addScore('defense',0.25).build())
    registerOrgan(new Organ('filter_pump').addScore('detoxification',0.5).addScore('filtration',0.75).build())
    registerOrgan(new Organ('gem_holster').addScore('luck',1.25).addScore('buoyant',-0.25).addScore('speed',-0.25).build())
    registerOrgan(new Organ('golden_wiring').addScore('nerves',2).build())
    registerOrgan(new Organ('hasty_muscle').addScore('speed',1.25).addScore('strength',0.25).addScore('nerves',0.5).build())
    registerOrgan(new Organ('heart_of_gold').addScore('health',0.5).addScore('luck',0.5).addScore('defense',0.5).addScore('strength',-1).build())
    registerOrgan(new Organ('iron_lung').addScore('breath_recovery',0.75).addScore('breath_capacity',0.75).addScore('endurance',1.25).build())
    registerOrgan(new Organ('jump_shaft').addScore('speed',1.25).addScore('strength',0.25).addScore('impact_resistant',0.75).addScore('leaping',0.5).build())
    registerOrgan(new Organ('phantom_pump').addScore('buoyant',0.5).addScore('breath_recovery',0.75).addScore('breath_capacity',0.75).addScore('endurance',0.75).build())
    registerOrgan(new Organ('steel_actuator').addScore('speed',0.25).addScore('strength',1.25).addScore('defense',0.25).build())
    registerOrgan(new Organ('steel_cable').addScore('nerves',1.25).addScore('defense',0.75).addScore('metabolism',-1).build())
    registerOrgan(new Organ('steel_core').addScore('health',1).addScore('defense',1).addScore('metabolism',-1).build())
    registerOrgan(new Organ('steel_detoxifier').addScore('detoxification',0.75).addScore('filtration',0.5).addScore('endurance',0.5).addScore('metabolism',-0.5).build())
    registerOrgan(new Organ('steel_frame').addScore('defense',1.25).addScore('metabolism',-0.25).build())
})