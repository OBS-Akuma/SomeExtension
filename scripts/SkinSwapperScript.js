// Get the URL for the custom skin image
const customSkinLink = chrome.runtime.getURL("https://raw.githubusercontent.com/SheriffCarry/KirkaSkins/refs/heads/main/Characters/Gentleman-texture.png");

// Inject the external script
const mainScript = document.createElement('script');
mainScript.src = chrome.runtime.getURL('SkinSwapperInjector.js');
mainScript.onload = () => {
    // After the script is loaded, dispatch an event with the skin link
    window.dispatchEvent(new CustomEvent('setCustomSkinLink', { detail: customSkinLink }));
    mainScript.remove();
};
document.documentElement.appendChild(mainScript);
