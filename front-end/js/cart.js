var cartList = [];
var cart = document.getElementById("cart");

function toast(id, operation) {
    var toast = document.getElementById("toast");
    let name = document.getElementById(id).getElementsByTagName("h3")[0].innerHTML;

    if (operation == "add")
        toast.innerHTML = name + " added to cart!";
    if (operation == "remove")
        toast.innerHTML = name + " removed from cart!";

    toast.classList.remove("fade-in-out");
    // Delay necessary for CSS to update
    window.setTimeout(function() {toast.classList.add("fade-in-out")}, 50);
}

function toggleCartView() {
    cart.classList.toggle("show");
}

function addToCart(id) {
    cartList.push(id);
    toast(id, "add");
    updateCartList();
}

function removeFromCart(id) {
    let i = cartList.indexOf(id);
    if (i > -1)
        cartList.splice(i, 1);
    
    toast(id, "remove");
    updateCartList();
}

function updateCartList() {
    cart.innerHTML = "";
    for (let i = 0; i < cartList.length; i++) {
        let currentItem = document.getElementById(cartList[i]);
        cart.insertAdjacentHTML("beforeend", cartItem(currentItem));
    }
}

function cartItem(item) {
    let name  = item.getElementsByTagName("h3")[0].innerHTML;
    let image = item.getElementsByTagName("img").item(0).src;

    return `
        <div id="${item.id}" class="cart-item">
            <h4>${name}</h4 class="cart-name">
            <img src=${image} class="cart-image">
            <button onClick="removeFromCart(this.parentNode.id)">x</button>
        </div>
        `
}
