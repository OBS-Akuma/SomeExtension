let customSkinLink = "Character Skin Swapper/skin.png";  // Placeholder for the skin link

// Listen for the event dispatched by contentScript.js to set `customSkinLink`
window.addEventListener('setCustomSkinLink', (event) => {
    customSkinLink = event.detail;
    replaceSkin();
});

// Main functionality to replace skin
function replaceSkin() {
    //const customSkinLink = "https://i.imgur.com/28oRhB7.png"
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
}
