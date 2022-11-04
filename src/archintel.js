window.onload = function(){navMarginLeft()};
const navId = document.getElementById('navId');
const navbarId = document.getElementById('navbarId');

var navWidth = navId.style.width;
var navbarWidth = navbarId.style.width;

export function navMarginLeft(){
    navId.style.marginLeft = navbarWidth - navWidth;
}