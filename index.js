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

function showSkills() {
  var skills = [
    {
      name: "HTML",
      endorsements: 5,
    },
    {
      name: "CSS",
      endorsements: 1,
    },
    {
      name: "JS",
      endorsements: 2,
    },
  ];
  var html = skills.map(function (skill) {
    return `<li>${skill.name} - <span class="endorsements">${skill.endorsements}</span></li>`;
  });

  var container = document.querySelector("#skills ul");
  container.innerHTML = html.join("");
}

showSkills();
