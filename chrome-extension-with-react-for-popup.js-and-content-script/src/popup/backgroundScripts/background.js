console.log(`In background Script 1`);

const openNewTab = () => {
    console.log('Opening new tab');
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'hello') openNewTab()
    return true;
});