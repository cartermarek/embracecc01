const downArrow = document.querySelector(".about--downArrow");
const aboutPara = document.querySelector(".aboutParagraph");

const downArrowHandler = () => {
	downArrow.classList.toggle("open-rotate");
	aboutPara.classList.toggle("about--hidden");
};

downArrow.addEventListener("click", downArrowHandler);
