var debug_mode = true;

/**
 * This listener waits for messages from a content script.
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({
                "url": request.url
            });
        }
    }
);


function startupDelay(tabId) {
    var times = [1500, 5500, 15500, 25500];
    times.forEach(timeout);
    function timeout(value, index, array) {
        setTimeout(function () {
            chrome.tabs.sendMessage(tabId, {
                "message": "sayPeep"
            })
        }, value)
    }
}


/**
 * Called when any tab is updated
 */
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (debug_mode)
        logOut('Tab updated: ' + tab.url + " | " + tab.id + " | " + changeInfo.status);

    if (changeInfo.status == 'complete') {
        logOut('Tab complete.');
        startupDelay(tab.id);
    }
});



function logOut(out_string) {
    if (debug_mode){}
        console.log("Support-o-mat: " + out_string);
}

