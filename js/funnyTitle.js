//浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        
        document.title = '页面奔溃啦！！！- ' + OriginTitle;
        clearTimeout(titleTime);
    }
    else {
       
        document.title = '好像没事了 - ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});