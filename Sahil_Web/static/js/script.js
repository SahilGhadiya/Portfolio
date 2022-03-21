const res = require("express/lib/response");

// // Add active class to the current button in menu (highlight it)
var header = document.getElementById("navigation-curr");
var btns = header.getElementsByClassName("home-curr");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("current");
  current[0].className = current[0].className.replace(" current", "");
  this.className += " current";
  });
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add active class to the current button in work section (highlight it)
var header = document.getElementById("work-sec-curr");
var workclick = header.getElementsByClassName("work-curr");
for (var i = 0; i < workclick.length; i++) {
  workclick[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
