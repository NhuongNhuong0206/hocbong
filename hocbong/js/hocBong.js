function finishLoad() {
    // const nutDongGop = document.querySelector(".main-mid__item.img1");
    // const nutCacLoaiHocBong = document.querySelector(".main-mid__item.img2")
    const overplay = document.querySelector(".overplay");
    const closeBtns = document.querySelectorAll(".out");
    const shows = document.querySelectorAll(".main-mid__item");
    const show1 = document.querySelector(".form.form1");
    const show2 = document.querySelector(".form.form2");
    const show3 = document.querySelector(".form.form3");
    const gui = document.querySelector(".submitBtn");
    const loginBtnLabel = document.querySelector(
        ".main-top__right-longin_input"
    );
    const username = document.querySelector("input.username");
    const password = document.querySelector("input.password");
    const loginBtn = document.querySelector(".login-btn");
    const goToTop = document.querySelector(".go-to__top");
    isLogin = false;

    goToTop.onclick = function () {
        window.scroll(0, 0);
    };

    const userList = [
        {
            username: "admin",
            password: "admin",
        },
        {
            username: "1",
            password: "1",
        },
    ];

    function closeOverplay() {
        overplay.classList.remove("show");
        show1.classList.remove("show");
        show2.classList.remove("show");
        show3.classList.remove("show");
        document.body.style.overflow = "auto";
    }

    function showLoginForm() {
        document.body.style.overflow = "hidden";
        overplay.classList.add("show");
        show3.classList.add("show");
        show1.classList.remove("show");
        show2.classList.remove("show");
        username.focus();
    }

    shows[2].onclick = function (e) {
        if (!isLogin) {
            //ngăn chặn hành vi mặc định (hành vi mở form thẻ a)
            e.preventDefault();
            showLoginForm();
        }
    };

    loginBtnLabel.onclick = function () {
        if (!isLogin) {
            showLoginForm();
        } else {
            isLogin = false;
            loginBtnLabel.value = "Đăng nhập";
        }
    };

    for (let i = 0; i < shows.length - 1; i++) {
        shows[i].onclick = function () {
            overplay.classList.add("show");
            // show1.classList.add("show");
            if (i == 0) {
                document.body.style.overflow = "hidden";
                show1.classList.add("show");
                show2.classList.remove("show");
                show3.classList.remove("show");
            }
            if (i == 1) {
                document.body.style.overflow = "hidden";
                show2.classList.add("show");
                show1.classList.remove("show");
                show3.classList.remove("show");
            }
        };
    }

    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = closeOverplay;
    }

    gui.onclick = closeOverplay;

    //đăng nhập
    // loginBtn.onclick = function () {
    //     const usernameVal = username.value;
    //     const passwordVal = password.value;

    //     if (usernameVal && passwordVal) {
    //         const user = userList.find((item) => item.username == usernameVal);

    //         if (user) {
    //             if (user.password == passwordVal) {
    //                 isLogin = true;
    //                 username.value = null;
    //                 password.value = null;
    //                 closeOverplay();
    //                 //template string
    //                 loginBtnLabel.value = `${user.username} - Đăng xuất`;
    //             } else {
    //                 alert("Sai mật khẩu!");
    //             }
    //         } else {
    //             alert("Tài khoản không tồn tại!");
    //         }
    //     } else {
    //         alert("Bạn phải nhập đầy đủ thông tin!");
    //     }
    // };
}
