$(function(){   
        var link = document.createElement("link");
        var link1 = document.createElement("link");
        link.rel= "stylesheet";
        link.href = "css/search.css";
        link1.rel= "stylesheet";
        link1.href = "css/body.css";
        document.head.appendChild(link);
        document.head.appendChild(link1);    
        $("#in-search").click(function(){
                var text = $("#input-search").val();
                if(text.trim()!==""){
                     location.href = "products.html?" + text.trim();
                }
        })
        // $("#input-search").onkeyup = function(e){
        //         if(e.keyCode===13){
        //              $("#in-search").click();
        //         }
        // }
        if(location.search.indexOf("kw=")!=-1){
                $("#input-search").val()=
                decodeURI(location.href.split("=")[1]);
        }
})