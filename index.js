/***** HAMBURGER MENU OPEN AND CLOSE *****/
const hamburgerMenu = document.getElementById("hamburger--menu");
const hamburgerMenuNavlinks = document.getElementById(
	"hamburger--mobile-navLinks"
);

const closeMenu = document.getElementById("closeMenu");
const navLinks = document.getElementsByTagName("li");
const otherCloseMenu = document.getElementById("closeMenu");

const menuOpenHandler = () => {
	console.log("menu open");
	hamburgerMenuNavlinks.style.visibility = "visible";
	hamburgerMenuNavlinks.style.width = "35%";
	hamburgerMenuNavlinks.style.opacity = "1";
};

const menuCloseHandler = () => {
	console.log("menu close");
	hamburgerMenuNavlinks.style.visibility = "hidden";
	hamburgerMenuNavlinks.style.width = "10%";
	hamburgerMenuNavlinks.style.opacity = "0";
	// hamburgerMenuNavlinks.style.display = "none";
};

hamburgerMenu.addEventListener("click", menuOpenHandler);
closeMenu.addEventListener("click", menuCloseHandler);

/***** PAGE SWITCH FUNCTION - ABOUT PAGE *****/
const selectorPastor = document.getElementById("pastor");
const selectorChurch = document.getElementById("church--vision");
const pastorPage = document.getElementById("aboutPastor");
const churchPage = document.getElementById("aboutChurch");
const togglePage = document.getElementsByClassName("pageHide");
const activePage = document.getElementsByClassName("activeLink");

const togglePastorPage = () => {
	if (pastorPage.classList == "pageHide") {
		console.log("clicked");
		churchPage.classList.add("pageHide");
		pastorPage.classList.remove("pageHide");
		selectorPastor.classList.add("activeLink");
		selectorChurch.classList.remove("activeLink");
	} else {
		return;
	}
};

const toggleChurchPage = () => {
	if (churchPage.classList == "pageHide") {
		console.log("clicked");
		pastorPage.classList.add("pageHide");
		churchPage.classList.remove("pageHide");
		selectorChurch.classList.add("activeLink");
		selectorPastor.classList.remove("activeLink");
	} else {
		return;
	}
};

// fade-in effect on scroll

(function () {
	let elements;
	let windowHeight;

	function init() {
		elements = document.querySelectorAll(".hidden");
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];
			let positionFromTop = elements[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight + 190 <= 0) {
				element.classList.add("fade-in-element");
				element.classList.remove("hidden");
			} else if (positionFromTop > 400) {
				element.classList.add("hidden");
				element.classList.remove("fade-in-element");
			}
			console.log("top", positionFromTop);
			// console.log(positionFromTop - windowHeight + 190);
		}
		// console.log("window", windowHeight);
	}

	window.addEventListener("scroll", checkPosition);
	window.addEventListener("resize", init);

	init();
	checkPosition();
})();

selectorPastor.addEventListener("click", togglePastorPage);
selectorChurch.addEventListener("click", toggleChurchPage);

