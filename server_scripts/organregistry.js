//Builder
function Organ(itemID) {
    this.itemID = itemID
    this.pseudoOrgan = false
    this.organScores = []
}

Organ.prototype = {
    addScore: function(score, value) {
        if(score.indexOf(':') != -1)
            this.organScores.push({'id': score, 'value': value})
        else
            this.organScores.push({'id': `chestcavity:${score}`, 'value': value})
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
        if(organ.itemID.indexOf(':') == -1){
            organ.itemID = `kubejscavity:${organ.itemID}`
        }
        modid = organ.itemID.split(':')[0]
        item = organ.itemID.split(':')[1]
        event.addJson(`chestcavity:organs/kubejs/${modid}/${item}.json`, organ)
    }

    //Register your organs here!
    //Refer to https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java
    //for valid Organ Scores
    //For explanations on various things, see organregistry_readme.md
    
    
})
