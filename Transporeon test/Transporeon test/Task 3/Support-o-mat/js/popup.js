document.addEventListener('DOMContentLoaded', init);


function init() {
	var awwClicker = document.querySelector('#aww');
	awwClicker.addEventListener('click', aww, false);

	var email = document.querySelector('#mail');
	email.addEventListener('click', mailForm, false);
}


function aww() {
	openNewTab("https://www.reddit.com/r/aww/top/?sort=top&t=week");
}


function mailForm(){
	basicPopup("../html/email.html");
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


function basicPopup(url) {
	popupWindow = window.open(url,'popUpWindow','height=600,width=500,left=' + (screen.width-500)/2 + ',top=' + (screen.height-600)/2 + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=center,directories=no, status=yes')
}
