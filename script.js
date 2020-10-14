
// JavaScript Document
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menutoggle() {
	if (menuStatus == false) {
		menu.style.marginLeft = "0px";
		menuStatus = true;
	}
	else if (menuStatus == true) {
		menu.style.marginLeft = "-300px";
		menuStatus = false;
	}
}

menuBtn.onclick = menutoggle;