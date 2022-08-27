function finishLoad() {
    const acList = [
        {
            title: "Báo cáo chuyên đề định hướng lập trình viên",
            attendance: "Đã điểm danh thành công +3",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg1.jpg",
        },

        {
            title: "Cổ vũ đêm chung kết Got Talent",
            attendance: "Đã điểm danh thành công +3",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg2.jpg",
        },
        {
            title: "Chương trình âm nhạc học đường",
            attendance: "Đã điểm danh thành công +3",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg3.jpg",
        },
        {
            title: "Giải pháp phần mềm",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg4.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
        {
            title: "Báo cáo chuyên đề định hướng lập trình viên",
            attendance: "Đã điểm danh thành công +3",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg1.jpg",
        },

        {
            title: "Cổ vũ đêm chung kết Got Talent",
            attendance: "Đã điểm danh thành công +5",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg2.jpg",
        },
        {
            title: "Chương trình âm nhạc học đường",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg3.jpg",
        },
        {
            title: "Giải pháp phần mềm",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg4.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
        {
            title: "Báo cáo chuyên đề định hướng lập trình viên",
            attendance: "Đã điểm danh thành công +3",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg1.jpg",
        },

        {
            title: "Cổ vũ đêm chung kết Got Talent",
            attendance: "Đã điểm danh thành công +5",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg2.jpg",
        },
        {
            title: "Chương trình âm nhạc học đường",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg3.jpg",
        },
        {
            title: "Giải pháp phần mềm",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg4.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
        {
            title: "Báo cáo chuyên đề định hướng lập trình viên",
            attendance: "Đã điểm danh thành công +3",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg1.jpg",
        },

        {
            title: "Cổ vũ đêm chung kết Got Talent",
            attendance: "Đã điểm danh thành công +5",
            time: "Vừa xong",
            img: "./hocbong/img/NKimg2.jpg",
        },
        {
            title: "Chương trình âm nhạc học đường",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg3.jpg",
        },
        {
            title: "Giải pháp phần mềm",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg4.jpg",
        },
        {
            title: "Hội Thảo chia sẻ tri thức",
            attendance: "Đã điểm danh thành công +5",
            time: "1 ngày trước",
            img: "./hocbong/img/NKimg1.jpg",
        },
    ];

    // id.substr(id.length - 1); // => "1"

    const goToTop = document.querySelector(".go-to__top");
    const app = document.querySelector(".app");
    const gomAc = document.querySelector(".gomAc");
    const ac = document.querySelector(".ac");
    const seehdScores = document.querySelector(".seehd-scores");
    const overplay = document.querySelector(".overplay");
    const out = document.querySelector(".out");

    const form1 = document.querySelector(".form1");
    const diem = document.querySelector(".diem");
    const thank = document.querySelector(".thank");
    let sum = 0;
    function render() {
        const acListNew = acList.map((data, d) => {
            return `<div class="ac" data-d=${d}>
        <div class="ac-text">
                        <div class="text-main" data-d=${d}>
                            ${data.title}
                        </div>
                        <div class="text-note">
                            ${data.attendance}
                        </div>
                        <div class="text-thank">
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100076749866466">Cảm ơn bạn đã tham gia hoạt động, có thắc mắc các bạn vui lòng liên hệ cho chúng tôi qua facebook nhé</a>
                            
                        </div>
                        <div class="ac_like_share">
                            <div class="ac_like_share-icon1 ">
                                ${data.time}
                            </div>
                            <div class="ac_like_share-icon like">
                                <i class="fa-solid fa-heart"></i>
                                <div class="tim">
                                    Tim
                                </div>
                            </div>
                            <div class="ac_like_share-icon lu">
                                <i class="fa-solid fa-bookmark"></i>
                                <div class="luu">
                                    Lưu
                                </div>
                            </div>
                            <div class="ac_like_share-icon shar">
                                <i class="fa-solid fa-share"></i>
                                <div class="share">
                                    Chia sẻ
                                </div>

                            </div>

                        </div>
                </div>
                    <div class="ac-img">
                        <img src="${data.img}" alt="">
                    </div>
                    </div>`;
        });

        const htmlAc = acListNew.join("");
        gomAc.innerHTML = acListNew;
    }

    render();

    //----GO TO TOP-----------------
    goToTop.onclick = function () {
        window.scroll(0, 0);
    };

    //------------TIM SHARE------------
    gomAc.onclick = function (e) {
        const icon = e.target.closest(".ac_like_share-icon");
        if (icon) icon.classList.toggle("active");
    };

    //-------------TÍNH TỔNG ĐIỂM HOẠT ĐỘNG ĐƯỢC------------
    for (let i = 0; i < acList.length; i++) {
        //-----subtring là hàm cắt chuỗi con từ chuỗi cha -----------
        const diem = acList[i].attendance.substring(
            acList[i].attendance.length - 1
        );
        sum += +diem;
    }

    //----------TỔNG ĐIỂM LÊN FORM-------------
    diem.innerText = sum;

    //----------HIỆN FORM ĐIỂM -----------
    seehdScores.onclick = function () {
        overplay.classList.add("show");
        form1.classList.add("show");
    };


    //------TẮT KHI NHẮN NÚT CLOSE
    out.onclick = function () {
        overplay.classList.remove("show");
        form1.classList.remove("show");
    };


//----------HIỆN DÒNG NHẮC NHỠ------------
    if (parseInt(diem.innerText) > 80 && parseInt(diem.innerText) < 100) {
        thank.innerHTML = "Bạn đã làm rất tốt rồi đấy :))))";
    } else if (
        parseInt(diem.innerText) > 65 &&
        parseInt(diem.innerText) <= 80
    ) {
        thank.innerHTML =
            "Điểm số của bạn chỉ còn thiếu một xíu nữa thôi, cố lên !!!";
    } else {
        thank.innerHTML = "Thật buồn vì điểm của bạn còn hơi thấp đấy :((((";
    }
}
