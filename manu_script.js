window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.4)";
  }

});


window.addEventListener("load", function () {

  alert("Welcome to Rogue Force Motors---BY INFOSPHERE GROUP!");

});


const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

  button.addEventListener("click", function() {

    console.log("Button Clicked");

  });

});