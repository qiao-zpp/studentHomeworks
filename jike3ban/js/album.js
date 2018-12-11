window.onload = function () {
    var loadMore = document.getElementById('loadMore');
    var imgList = document.getElementById('imgList');
    var moreImg = ['img02.jpg','img03.jpg','img04.jpg','img05.jpg'];
    loadMore.addEventListener('click', function () {
        moreImg.forEach(function (item) {
            var li = document.createElement('li');
            li.innerHTML = ' <img class="head" src="./img/'+item+'" alt="">';
            imgList.append(li);
        })
        loadMore.style.display = 'none';
    })
}