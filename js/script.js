let isSideOpen = false;
let currentPage = "home";
//Possible values: home | about | activity | trade | contact

setItemByName(currentPage, true);

function setItemByName(name, isSelected) {
  let item = getItemByName(name);

  if (isSelected) item.style.backgroundColor = "red";
  else item.style.removeProperty("background-color");
}

function changeCurrentPage(page) {
  setItemByName(currentPage, false);
  currentPage = page;
  setItemByName(currentPage, true);
}

function openSideMenu() {
  let sideNav = document.getElementById("side-nav");

  if (isSideOpen) sideNav.style.visibility = "hidden";
  else sideNav.style.visibility = "visible";

  isSideOpen = !isSideOpen;
}

function getCurrentItem() {
  return document.getElementById(currentPage + "-item");
}

function getItemByName(name) {
  return document.getElementById(name + "-item");
}
