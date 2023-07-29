// ----------------- Add to Cart -----------------//
const btn= document.querySelectorAll("#button")

btn.forEach(function(button, index){
    button.addEventListener("click", function(event){
        var btnItem= event.target
        var product= btnItem.parentElement
        var itemImg= product.querySelector("img").src
        var itemName= product.querySelector("h1").innerText
        var itemPrice= product.querySelector("#price").innerHTML
        addcart(itemImg,itemName,itemPrice)
        

    })
})


function addcart(itemImg, itemName, itemPrice) {
    var addtr= document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for( i=0; i<cartItem.length; i++){
        var productName = document.querySelectorAll("#name")
        if(productName[i].innerHTML == itemName){
            alert("Sản phấm đã được thêm ( Tăng giảm số lượng trong giỏ hàng !)")
            return
        }
    }

    var trcontent= ' <tr><td style="display: flex; align-items: center;font-size: 20px;"><img style=" width: 100px;text-align: left;" src="'+itemImg+'" ><span id="name">'+itemName+'</span</td><td><input style="width: 50px; outline: none;" type="number" value="1" min="1" id="input"></td><td><p style="display: inline; font-size: 20px;margin-left: 10px;"> <span id="price">'+itemPrice+'</span></p></td><td style="cursor: pointer;" id="delete"><button>Xóa</button></td></tr>'
    addtr.innerHTML= trcontent
    var cartTable= document.querySelector("tbody")
    cartTable.append(addtr)
    cartIotal()
    deleteProduct()
    inputChange()

 }


// // ----------------- Calculate Total Price -----------------//
function cartIotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    let TotalA = 0
    for( i=0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("#input").value
        var productPrice = cartItem[i].querySelector("#price").innerHTML
        let value = parseInt(inputValue)
        let price = parseInt(productPrice)
        // console.log( inputValue, productPrice)
        TotalB = value*price*1000
        TotalA = TotalA + TotalB
        // console.log(TotalB)
        
    }

    var tst = document.querySelector("#TST #TongTien")
    tst.innerHTML = TotalA
    console.log(tst)
    

}


// ----------------- Delete Product -----------------//
function deleteProduct(){
    var cartItem = document.querySelectorAll(" tbody tr")
    for( i=0; i<cartItem.length; i++){
        var deleteItem = document.querySelectorAll("#delete")
        deleteItem[i].addEventListener("click", function(event){
            var XSP = event.target
            var XSP2 = XSP.parentElement.parentElement
            XSP2.remove()
            cartIotal()
        })
    }
}


//-----------------Increase money according to the number of inputs -----------------//
function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for( i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("#input")
        inputValue.addEventListener("change", function(){
            cartIotal()
        })
    } 
}


var cartShopping = document.querySelector(".cart-shopping")
var Xicon = document.querySelector(".xicon")

cartShopping.addEventListener("click", function(){
    document.querySelector(".section2").style.right = "0"
})

Xicon.addEventListener("click", function(){
    document.querySelector(".section2").style.right = "-100%"
})