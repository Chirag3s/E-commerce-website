export const homeQuantityToggle=(e,id,stock)=>{
    const currcardelement = document.querySelector(`#card${id}`);
    const productQuantity = currcardelement.querySelector(".prouctQuantity");

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;
    

    if(e.target.className === 'cartIncrement')
    {
        if(quantity<stock)
        {
            quantity++;
        }
        else if(quantity === stock)
        {
            quantity = stock;
        }
    }

    if(e.target.className === 'cartDecrement')
    {
        if(quantity>1)
        {
            quantity--;
        }
        else if(quantity === stock)
        {
            quantity=stock;
        }
    }
    productQuantity.textContent = quantity;
    productQuantity.setAttribute('data-quantity',quantity);
    return quantity;
};