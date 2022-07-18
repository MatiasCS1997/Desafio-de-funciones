/*Requerimiento 3 */
let paint = document.getElementById("paint");
paint.style.backgroundColor = "green";

let yel = function (element, color) {
  element.style.backgroundColor = color;
};

paint.addEventListener("click", () => {
  yel(paint, "yellow");
});
