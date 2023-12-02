const cart = document.getElementById("cart")
const orderNumber=document.getElementById("orderNumber")
const plus=document.querySelector(".plus")
const ckeck=document.querySelector(".ckeck")
const displayi=document.querySelector(".display-i")
const noItem= document.querySelector(".noitem")
const totalprice=document.getElementById("totalprice")
const minus =document.querySelector(".minus")
const display =document.querySelector(".display")
const addtoCart=document.querySelector(".addt")
const cartNumber =document.querySelector(".cart-number")

const dollar =document.querySelector(".dollar")
// add and minus functionality 
minus.addEventListener("click",()=>{
    let order = Number (orderNumber.innerHTML)
    if (order > 0) {
        order=order - 1
        orderNumber.innerHTML = order
        console.log(order)
    }
})

plus.addEventListener("click", function () {
    let order = Number (orderNumber.innerHTML)
        order=order+1
        
        orderNumber.innerHTML= order
    
})
// end and minus functionality 

// display bord 
//click cart icon then display appear
cart.addEventListener("click", function () {
    display.style.display = "block"
    const cartN= Number(cartNumber.innerHTML)

    console.log(cartN===0)

  if (cartN=== 0) {
    displayi.style.display="none"
    ckeck.style.display="none"

  } else {
    noItem.style.display="none"
    displayi.style.display="block"
    ckeck.style.display="block"   
 }
})


//click outside of the car elemt disappear display
document.addEventListener('click', function(event) {
  var isClickInsideElement = cart.contains(event.target);
  
  if (!isClickInsideElement) {
    display.style.display = 'none';
  }
});


// click add cart functionality

addtoCart.addEventListener('click',()=>{
    let order = Number(orderNumber.innerHTML)
    if (order===0) {
        console.log("nothing to add oder please")
    } else {
        cartNumber.innerHTML=order
        cartNumber.style.display="block"
        console.log(totalprice)
        dollar.innerHTML= order
        totalprice.innerHTML = `$${order*125.00}`
    }

})

// content to be displayed in display
noItem.addEventListener("click",()=>{
    console.log(noItem)
})

/* ------ image flexsiblity -------*/

// click small image display in the large imag 

// first display none for all big pictures

let bigImages = document.getElementsByClassName("big-image")
let fixedBigImages = document.getElementsByClassName("fixed-big-image")

for (let i = 0; i < bigImages.length; i++) {
  bigImages[i].style.display= "none"
  fixedBigImages[i].style.width ="0"

}

bigImages[0].style.display="block"
fixedBigImages[0].style.width="70%"
console.log(fixedBigImages[0])
function showImage(n) {
  for (let i = 0; i < bigImages.length; i++) {
    bigImages[i].style.display= "none"
    fixedBigImages[i].style.width="0"
  }
  bigImages[n].style.display="block"
  fixedBigImages[n].style.width="70%"
}

// hide and display
let fixed= document.querySelector(".fixed")
fixed.style.display = "none"
function hidandshow() {

  if (fixed.style.display =="block") {
      fixed.style.display = "none"
  } else {
    fixed.style.display="block"
  }
}
// display big image when clicked with background  transparent black

// slid click arrow

function slide() {
   
}




