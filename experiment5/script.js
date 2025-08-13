const productsElement = document.querySelector("#products");
const categorySelect = document.querySelector("#category");

const products = [
  { id: 1, name: "Jeans", category: "clothing" },
  { id: 2, name: "Book", category: "books" },
  { id: 3, name: "Laptop", category: "electronics" },
  { id: 4, name: "Shoes", category: "clothing" },
  { id: 5, name: "Mobile", category: "electronics" },
  { id: 6, name: "Novel", category: "books" },
];

function filter(category) {
  if (category === "all") {
    return products;
  } else {
    return products.filter((value) => {
      return value.category === category;
    });
  }
}

categorySelect.addEventListener("change", () => {
  const filteredProducts = filter(categorySelect.value);

  const data = filteredProducts.map((value) => {
    return `<div class="product">${value.name}</div>`;
  });

  productsElement.innerHTML = data.join("");
});

const filteredProducts = filter("all");

const data = filteredProducts.map((value) => {
  return `<div class="product">${value.name}</div>`;
});

productsElement.innerHTML = data.join("");
