$(function () {
    $.ajax({
        type:"get",
        url:"header.html",
        success:function (html) {
            var link1  = document.createElement("link");
            link1.rel="stylesheet";
            link1.href="css/header.css";
            var link2  = document.createElement("link");
            link2.rel="stylesheet";
            link2.href="css/body.css";
            document.head.appendChild(link1);
            document.head.appendChild(link2);
            document.getElementById("header").innerHTML=html;
        }
    })
});