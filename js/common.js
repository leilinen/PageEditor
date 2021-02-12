function $(id) {
    return document.getElementById(id)
}
window.onload = function(){
    function selectText(){
        if(document.selection){  //IE浏览器下
            return document.selection.createRange().text;//返回选中的文字
        }
        else{  //非IE浏览器下
            return window.getSelection().toString();//返回选中的文字
        }
    }
    var oP = document.getElementById('p1');
    var oDiv = document.getElementById('div1');
    
    oP.onmouseup = function(ev){//设定一个onmouseup事件
        var ev = ev || window.event;
        var left = ev.clientX;
        var top = ev.clientY;
        if(selectText().length>10){
            setTimeout(function(){//设定一个定时器
                oDiv.style.display = 'block';
                oDiv.style.left = left + 'px';
                oDiv.style.top = top + 'px';
            },100);
        }
        else{
            oDiv.style.display = 'none';
        }
    };
    
    oP.onclick = function(ev){
        var ev = ev || window.event;
        ev.cancelBubble = true;
    };
    document.onclick = function(){
        oDiv.style.display = 'none';
    };

    oDiv.onclick = function(){
        window.location.href ='http://service.weibo.com/share/share.php?url='+selectText()+'&url='+'http://blog.sina.com.cn';
    };
};