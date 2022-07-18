/*Requerimiento N°4*/
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
div1.setAttribute("style", "width:200px;height:200px;background-color:black");
div2.setAttribute("style", "width:200px;height:200px;background-color:gold");
div3.setAttribute("style", "width:200px;height:200px;background-color:pink");
div4.setAttribute("style", "width:200px;height:200px;background-color:gray");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    backcolor = "blue";
  } else if (event.key === "s") {
    backcolor = "green";
  } else if (event.key === "d") {
    backcolor = "purple";
  }
});

div1.addEventListener("click", () => (div1.style.backgroundColor = backcolor));
div2.addEventListener("click", () => (div2.style.backgroundColor = backcolor));
div3.addEventListener("click", () => (div3.style.backgroundColor = backcolor));
div4.addEventListener("click", () => (div4.style.backgroundColor = backcolor));
