import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#pro-cont");
const productTemplate = document.querySelector("#pt");
const productCounter = document.querySelector(".prouctQuantity");
const productIncrement = document.querySelector(".cartIncrement");
const productDecrement = document.querySelector(".cartDecrement");

export const showProductContainer=(products)=>{
    if(!products)
    {
        return false;
    }

    products.forEach((curProd)=>{
        const { id , name , category,description,brand,image,price,stock }=curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('.productname').textContent = name;
        productClone.querySelector('.productimage').src=image;
        productClone.querySelector('.productimage').alt=image;
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.pdesicription').textContent=description;
        productClone.querySelector('.productPrice').textContent=` ₹ ${price}`;
        productClone.querySelector('.productActualPrice').textContent=` ₹ ${1.5*price}`;
        productClone.querySelector('.productStock').textContent=stock;
        productClone.querySelector('.pdesicription').textContent=description;


        // increment and decrement
        productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);

        productClone.querySelector('.StockElement').addEventListener('click',(e)=>{
            homeQuantityToggle(e,id,stock);
        });

        // add to cart
        productClone.querySelector(".add-to-cart-button").addEventListener('click',(e)=>{
            addToCart(e,id,stock);
        })

        productContainer.append(productClone);
    });

};