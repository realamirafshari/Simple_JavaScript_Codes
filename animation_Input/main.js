const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector("input");
const closeSearchBtn = document.querySelector(".close-btn");
const textAlert = document.querySelector(".text-alert");
const searchData = document.querySelector(".search-data");
console.log(searchData);
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  closeSearchBtn.classList.add("active");
  searchData.classList.remove("active");
  if (searchInput.value !== "") {
    searchData.innerHTML = `You searched : ${searchInput.value}`;
  } else {
    searchData.innerHTML = "";
  }
});

closeSearchBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  closeSearchBtn.classList.remove("active");
  searchData.innerHTML = "";
  searchInput.value = "";
});
