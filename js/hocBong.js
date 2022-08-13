function finishLoad() {
    const nutDongGop = document.querySelector(".main-mid__item.img1");
    const overplay = document.querySelector(".overplay");
    const closeBtn = document.querySelector(".out");
    const nutHocbong = document.querySelector(".main-mid__item.img2");
    nutDongGop.onclick = function () {
        overplay.classList.add("show");
    };

    closeBtn.onclick = function () {
        overplay.classList.remove("show");
    };
}
