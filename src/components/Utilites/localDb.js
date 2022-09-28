//add to cart the id
const addToDb = (id) => {
  let shoppingCart;

  const getCart = JSON.parse(localStorage.getItem("shopping-cart-item"));

  if (getCart) {
    shoppingCart = getCart;
  } else {
    shoppingCart = {};
  }

  let quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] += 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart-item", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  console.log("removing item no", id);
};
export { addToDb, removeFromDb };
