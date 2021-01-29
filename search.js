const header = document.querySelector("header"),
  searchForm = header.querySelector("form"),
  button = searchForm.querySelector("button");

const SEARCH_CN = "js-searchForm search";

function handleClick() {
  const search = document.getElementsByClassName("js-searchForm")[0].className;
  console.log(search);
  // search 있을때
  if (search === SEARCH_CN) {
    const getInput = document.getElementById("searchInput");
    const getSpan = document.getElementById("searchSpan");

    searchForm.classList.remove("search");
    searchForm.removeChild(getInput);
    searchForm.removeChild(getSpan);
  } else {
    const input = document.createElement("input");
    const span = document.createElement("span");
    // 없을때
    searchForm.appendChild(input).id = "searchInput";
    searchForm.appendChild(span).id = "searchSpan";
    searchForm.classList.add("search");
  }
}

function getSearchInput() {
  button.addEventListener("click", handleClick);
}

function init() {
  getSearchInput();
}

init();
