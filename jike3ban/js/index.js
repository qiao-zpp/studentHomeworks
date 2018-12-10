window.onload = function () {
    var currentIndex = 0;
    var timer = null;
    autoplay();
    function autoplay() {
        timer = setInterval(function () {
            next();
        },4000);
    }
    var nextBtn = document.querySelector(".arrow_right");
    var prevBtn = document.querySelector(".arrow_left");
    nextBtn.onclick = function () {
        next();
    }
    prevBtn.onclick = function () {
        prev();
    }
    var container = document.getElementById('wrapBanner');
    container.onmouseenter = function () {
        clearInterval(timer);
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }
    container.onmouseleave = function () {
        autoplay();
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    }
    var liArr = document.getElementsByClassName('wrapItem');
    var wrapBox = document.getElementById('bannerList');
    var width = liArr[0].offsetWidth;
    function next() {
        currentIndex++;
        if (currentIndex == liArr.length) {
            currentIndex = 0;
        }
        wrapBox.style.left = -currentIndex*width + 'px';
    }
    function prev() {
        currentIndex--;
        if (currentIndex == -1) {
            currentIndex = liArr.length - 1;
        }
        wrapBox.style.left = -currentIndex*width + 'px';
    }
}
