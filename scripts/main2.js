var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute ('src', 'images/firefox-icon.png');
	}
}

function setUserName() {
	var myName = prompt('Please insert your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'This is Jonathan, Welcome traveler + myName.'; 
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'This is Jonathan, Welcome traveler + storedName.'; 
}

myButton.onclick = function () {
	setUserName();
}
