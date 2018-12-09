window.onload = function() {
    var btn = document.getElementById('publish');
    btn.addEventListener('click', function(){
        var content = document.getElementById('content').value;
        console.log(content)
        if ( content == '') {
            alert('发布内容不能为空');
            return false;
        }
        var li = document.createElement('li');
        li.className = 'clearfix';
        var html = '';
        html+='    <img class="fl icon" src="./img/icon.jpg" alt="">';
        html+='    <div class="fr mesBoardBox">';
        html+='        <h5>游客1</h5>';
        html+='        <p>'+content+'</p>';
        html+='    </div>';
        li.innerHTML = html;
        document.getElementById('msgList').prepend(li);
    })
}