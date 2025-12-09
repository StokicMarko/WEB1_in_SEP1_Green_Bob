let isSideOpen = false;

function detectCurrentPage() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  const page = file.replace(".html", "");

  if (page === "index") return "home";
  if (page === "greenactivites") return "activity";
  if (page === "tradeoffers") return "trade";

  return page;
}


let currentPage = detectCurrentPage();
setItemByName(currentPage, true);

function setItemByName(name, isSelected) {
  const item = getItemByName(name);
  if (!item) return;

  if (isSelected) item.style.backgroundColor = "#A1BC98";
  else item.style.removeProperty("background-color");
}

function changeCurrentPage(page, url) {
  setItemByName(currentPage, false);

  currentPage = page;
  setItemByName(currentPage, true);

  if (url && url.length > 0) {
    window.location.href = url;
  }
}

function openSideMenu() {
  const sideNav = document.getElementById("side-nav");
  const overlay = document.getElementById("overlay");

  sideNav.classList.add("open");
  overlay.classList.add("visible");
  isSideOpen = true;
}

function closeSideMenu() {
  const sideNav = document.getElementById("side-nav");
  const overlay = document.getElementById("overlay");

  sideNav.classList.remove("open");
  overlay.classList.remove("visible");
  isSideOpen = false;
}

function toggleSideMenu() {
  isSideOpen ? closeSideMenu() : openSideMenu();
}

function getItemByName(name) {
  return document.getElementById(name + "-item");
}
