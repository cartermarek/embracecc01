

// const downArrow = document.querySelector(".about--downArrow");
// const aboutPara = document.querySelector(".aboutParagraph");

// const downArrowHandler = () => {
// 	downArrow.classList.toggle("open-rotate");
// 	aboutPara.classList.toggle("about--hidden");
// };

// downArrow.addEventListener("click", downArrowHandler);

/***** PAGE SWITCH FUNCTION - ABOUT PAGE *****/
const buttonPastor = document.getElementById("pastor");
const buttonChurch = document.getElementById("church--vision");
const pastorPage = document.getElementById("aboutPastor");
const churchPage = document.getElementById("aboutChurch");
const togglePage = document.getElementsByClassName("pageHide");
const activePage = document.getElementsByClassName("activeLink");
const slideIn = document.getElementsByClassName("indexBody")

const switchPage = () => {
	// console.log('pastor button')
	// console.log(pastorPage.classList.contains("pageHide"))
	if (pastorPage.classList.contains("pageHide")) {
		console.log("pastorPage");
		churchPage.classList.add("pageHide");
		pastorPage.classList.remove("pageHide");
		// churchPage.classList.add("indexBody");
		// pastorPage.classList.remove("indexBody");
		buttonPastor.classList.add("activeLink");
		buttonChurch.classList.remove("activeLink");
	} else {
		return
	}
};

const toggleChurchPage = () => {
	if (churchPage.classList.contains("pageHide")) {
		console.log("churchPage");
		pastorPage.classList.add("pageHide");
		churchPage.classList.remove("pageHide");
		// pastorPage.classList.add("indexBody");
		// churchPage.classList.remove("indexBody");
		buttonChurch.classList.add("activeLink");
		buttonPastor.classList.remove("activeLink");
	} else {
		return
	}
};

buttonPastor.addEventListener("click", switchPage);
buttonChurch.addEventListener("click", toggleChurchPage);

// TOGGLE BUTTON

const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
                option.addEventListener("click", function() {
  barOuter.className = "bar-outer";
  barOuter.classList.add(`pos${option.index}`);
  if (option.index > current) {
    barOuter.classList.add("right");
  } else if (option.index < current) {
    barOuter.classList.add("left");
  }
  current = option.index;
}));