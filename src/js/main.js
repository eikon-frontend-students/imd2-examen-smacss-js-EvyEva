// Toutes les var

var title = document.querySelector(".l-banner");
var product1 = document.querySelector(".product");
var product2 = document.querySelector(".product");
var product3 = document.querySelector(".product");

// Heading

function headingChangeColor() {
  title.classList.toggle("title-is-yellow");
}

title.addEventListener("click", headingChangeColor);

// product1

function productRed() {
  product1.classList.toggle("product-is-red");
}

product1.addEventListener("click", productRed);
