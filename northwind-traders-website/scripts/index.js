let categoryUrl = "http://localhost:3000/categories"
//   http://localhost:3000/products

document.addEventListener("DOMContentLoaded", () => {
populateSearchDropdown()

  });
  
  async function populateSearchDropdown () {
    let categories = document.getElementById("categorySelect")

    const response = await fetch(categoryUrl)
    const data = await response.json();
    data.forEach((category) =>{
        const option = new Option(category.name)
        categories.appendChild(option)
    })
  }
