let register = document.querySelector("#register")
register.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById('email')
    let pw = document.getElementById("password")

    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Vui lòng nhập email và mật khẩu của bạn")
    }
        else if (email.value.trim().length == 0) {
        alert("Vui lòng nhập email của bạn")
    }
        else if (pw.value.trim().length == 0) {
        alert("Vui lòng nhập mật khẩu của bạn")
    }
        else if (pw.value.trim().length < 8) {
        alert("Mật khẩu cần dài ít nhất 8 ký tự")
    }  
        else if (!pw.value.trim().match(lowerCaseLetter)) {
            alert("Mật khẩu phải chứa một chữ thường")
    }
        else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Mật khẩu phải bao gồm một kí tự in hoa")
    }
        else if (!pw.value.trim().match(numbers)) {
        alert("Mật khẩu phải chứa số")
    }
        else {
            
            if(localStorage.users) {
                    let users = JSON.parse(localStorage.users)
                users.push({
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                
                localStorage.setItem("users", JSON.stringify(users))
            } 
            else {
                localStorage.setItem("users",JSON.stringify(
                [
                    {
                      email: email.value.trim(),
                      pw: pw.value.trim()
                    }
                ]));
            }
            location.replace("../Summer-Vacation/file-html/Sign_In.html")
    }

})