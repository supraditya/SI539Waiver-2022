// Problem 1

var figures= document.querySelectorAll(".container>figure");
console.log(figures)
figures.forEach(figure=>{
    figure.classList.add("one-third")
})