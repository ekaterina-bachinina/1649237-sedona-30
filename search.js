
const search = document.querySelector(".appointment-form");
const btnSearch = document.getElementById("btn-search");

if (search) {
  search.classList.add("appointment-form-close");
}

if (btnSearch) {

  btnSearch.addEventListener("click", function(event) {
    search.classList.toggle("appointment-form-close");
    search.classList.toggle("appointment-form-show ");
  });
}

