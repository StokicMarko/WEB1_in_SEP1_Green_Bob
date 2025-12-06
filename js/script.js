let isSideOpen = false;

let currentPage = localStorage.getItem("currentPage") || "home";

setItemByName(currentPage, true);

function setItemByName(name, isSelected) {
  const item = getItemByName(name);

  if (!item) return;
      
  if (isSelected) item.style.backgroundColor = "red";
  else item.style.removeProperty("background-color");
}

function changeCurrentPage(page, url) {
  setItemByName(currentPage, false);

  currentPage = page;
  localStorage.setItem("currentPage", page);

  setItemByName(currentPage, true);

  if (url && url.length > 0) {
    window.location.href = url;
  }
}

function openSideMenu() {
  const sideNav = document.getElementById("side-nav");

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
