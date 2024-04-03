import { getCartProductFromLS } from "./getCartProductFromLS";
import { showTost } from "./showTost";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();

export const addToCart = (e,id,stock)=>
{

    let arrayLocalStorageProduct = getCartProductFromLS();

    const currentProductElement = document.querySelector(`#card${id}`);
    let productQuantity = currentProductElement.querySelector(".prouctQuantity").textContent;
    let productprice = currentProductElement.querySelector(".productPrice").textContent;

    // updating price  ie removing ruppee symbol and multplying it with quantity
    productprice = productprice.replace("₹","");


    let existingProd =arrayLocalStorageProduct.find((curProd)=>curProd.id===id);

    if(existingProd && productQuantity > 1){
        productQuantity = Number(existingProd.productQuantity) +Number (productQuantity);
        productprice = Number(productprice*productQuantity);  
        
        let Updatedcart = {id,productQuantity,productprice};
        Updatedcart=arrayLocalStorageProduct.map((curprod)=>{
            return curprod.id === id ? Updatedcart : curprod;
        })
        localStorage.setItem('cartProductLS',JSON.stringify(Updatedcart));

    }

    if(existingProd)
    {
        return false;
    }

    productprice = Number(productprice*productQuantity);
    productQuantity = Number(productQuantity)

    arrayLocalStorageProduct.push({id,productQuantity,productprice});
    localStorage.setItem('cartProductLS',JSON.stringify(arrayLocalStorageProduct));

    // update the cart button value

    updateCartValue(arrayLocalStorageProduct);

    // toast notification
    showTost("add",id);
};