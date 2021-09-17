const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");
const toggleOff = document.querySelector(".toggle-off-cont");;
const mobiles = document.querySelector(".mockups-img");
const shadow = document.querySelector("*");
const important = document.querySelector(".header-flex");

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
})

toggleOn.addEventListener("click", function() {
	important.classList.toggle("bright")
});

toggleOff.addEventListener("click", function() {
	important.classList.toggle("bright")
});
