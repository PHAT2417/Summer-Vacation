let login = document.getElementById('login')
login.addEventListener("submit", (e) => {  // them event submit (e) bat dau 1 event
    e.preventDefault()   // ngan ko cho event do chay va doi xu ly                   

    let users = JSON.parse(localStorage.users) // nhan du lieu duoi dang chuoi

    let email = document.getElementById("email")
    let pw = document.getElementById("password");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim()) // phuong thuc map() tuong tu nhu vong for 

    if (check[0] == true){
        window.location.href = "../Summer-Vacation/file-html/HomePage.html"
    } else {
        alert("Vui lòng nhập lại!")
    }
})