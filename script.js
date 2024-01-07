document.addEventListener("DOMContentLoaded", function () {
  const asideNav2 = document.querySelector(".click");
  const asideNav = document.querySelector(".aside__nav");
  asideNav2.addEventListener("click", function () {
    const ul = asideNav.querySelector("ul");

    if (ul.style.display === "none" || ul.style.display === "") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });
});
