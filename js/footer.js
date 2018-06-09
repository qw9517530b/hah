/**
 * Created by web-01 on 2018/5/23.
 */
$(function() {
   $.ajax({
       type:"get",
       url:"footer.html",
       success:function (html) {
           var link1 = document.createElement("link");
           link1.rel="stylesheet";
           link1.href="css/footer.css";
           var link2 = document.createElement("link");
           link2.rel="stylesheet";
           link2.href="css/body.css";
           document.head.appendChild(link1);
           document.head.appendChild(link2);
           document.getElementById("footer").innerHTML= html;
       }
   });
});