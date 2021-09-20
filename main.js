const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");
const toggleOff = document.querySelector(".toggle-off-cont");;
const mobiles = document.querySelector(".mockups-img");
const shadow = document.querySelector(".header-text-cont");
const shadow2 = document.querySelector(".mockups-bg");
const shadow3 = document.querySelector(".choose-section");
const shadow4 = document.querySelector(".articles-section");
const shadow5 = document.querySelector(".footer-section");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOn.addEventListener("click", function () {
	toggleOff.classList.toggle("press2");
});

toggleOn.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

toggleOff.addEventListener("click", function() {
	toggleOff.classList.toggle("press2")
});

toggleOff.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOn.addEventListener("click", function() {
    mobiles.classList.toggle("active")
});

toggleOff.addEventListener("click", function () {
	mobiles.classList.toggle("active")
});

toggleOn.addEventListener("click", function() {
	shadow.classList.toggle("shadow")
});

toggleOff.addEventListener("click", function() {
	shadow.classList.toggle("shadow")
});

toggleOn.addEventListener("click", function() {
	shadow2.classList.toggle("shadow2")
});

toggleOff.addEventListener("click", function() {
	shadow2.classList.toggle("shadow2")
});

toggleOn.addEventListener("click", function() {
	shadow3.classList.toggle("shadow3")
});

toggleOff.addEventListener("click", function() {
	shadow3.classList.toggle("shadow3")
});

toggleOn.addEventListener("click", function() {
	shadow4.classList.toggle("shadow4")
});

toggleOff.addEventListener("click", function() {
	shadow4.classList.toggle("shadow4")
});

toggleOn.addEventListener("click", function() {
	shadow5.classList.toggle("shadow5")
});

toggleOff.addEventListener("click", function() {
	shadow5.classList.toggle("shadow5")
});


