import { getCartProductFromLS } from "./getCartProductFromLS"
import { showTost } from "./showTost";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart=(id)=>{
    let cartProducts = getCartProductFromLS();

    cartProducts=cartProducts.filter( (curProd)=> curProd.id !== id);

        // upadting to the local storage
        localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

        // code to remove it from the ui without refreshing it
        let removeDiv = document.getElementById(`card${id}`);

        if(removeDiv)
        {
            removeDiv.remove();
            showTost("delete",id);
        }
        updateCartValue(cartProducts);
    
}