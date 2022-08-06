// Problem 1

var figures = document.querySelectorAll(".container>figure");
figures.forEach((figure) => {
  figure.classList.add("one-third");
});

// Problem 2

var footer = document.querySelector("footer");
footer.addEventListener("click", () => {
  footer.style.display = "none";
});
