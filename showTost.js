export const showTost=(operation,id)=>
{
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation==="add")
    {
        toast.textContent = `Product of id ${id} is added to cart.`;
    }
    else{
        toast.textContent = `Product of id ${id} is removed from cart.`;
    }

    document.body.append(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);

}