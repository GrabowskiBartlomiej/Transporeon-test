document.addEventListener('DOMContentLoaded', init);

function init() {
	var form =document.querySelector('#form');
	form.addEventListener('submit', sendEmail, false);
}


function sendEmail(){

	let to = document.getElementById("to").value;
	let subject = document.getElementById("subject").value;
	let message = document.getElementById("message").value;
    window.open('mailto:' + to + '?subject='+ subject + '&body=' + message)

}