document.addEventListener('DOMContentLoaded', init);

function init() {
	var awwClicker = document.querySelector('#aww');
	awwClicker.addEventListener('click', aww, false);
}

function aww() {
	openNewTab("https://www.reddit.com/r/aww/top/?sort=top&t=week");
}

function asyncCallbackSendMessage(messageString) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (arrayOfTabs) {
		var activeTab = arrayOfTabs[0];
		var activeTabId = activeTab.id;
		chrome.tabs.sendMessage(activeTabId, {
			"message": messageString
		});
	});
}

function openNewTab(url) {
	chrome.runtime.sendMessage({
		"message": "open_new_tab",
		"url": url
	});
}
