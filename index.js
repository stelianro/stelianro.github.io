var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function hidePage(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  document.getElementById(id).style.display = "block";
}

function showHome() {
  showPage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showSkills() {
  showPage("skills");
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
}

function showProjects() {
  showPage("projects");
  hidePage("home");
  hidePage("skills");
  hidePage("languages");
}

function showLanguages() {
  showPage("languages");
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
}
