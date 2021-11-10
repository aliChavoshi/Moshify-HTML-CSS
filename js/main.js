//search collapsible
const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((item) =>
  item.addEventListener("click", function () {
    //toggle class collapsible--expanded
    this.classList.toggle("collapsible--expanded");
  })
);
