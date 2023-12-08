let categoryUrl = "http://localhost:3000/categories";
//   http://localhost:3000/products

document.addEventListener("DOMContentLoaded", () => {
  populateSearchDropdown();

  let dropdown = document.getElementById("searchDropdown");

  dropdown.addEventListener("change", () => {
    let dropdownValue = dropdown.value;

    if (dropdownValue === "View all") {
      displayAllProducts();
    }
  });
});
async function populateSearchDropdown() {
  let categories = document.getElementById("categorySelect");

  const response = await fetch(categoryUrl);
  const data = await response.json();
  data.forEach((category) => {
    const option = new Option(category.name);
    categories.appendChild(option);
  });
}

async function displayAllProducts() {
  console.log("this works");
}
