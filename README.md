# Kube Cavity
Allows you to register items as Chest Cavity Organs and assign them OrganScores in an easy to use format.
## Assigning Organ Scores
One can assign Organ Scores to items in [organ_scoring.js](https://github.com/aethaerya/KubeCavity/blob/dcfadb1e99e409db9b44629abd69334e9ce95be7/server_scripts/organ_scoring.js)

See the examples in [organ_scoring_examples.js](https://github.com/aethaerya/KubeCavity/blob/dcfadb1e99e409db9b44629abd69334e9ce95be7/server_scripts/organ_scoring_examples.js)

For a list of valid OrganScores, refer to [CC Organ Scores](https://github.com/Tigereye504/chestcavity/blob/master/src/main/java/net/tigereye/chestcavity/registration/CCOrganScores.java)

## Registering Kube Organs
[organ_registry.js](https://github.com/aethaerya/KubeCavity/blob/dcfadb1e99e409db9b44629abd69334e9ce95be7/startup_scripts/organ_registry.js) is a WIP script looking to integrate registry with scoring into one file. Currently one has no choice but to use [organ_scoring.js](https://github.com/aethaerya/KubeCavity/blob/dcfadb1e99e409db9b44629abd69334e9ce95be7/server_scripts/organ_scoring.js) to score items. This works fine for items that already exist (either vanilla, or modded), but is tedious for managing custom items across two different files.

## Credits
Very special thanks to [A5TR0spud](https://github.com/A5TR0spud) for allowing us to use his mod's spritework for these examplary organs!

Check his mod out on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/ccastroadds) and [Github](https://github.com/A5TR0spud/chest-cavity-astro-adds)
