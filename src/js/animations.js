let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector(".mobile-only").style.top = "0";
  } else {
    document.querySelector(".mobile-only").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}