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

// button pulsate

