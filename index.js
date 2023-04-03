var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function hidePage(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showHome() {
  hideAllPage();
  showPage("home");
}

function showSkills() {
  hideAllPage();
  showPage("skills");
}

function showProjects() {
  hideAllPage();
  showPage("projects");
}

function showLanguages() {
  hideAllPage();
  showPage("languages");
}
