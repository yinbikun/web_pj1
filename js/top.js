window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    console.log(121);
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// 点击按钮，返回顶部
function returnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}