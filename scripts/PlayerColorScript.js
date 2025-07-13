/* from irrvlo */
/* edited version of custom skin link from bkc, updated to fix muzzle img */
const customSkinLink = "https://media.discordapp.net/attachments/1010612280775422093/1046918434761482280/headpinkbodygreen.png?ex=66c3c9c5&is=66c27845&hm=8814ea3a8680227ada49925bf10accdf22834216169ce05ae93dd41b0614903c&=&format=webp&quality=lossless";

/* DONT CHANGE ANYTHING BELOW */

const oldIsArr = Array.isArray;

const muzzleImg = "https://kirka.io/assets/img/__shooting-fire__.effa20af.png";

Array.isArray = (...args) => {

    if (args[0] && args[0].map && args[0].map.image) {
        if (args[0].map.image.width === 64 && args[0].map.image.height === 64 && args[0].map.image.src !== muzzleImg) {
            if (customSkinLink !== '') args[0].map.image.src = customSkinLink;
        }
    }

    return oldIsArr(...args);
}
