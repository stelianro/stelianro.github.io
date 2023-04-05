var activePage = "skills";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});

function showSkills(skills) {
  var html = skills.map(function (skill) {
    return `<li>${skill.name} - <span class="endorsements">${skill.endorsements}</span></li>`;
  });

  var container = document.querySelector("#skills ul");
  container.innerHTML = html.join("");
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (skills) {
      console.warn("skills", skills);
      showSkills(skills);
    });
}

loadSkills();
//TODO loadLanguages();
