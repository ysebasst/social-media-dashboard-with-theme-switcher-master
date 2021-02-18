// ### ### ### ### ### DARKMODE ### ### ### ### ###
addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkmode") === "true") {
    document
      .querySelector("#darkmode")
      .classList.add("darkmode__button--active");
    setDarkMode();
  }
});
// ### ### ### ### ### DARKMODE ### ### ### ### ###
document.querySelector("#darkmode").addEventListener("click", (e) => {
  e.target.classList.toggle("darkmode__button--active");
  setDarkMode();
});

function setDarkMode(e) {
  const body = document.body;
  if (
    document
      .querySelector("#darkmode")
      .classList.contains("darkmode__button--active")
  ) {
    document.body.classList.add("is-darkmode");
    localStorage.setItem("darkmode", true);
  } else {
    document.body.classList.remove("is-darkmode");
    localStorage.setItem("darkmode", false);
  }
}
