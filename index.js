/***** HAMBURGER MENU OPEN AND CLOSE *****/
// const hamburgerMenu = document.getElementById("hamburger--menu");
// const hamburgerMenuNavlinks = document.getElementById(
// 	"hamburger--mobile-navLinks"
// );

// const closeMenu = document.getElementById("closeMenu");
// const navLinks = document.getElementsByTagName("li");
// const otherCloseMenu = document.getElementById("closeMenu");

// const menuOpenHandler = () => {
// 	console.log("menu open");
// 	hamburgerMenuNavlinks.style.visibility = "visible";
// 	hamburgerMenuNavlinks.style.width = "35%";
// 	hamburgerMenuNavlinks.style.opacity = "1";
// };

// const menuCloseHandler = () => {
// 	console.log("menu close");
// 	hamburgerMenuNavlinks.style.visibility = "hidden";
// 	hamburgerMenuNavlinks.style.width = "10%";
// 	hamburgerMenuNavlinks.style.opacity = "0";
// 	hamburgerMenuNavlinks.style.display = "none";
// };

// hamburgerMenu.addEventListener("click", menuOpenHandler);
// closeMenu.addEventListener("click", menuCloseHandler);


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



