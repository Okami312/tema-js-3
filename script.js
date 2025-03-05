// Exercises

// 1. Display in the console the ID of all the products containing the word "slim" either in the title or in the description.
for (let i = 1; i < products.length; i++) {
  if (products[i].category === "slim") {
  }
  // console.log(products[i].title);
}

// 2. Display in the console all the products in the clothes area (you will coordinate after the 2 categories - "Women's Clothing" and "Men's Clothing").
for (let i = 0; i < products.length; i++) {
  if (
    products[i].category === "Women's Clothing" &&
    products[i].category === "Men's Clothing"
  ) {
    // console.log(products[i].category);
  }
}

// 3. Display in the console the most expensive item in "electronics" category.
let expensiveProduct = products[0].price;

for (let i = 0; i < products.length; i++) {
  if (
    products[i].price > expensiveProduct &&
    products[i].category === "electronics"
  ) {
    // console.log(
    //   "The most expensive product in electronics category is ${expensiveProduct}."
    // );
  }
}

// 4. Display in the console the most cheapest product in "Women's Clothing".
let cheapestProductInWomanClothing = products[0].price;

for (let i = 0; i < products.length; i++) {
  if (
    products[i].price < cheapestProductInWomanClothing &&
    products[i].category === "Women's Clothing"
  ) {
    // console.log(
    //   "The most cheap product in Women Clothing category is ${cheapestProductInWomanClothing}."
    // );
  }
}

// 5. Display in the console the product with the biggest rating score in "electronics" category.
let biggestRatingScore = products[0].rating;

for (let i = 0; i < products.length; i++) {
  if (
    products[i].rating < biggestRatingScore &&
    products[i].category === "electronics"
  ) {
    // console.log(
    //   "The biggest rating score product in electronics category is ${biggestRatingScore}"
    // );
  }
}

// 6. Display in the console the product with the highest rating: "The most popular product is x and it rated of y out of 5 by z reviewers".
let yRatedPlace = products[0].rating.count;
let xReviewers = products[0].rating.rate;
let mostPopularProduct = products[0].title;

for (let i = 0; i < products.length; i++) {
  if (products[i].rating > mostPopularProduct) {
    xmostPopularProduct = products[i].title;
    yRatedPlace = products[i].count;
    zReviewers = products[i].rate;
  }
}

// console.log(
//   "The most popular product is ${mostPopularProduct} and it rated of ${yRatedPlace} out of 5 by ${xReviewers} reviewers"
// );
