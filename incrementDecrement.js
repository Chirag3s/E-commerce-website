import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartToatal } from "./updateCartToatal";



export const incrementDecrement = (e, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const prodQuantity = currentCardElement.querySelector(".prouctQuantity");
  const prodPrice = currentCardElement.querySelector(".productPrice");

  let productQuantity = 1;
  let productprice = 0;

  //   ----------------------------------------
  //   Get the data from localStorage
  //   ----------------------------------------
  let localCartProducts = getCartProductFromLS();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    productQuantity = existingProd.productQuantity;
    productprice = existingProd.productprice;
  } else {
    productprice = price;
  }

  if (e.target.className === "cartIncrement") {
    if (productQuantity < stock) {
      productQuantity += 1;
    } else if (productQuantity === stock) {
      productQuantity = stock;
      productprice = price;
    }
  }

  if (e.target.className === "cartDecrement") {
    if (productQuantity > 1) {
      productQuantity--;
    }
  }

  // update the price in localStorage
  productprice = Number(productprice * productQuantity);
  productprice = Number(productprice.toFixed(2));

  let updatedCart = { id, productQuantity, productprice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  //   also we need to reflect the changes on the screen too
  prodQuantity.innerText = productQuantity;
  prodPrice.innerText = `₹ ${productprice}`;


  updateCartToatal();
};