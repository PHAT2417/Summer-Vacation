console.log("hello")

// let arr = ["Phong", "Tuong", "Phuc", "Dat"]

// let student = {
//     name: "Phong",
//     age: 14,
//     gender: "male",
//     class: "JSA08"
// }

// console.log("For in arr")
// for (let i in arr) { // i = index of each element
//     console.log(arr[i])
// }

// console.log("For of arr")
// for (let i of arr) { // i = value of each element
//     console.log(i)
// }

// console.log("For in obj")
// for (let i in student) { // i = key of obj
//     console.log(student[i])
// }

// // iterable trong javascript: dùng được vòng for of
// console.log("For of obj")
// for (let i of student) {
//     console.log(i)
// }

// let product_div = document.getElementById("product-area")
// let h1 = document.createElement("h1")
// h1.innerText = "Hello World"
// h1.style.color = "brown"
// product_div.appendChild(h1)

let data = [
    {
        productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
        price: "35",
        image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
    },

    {
        productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
        price: "34",
        image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
    },

    {
        productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
        price: "35",
        image: "https://product.hstatic.net/1000378196/product/z3466712209076_ae4321ce93b91a2070108a17a0654259__1__7f92c24d6bf748b5b765d90067d3377e_master.jpg"
    },

    {
        productName: "LEVENTS® TRAVEL TEE/ BLACK",
        price: "22",
        image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
    },

    {
        productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
        price: "38",
        image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
    },

    {
        productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
        price: "42",
        image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
    },

    {
        productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
        price: "37",
        image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
    },

    {
        productName: "LEVENTS® EARTH TEE/ PURPLE",
        price: "36",
        image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
    },

    {
        productName: "LEVENTS® PLAY LOGO TEE/ PINK",
        price: "29",
        image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
    },
]

let product_area = document.getElementById("product-area")

function loadProducts() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        let output = `
            <div class="product">
                <h2 class="product-title">${data[i].productName}</h2>
                <img src="${data[i].image}" alt="" class="product-img">
                <div class="product-bottom">
                    <h3 class="product-price">${data[i].price}</h3>
                    <button class="add-to-cart">Buy</button>
                </div>
            </div>`
        product_area.innerHTML += output
    }
}

loadProducts();

function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    search_input = search_input.toUpperCase()
    let products_title = document.getElementsByClassName("product-title")
    let products = document.getElementsByClassName("product")
    
    for(i = 0; i < products_title.length; i++) {
        // nếu chữ trong search input không nằm trong product title thì ẩn product đi
        if(!products_title[i].innerHTML.includes(search_input)) {
            products[i].classList.add("hide")
        } else {
            products[i].classList.remove("hide")
        }
    }
}