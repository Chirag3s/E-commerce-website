import { getCartProductFromLS } from "./getCartProductFromLS"

export const updateCartToatal=()=>{

    let productSubToatl = document.querySelector(".sbcount");
    let FinalCount = document.querySelector(".fncount");

    let localCartProducts = getCartProductFromLS();
    let initalValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum,curele)=>{
        let productPrice = parseInt(curele.productprice)|| 0;
        return accum + productPrice;
    },initalValue)
    
    productSubToatl.textContent = `₹ ${totalProductPrice}`;
    FinalCount.textContent = `₹ ${totalProductPrice+50}`
}