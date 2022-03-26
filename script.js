var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var topSpeed = document.getElementById("topSpeed");
var maxRange = document.getElementById("maxRange");

ms.onclick = function () {
  header.style.backgroundImage = "url(./assets/model_s.png)";
  model.innerHTML = "Model S";
  mph.innerHTML = "1.9";
  topSpeed.innerHTML = "250 mph";
  maxRange.innerHTML = "395 mi";
};
m3.onclick = function () {
  header.style.backgroundImage = "url(./assets/model_3.png)";
  model.innerHTML = "Model 3";
  mph.innerHTML = "2s";
  topSpeed.innerHTML = "230 mph";
  maxRange.innerHTML = "400 mi";
};
mx.onclick = function () {
  header.style.backgroundImage = "url(./assets/model_x.png)";
  model.innerHTML = "Model X";
  mph.innerHTML = "1.8s";
  topSpeed.innerHTML = "200 mph";
  maxRange.innerHTML = "450 mi";
};
my.onclick = function () {
  header.style.backgroundImage = "url(./assets/model_y.png)";
  model.innerHTML = "Model Y";
  mph.innerHTML = "2.5s";
  topSpeed.innerHTML = "210 mph";
  maxRange.innerHTML = "380 mi";
};
