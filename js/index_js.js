
window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var timer;
    function showButton (){     //显示小圆点
        for (var i = 0; i < buttons.length; i++){
            if (buttons[i].className == 'on') {     //判断当前圆点是否点亮
                buttons[i].className = '';
                break;
            }
        }
        buttons[index-1].className ='on';
    }


    function animate(offset){       //图片滚动
        var newLeft =  parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if (newLeft > 0) {      //判断当前图片left来达到无空白无限滚动
            list.style.left =-4130+'px';
        }
        if (newLeft < -4130) {
            list.style.left = 0 +'px';
        }
    }

    function play(){        //自动滚动计时器
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }
    function stop(){        //停止自动滚动
        clearInterval(timer);
    }


    next.onclick = function(){      //右箭头
        if (index == 8) {       //判断当前圆点位置来无限滚动
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        animate(-590);
    }
    prev.onclick = function(){      //左箭头
        if (index == 1) {
            index = 8;
        }
        else {
            index -= 1;
        }
        showButton();
        animate(+590);
    }
    for (var i = 0; i < buttons.length; i++) {      //鼠标进入小圆点切换图片
        buttons[i].onmouseover = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));  
            var offset = -590 * (myIndex - index) ;
            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;       //鼠标进入图片区域停止计时和自动播放
    container.onmouseout = play;        //鼠标离开图片区域开始计时和自动播放
    play();     //默认自动播放
/*

////////////////////
*/
    var container1 = document.getElementById('container1');
    var list1 = document.getElementById('list1');
    var prev1 = document.getElementById('prev1');
    var next1 = document.getElementById('next1');
    var timer1;
     function animate1(offset){       //图片滚动
        var newLeft1 =  parseInt(list1.style.left) + offset 
        list1.style.left = newLeft1 + 'px';
        if (newLeft1 > 0) {      //判断当前图片left来达到无空白无限滚动
            list1.style.left =-380+'px';
        }
        if (newLeft1 < -380) {
            list1.style.left = 0 +'px';
        }
    }

    function play1(){        //自动滚动计时器
        timer1 = setInterval(function(){
            next1.onclick();
        },4000);
    }
    function stop1(){        //停止自动滚动
        clearInterval(timer1);
    }


    next1.onclick = function(){      //右箭头
        animate1(-190);
    }
    prev1.onclick = function(){      //左箭头
        animate1(+190);
    }
    container1.onmouseover = stop1;       //鼠标进入图片区域停止计时和自动播放
    container1.onmouseout = play1;        //鼠标离开图片区域开始计时和自动播放
    play1();
}