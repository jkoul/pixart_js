function changeColor() {
  event.preventDefault();
 $(".brush").css("background", (document.getElementById("color-field")).value);
};

$("button")[0].addEventListener("click", changeColor);

for(var i = 0; i < 20; i++) {
  var colorSq = document.createElement("colorSq");
  colorSq.classList.add("square");
  document.body.appendChild(colorSq);
};

document.body.addEventListener("click", function () {
  if(event.target.classList.contains("square")) {
    $(event.target).css("background", (document.getElementById("color-field")).value);
  };
});
