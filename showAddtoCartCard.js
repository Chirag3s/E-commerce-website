
import products from "./api/products.json";
import { fetchqnp } from "./fetchqnp";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";



import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartToatal } from "./updateCartToatal";





let cartProducts = getCartProductFromLS();
// console.log(cartProducts)

let fliterProducts = products.filter((curprod)=>{
   return cartProducts.some((curele)=>curele.id === curprod.id);
});

// const price =(cartProducts.filter((curele)=>{
//     // console.log(curele.productprice);
// }))

const cardloder = document.querySelector("#cart-cont");
const cartTemplate = document.querySelector("#ct");

const showCartProduct=()=>{
    fliterProducts.forEach((curProd)=>{
        const {id , name , category,image,price,stock } = curProd;

        let productClone = document.importNode(cartTemplate.content,true);
        
        
        productClone.querySelector('.productname').textContent = name;
        productClone.querySelector('.productimage').src=image;
        productClone.querySelector('.productimage').alt=image;
        productClone.querySelector('.category').textContent=category;

        productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);


        // getting updated price and quantity from local storage
        const lsactualdata =  fetchqnp(id,price);

        productClone.querySelector('.productPrice').textContent=` ₹ ${lsactualdata.price}`;
        productClone.querySelector('.prouctQuantity').textContent=lsactualdata.quantity;

        // remove button code
        productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>{
            removeProductFromCart(id);
        });

        // product quantity toogle in cart page
        productClone.querySelector(".cartIncrement").addEventListener('click',(e)=>{
            e.preventDefault()
            incrementDecrement(e,id,price,stock);
        })

        cardloder.append(productClone);

    });
}


// show cart product
showCartProduct();

updateCartToatal();