//cart
let carticon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');

carticon.onclick  = () =>{
    cart.classList.add("active");
} ;
// close cart    
closecart.onclick  = () =>{
    cart.classList.remove("active");
};


// cart working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

// making function  
function ready(){
    // Remove items From cart
    var removecartbuttons=document.getElementsByClassName('cart-remove');
    console.log(removecartbuttons)
    for (var i = 0; i < removecartbuttons.length; i++){
        var button = removecartbuttons [i]
        button.addEventListener("click", removecartItem);
    } 
    //quantity changes
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs .length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change" , quantitychanged);
    }
    // add to cart
    var addcart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addcart.length; i++){
        var button = addcart[i]
        button.addEventListener('click',addcartclicked);
    }
    // buy button work
    
    documebt.getElementsByClassName("btn-buy")[0]
    document.addEventListener("click",buyButtonclicked);
}
// Buy button
function buyButtonclicked(){
    alert("your order is pleced")
    var cartcontent = document.getElementsByClassName("cart-content")[0]
    while(cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstchild);
    }
    updatetotal();
}

// Remove items From cart
function removecartItem(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.remove();
    updatetotal();
}
//quantity changes
function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
// add to cart 
function addcartclicked(event){
var button = event.target
var shopProducts = button.parentElement
var title = shopProducts.getElementsByClassName("product-title")[0].innerText
var price = shopProducts.getElementsByClassName("price")[0].innerText
var productimg = shopProducts.getElementsByClassName("price")[0].src;
addproductTOcart(title,price ,productimg);
updatetotal();
}
function addproductTOcart(title,price,product){
    var cartshopBox = document.createElement('div');
   cartshopBox.classList.add('cart-box');
   var cartItems = document.getElementsByClassName('cart-content')[0]
   var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
   for (var i = 0; i < cartItemsNames.length; i++){
    alert("you have already add this item to cart ");
    return;
   }
}
var cartboxcontent =`
                  <img src="${productimg}" alt="" class="cart-img">
                  <div class="detail-box">
                     <div class="cart-product-title">${title}</div>
                     <div class="cart-price">${price}</div>
                     <input type="number" value="1" class="cart-quantity">
                  </div>
                  <!-- remove cart -->
                  <i class='bx bxs-trash-alt cart-remove'></i>`
cartshopBox.innerHTML = cartboxcontent
cartItems.append(cartshopBox)
cartshopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click',removecartItem);
cartshopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change',quantitychanged);


// update total 
function updatetotal(){
    var cartcontent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartcontent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartbox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""))
        var quantity = quantityElement.value
        total = total + (price * quantity);
    }
        //if price contain some cents value
        total = math.round(total *100) /100;
        
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    
}