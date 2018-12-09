window.onload = function() {
    var btn = document.getElementsByClassName('play');
    var playBox = document.getElementById('playBox');
    for(var i = 0;i<btn.length;i++){
        btn[i].onclick = function(){
            var src = this.getAttribute('data-src');
            if ( src == '') {
                alert('暂无歌曲资源');
                return;
            }
            playBox.src = src;
            playBox.autoplay = 'autoplay'
        }
    }
}