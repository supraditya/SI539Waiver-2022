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

// Problem 3

var fifth_figure = document.querySelector(".container>figure:nth-child(5)");
fifth_figure.addEventListener("dblclick", () => {
  fifth_figure.style.visibility = "hidden";
});
