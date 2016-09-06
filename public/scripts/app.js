zegar();

function zegar() {
  var d = new Date(),
  dzien = d.getDate(),
  rok = d.getFullYear(),
  godzina = d.getHours(),
  minuta = d.getMinutes()
  sekunda = d.getSeconds();
  if (godzina < 10) {
    godzina = "0"+godzina;
  }
  if(minuta < 10) {
    minuta = "0"+minuta;
  }
  if(sekunda < 10) {
    sekunda = "0"+sekunda;
  }
  var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

  document.querySelector('.timer').innerHTML = dzien + " " + monthNames[d.getMonth()] + " " + rok + ", " + godzina + ":" + minuta + ":" + sekunda;

  setTimeout("zegar()", 1000);
}

var autox = document.querySelector(".link-autox")
autox.addEventListener("click", function() {
	document.querySelector(".page-nav").classList.toggle("autox");
}, false);
var product = document.querySelector(".link-products")
product.addEventListener("click", function() {
  document.querySelector(".page-nav").classList.toggle("products");
}, false);
var hamburger = document.querySelector('.hamburger')
hamburger.addEventListener("click", function() {
  document.querySelector('.page-nav').classList.toggle("is-opened");
}, false);
var close = document.querySelector('.close')
close.addEventListener("click", function() {
  document.querySelector('.page-nav').classList.toggle("is-opened");
}, false);
