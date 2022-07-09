onEvent('item.registry', event => {
    function createOrgan(organID,StackSize){
        //StackSize ?? 1
        if(organID.indexOf('\:') != -1)
        {   
            event.create(organID).maxStackSize(StackSize == null ? 1 : StackSize).group('chestcavity:organs')
        }
        else
        {
            event.create(`kubejscavity:${organID}`).maxStackSize(StackSize == null ? 1 : StackSize).group('chestcavity:organs')
        }
    }
    //Create kubejs Organs here
    //Enter ID of the item and stacksize(optional, if not written it will default to 1) of the item to get a custom item nested inside kubejscavity namespace. 
    //Enter Full ID of the item and stacksize(optional, if not written it will default to 1) of the item to get a custom item nested inside the appropriate namespace.
    //This DOES NOT make these items into organs automatically, so go to server_scripts to add them to be organs!
    //You also need to put the item textures under the appropriate namespace, defaulted into assets/kubejscavity/textures/item. change kubejscavity with the appropriate namespace.
    
    //thank you for A5TR0spud for allowing me to use his mod's spritework for these examplary organs! 
    //check out his mod and its github: https://www.curseforge.com/minecraft/mc-mods/ccastroadds https://github.com/A5TR0spud/chest-cavity-astro-adds
    //createOrgan('clockwork_heart',1)
    createOrgan('creative_soul')
    createOrgan('actuator',16)
    createOrgan('copper_wiring',4)
    createOrgan('copper_frame',4)
    createOrgan('phantom_pump')
    createOrgan('filter_pump')
    createOrgan('blood_pump')
    createOrgan('jump_shaft',16)
    createOrgan('golden_wiring',4)
    createOrgan('clockwork_core')
    createOrgan('gem_holster')
    createOrgan('acid_mixer')
    createOrgan('steel_actuator',16)
    createOrgan('steel_cable',4)
    createOrgan('steel_frame',4)
    createOrgan('steel_detoxifier')
    createOrgan('steel_core')
    createOrgan('captured_soul')
    createOrgan('iron_lung')
    createOrgan('heart_of_gold')
    createOrgan('hasty_muscle',16)
})