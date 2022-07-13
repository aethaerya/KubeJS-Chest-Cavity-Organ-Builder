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
        event.addJson(`chestcavity:organs/kubejs/${modid}/${item}.json`, organ)
    }

    //Register your organs here!
    //Refer to https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java
    //for valid Organ Scores

    //For explanations on certain things, please check out organregistry_readme.md

    //thank you for A5TR0spud for allowing me to use his mod's spritework for these examplary organs! 
    //check out his mod and its github: https://www.curseforge.com/minecraft/mc-mods/ccastroadds https://github.com/A5TR0spud/chest-cavity-astro-adds

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