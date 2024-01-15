const showMenu = (e, t) => {
  let l = document.getElementById(e),
    n = document.getElementById(t);
  l &&
    n &&
    l.addEventListener("click", () => {
      n.classList.toggle("show");
    });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  let e = document.getElementById("nav-menu");
  e.classList.remove("show");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  let e = window.pageYOffset;
  sections.forEach((t) => {
    let l = t.offsetHeight,
      n = t.offsetTop - 50;
    (sectionId = t.getAttribute("id")),
      e > n && e <= n + l
        ? document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active")
        : document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active");
  });
}
window.addEventListener("scroll", scrollActive);
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2e3,
  delay: 200,
});
loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("loader-hidden"),
    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    });
}),
  sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {}),
  sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
    delay: 400,
  }),
  sr.reveal(".home__social-icon", { interval: 200 }),
  sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// Get the current year for the copyright dynamically
const currentYear = new Date().getFullYear();
footer_text.innerHTML = `Copyright &#169; <u>Bino</u> ${currentYear} `;
