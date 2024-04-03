import { getCartProductFromLS } from "./getCartProductFromLS"


export const  fetchqnp=(id,price)=>
{
    let cartProduct = getCartProductFromLS();

    let existingProduct = cartProduct.find((curProd)=>curProd.id===id);
    let quantity = 1;

    if(existingProduct)
    {
        quantity = existingProduct.productQuantity;
        price  = existingProduct.productprice;
    }

    return {quantity,price};

}