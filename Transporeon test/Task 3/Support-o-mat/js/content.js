var someArray = ["ti", "sys"];
var someString = "tisys4you";
var someBoolean = false;
var someInteger = 42;

/**
 * This listener waits for messages from the background script.
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "sayPeep") {
            logOut("Peep");
        }
    }
);

document.addEventListener('DOMContentLoaded', someFunction);

function someFunction() {
    logOut("document has loaded");
}