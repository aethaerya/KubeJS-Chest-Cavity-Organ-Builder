//Builder
function Organ(itemID) {
    this.itemID = itemID;
    this.pseudoOrgan = false;
    this.organScores = [];
}

Organ.prototype = {
    addScore: function(score, value) {
        this.organScores.push({'id': `chestcavity:${score}`, 'value': value});
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
        const modid = organ.itemID.split('\:')[0]
        const item = organ.itemID.split('\:')[1]
        event.addJson(`chestcavity:organs/kubejs/${modid}/${item}.json`, organ)
    }

    //Register your organs here!
    //Refer to https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java
    //for valid Organ Scores

    registerOrgan(new Organ('minecraft:beetroot').addScore('health', 10).addScore('speed', 10).build()) //example.
    registerOrgan(new Organ('kubejs:someorgan').addScore('health', 2).addScore('speed', 20).pseudo().build()) //pseudo organ example for kubejs item

    //can also build them like this
    registerOrgan(new Organ('minecraft:reetboot')
        .addScore('health', 10)
        .addScore('speed', 10)
        .build()
    )
})
