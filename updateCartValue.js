const cartValue = document.querySelector('.cart');

export const updateCartValue=(cartProduct)=>
{
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping "></i> ${cartProduct.length}</button>`);
};