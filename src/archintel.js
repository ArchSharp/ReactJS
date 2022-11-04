// window.onscroll = function () {
//   myFunction();
// };
// window.onload = function () {
//   navMarginLeft();
// };
// const navId = document.getElementById("navId");
const navbarId = document.getElementById("navbarId");

// var navWidth = navId.style.width;
// var navbarWidth = navbarId.style.width;

// function navMarginLeft() {
//   navId.style.marginLeft = navbarWidth - navWidth;
// }

// export { navMarginLeft };

var sticky = navbarId.offsetTop;
export function myFunction() {
  alert("God is good");
  if (window.pageYOffset >= sticky + 10) {
    navbarId.style.backgroundColor = "darkmagenta";
  } else if (window.pageYOffset < sticky + 10) {
    navbarId.style.backgroundColor = "";
  }
}
