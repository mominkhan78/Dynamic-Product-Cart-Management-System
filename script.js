// I have to create arrays for products and Popular Products

var products = [
    {name:"Brown Female Outfit",para: "Cool Vibes", price: "14,999", image: "./img/fashion-lady-holding-shopping-bags-copy-space-brick-wall.jpg"},
    {name:"3 Piece Suit for Men",para: "Look Like Professional", price: "17,999", image: "./img/handsome-man-suit.jpg"},
    {name:"Children Colection",para: "Make your Children Stylish", price: "11,999", image: "./img/group-girls-dressed-halloween-costumes-studio.jpg"},
    {name:"Blue Jacket",para: "Cool Vibes", price: "14,999", image: "./img/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-jacket-fashion-male-isolated-white-wall-studio.jpg"},
    {name:"White Upper with Brown Hat",para: "Look Like Professional", price: "17,999", image: "./img/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated.jpg"},
    {name:"Black Suit",para: "Make your Children Stylish", price: "11,999", image: "./img/young-handsome-businessman-black-shirt-black-suit.jpg"},
];

var popular = [
    {name:"",para: "", price: "", image: ""},
    {name:"",para: "", price: "", image: ""},
    {name:"",para: "", price: "", image: ""},
];

// I have to show that arrays content on the positions
function addingProducts(){
    var clutter = "";
    products.forEach(function(product, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover" src= "${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.para}</h3>
                    <h4 class="font-semibold mt-2">Rs.${product.price}</h4>
                </div>
                <button data-index = "${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index = "${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    })
    document.querySelector(".products").innerHTML = clutter;
}


function addingPopularProducts(){
    var clutter = "";
    products.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.para}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">Rs.${product.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;
}





// Cart addition
var cart = [];
function addToCart(){
    var product = document.querySelector(".products");
    product.addEventListener('click',function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]);
        }
    })
}


function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        if(document.querySelector(".cartexpnd").style.display === "block"){
            document.querySelector(".cartexpnd").style.display = "none";
        }
        else{
            document.querySelector(".cartexpnd").style.display = "block";

            var clutter = "";;
            cart.forEach(function(product){
                clutter += `<div class="flex gap-2 bg-white p-2 rounder-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                    <img class="w-full h-full rounded-lg object-cover" src="${product.image}">
                </div>
                <div>
                    <h3 class="font-semibold">${product.name}</h3>
                    <h5 class="text-sm font-semibold opicity-80">Rs.${product.price}</h5>
                </div>
            </div>`;
            })
            document.querySelector(".cartexpnd").innerHTML = clutter;
        }
        
    })
}





showCart();
addToCart();
addingProducts();
addingPopularProducts();