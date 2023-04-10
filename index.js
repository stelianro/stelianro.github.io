var activePage = "skills";

showPage(activePage);

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
  var link = document.querySelector(
    `#top-menu-bar a[data-page="${activePage}"]`
  );
  link.classList.remove("active");
}

function showPage(id) {
  hideAllPages();
  show(id);
  var link = document.querySelector(`#top-menu-bar a[data-page="${id}"]`);
  link.classList.add("active");
  activePage = id;
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});

function showSkills(skills) {
  skills.sort(function (a, b) {
    return b.endorsements - a.endorsements;
  });
  var html = skills.map(function (skill) {
    var cls = skill.endorsements > 5 ? "important" : "";
    return `<li class="${cls}">
      ${
        skill.name
      } ${skill.endorsements < 2 ? "" : `- <span class="endorcements">${skill.endorsements}</span>`}
    </li>`;
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
