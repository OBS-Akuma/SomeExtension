const scriptNames = [
  "PlayerColorScript.js",
  "PlayerCountScript.js",
  "CustomGlbsScript.js"
];

scriptNames.forEach(scriptName => {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(`scripts/${scriptName}`);
  script.onload = () => {
    console.log(`Successfully injected: ${scriptName}`);
  };
  script.onerror = () => {
    console.error(`Failed to inject: ${scriptName}`);
  };
  document.head.appendChild(script);
});
