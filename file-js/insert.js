
const firebaseConfig = {
  apiKey: "AIzaSyDlcO3S1H_E6iqOlSCcnaHMmXF9_Nnf224",
  authDomain: "upload-ba2cd.firebaseapp.com",
  databaseURL: "https://upload-ba2cd-default-rtdb.firebaseio.com",
  projectId: "upload-ba2cd",
  storageBucket: "upload-ba2cd.appspot.com",
  messagingSenderId: "1072083911484",
  appId: "1:1072083911484:web:de519cf0f9d8912bf09439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

       // Lắng nghe sự kiện submit form
document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn form submit lại theo cách thông thường

    var files = document.getElementById("image").files; // Lấy danh sách file ảnh từ input
    var title = document.getElementById("title").value; // Lấy tiêu đề từ input
    if (files.length > 0 && title) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var storageRef = firebase.storage().ref().child('/product/' + file.name);

            // Tải lên file lên Firebase Storage
            var uploadTask = storageRef.put(file);

            // Lắng nghe sự kiện thay đổi tiến trình cho từng file
            uploadTask.on("state_changed", function(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById("progress").innerHTML = "Tiến trình: " + progress + "%";
            }, function(error) {
                console.log("Lỗi tải lên ảnh: " + error);
            }, function() {
                // Tải lên thành công, lấy URL của file đã tải lên
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log("Đường dẫn ảnh: " + downloadURL);
                    // Thực hiện các xử lý tiếp theo với downloadURL và title
                });
            });
        }
    } else {
        alert("Vui lòng chọn ảnh và nhập tiêu đề");
    }
});