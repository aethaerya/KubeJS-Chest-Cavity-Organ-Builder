function KubeOrgan(organID) {
    this.itemID = organID.indexOf(':') == -1 ? `kubejscavity:${organID}` : organID // Sets default itemID
    // If an modID separated by a ':' is not found in string organID, default to kubejscavity, else, keep organID
    this.stackSize = 1
    this.displayName = organID.indexOf(':') == -1 ? organID : organID.split(':')[1] // Sets default displayName
    // If a modid separated by a ':' is not found in string organID, default to organID, else, get string after ':'
}

KubeOrgan.prototype = {
    stackSize: function(size) {
        this.stackSize = size
        return this
    },

    displayName: function(name) {
        this.displayName(name)
        return this
    },

    build: function() {
        return this
    }
}

onEvent('item.registry', event => {
    function createOrgan(organ) {
        event.create(`${organ.itemID}`)
        .group('chestcavity:organs')
        .maxStackSize(organ.stackSize)
        .displayName(organ.displayName)
    }

    //Create KubeJS Organs here
    //Enter ID of the item and stacksize (default 1) of the item to get a custom item nested inside kubejscavity namespace. 
    //Enter Full ID of the item to get a custom item nested inside the appropriate namespace.
    //If a namespace is not supplied, it will default to kubejscavity.
    //This DOES NOT make these items into organs automatically, so go to server_scripts to add them to be organs!
    //You also need to provide the item textures under the appropriate namespace, defaulted into assets/kubejscavity/textures/item. change kubejscavity with the appropriate namespace.
    
    createOrgan(new KubeOrgan('creative_soul')
        .build()
    )

    createOrgan(new KubeOrgan('actuator')
        .stackSize(16)
        .build()
    )

    createOrgan(new KubeOrgan('copper_wiring')
        .stackSize(4)
        .build()
    )

    createOrgan(new KubeOrgan('copper_frame')
        .stackSize(4)
        .build()
    )

    createOrgan(new KubeOrgan('phantom_pump').build())
    createOrgan(new KubeOrgan('filter_pump').build())
    createOrgan(new KubeOrgan('blood_pump').build())

    createOrgan(new KubeOrgan('jump_shaft')
        .stackSize(16)
        .build()
    )

    createOrgan(new KubeOrgan('golden_wiring')
        .stackSize(4)
        .build()
    )

    createOrgan(new KubeOrgan('clockwork_core').build())
    createOrgan(new KubeOrgan('gem_holster').build())
    createOrgan(new KubeOrgan('acid_mixer').build())

    createOrgan(new KubeOrgan('steel_actuator')
        .stackSize(16)
        .build()
    )

    createOrgan(new KubeOrgan('steel_cable')
        .stackSize(4)
        .build()
    )

    createOrgan(new KubeOrgan('steel_frame')
        .stackSize(4)
        .build()
    )

    createOrgan(new KubeOrgan('steel_detoxifier').build())
    createOrgan(new KubeOrgan('steel_core').build())
    createOrgan(new KubeOrgan('captured_soul').build())
    createOrgan(new KubeOrgan('iron_lung').build())
    createOrgan(new KubeOrgan('heart_of_gold').build())

    createOrgan(new KubeOrgan('hasty_muscle')
        .stackSize(16)
        .build()
    )
})
