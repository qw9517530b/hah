/**
 * Created by web-01 on 2018/5/24.
 */
$(function () {
    var link = document.createElement("link");
    link.rel = "styleSheet";
    link.href = "css/products.css";
    var link1 = document.createElement("link");
    link1.rel= "styleSheet";
    link1.href= "css/body.css";
    document.head.appendChild(link1);
    document.head.appendChild(link);
    function cn(min,max){
        var n = Math.random()*(max-min)+min;
        return Math.floor(n);
     }
     function cx(min,max){
        var r = cn(min,max);
        var g = cn(min,max);
        var b = cn(min,max);
        return `rgb(${r},${g},${b})`;
     } 
    var $ul = $(".banner-img");
    var $ulIds = $(".indicators");
    var LIWIDTH=400,interval=500,moved=0,wait=3000;
    if(location.search.indexOf("lid")!=-1){
        var lid = location.search.split("=")[1];
        $.ajax({
            type:"get",
            url:"data/product/in_search.php",
            data:"lid="+lid,
            dataType:"json",
            success:function(products){
                var html="";
                var {product,pic,specs} = products;
                for(var x of pic){
                    var {lg,md,sm} = x; 
                    html+=
                    `<li>
                        <a href="#">
                            <img src="${md}">
                        </a>
                    </li>`;
                }
                var {md,lg,sm} = pic[0];
                html+=
                `<li>
                    <a href="#">
                        <img src="${md}">
                    </a>
                </li>`;
                $ul.html(html).css("width",LIWIDTH*(products.length+1));
                $ulIds.html("<li></li>".repeat(products.length))
                autoMove();
                var html = "";
                var {title,subtitle,price,promise}=product;
                html=
                `<h2>${title}</h2>
                <h4>${subtitle}</h4>
                <div id="hui">
                    <p class="p1">产品售价:<span>¥${price}</span></p>
                    <p class="p2">服务承诺:<span>${promise}</span></p>
                </div>
                <p class="p5">客服电话:+0086 820820820</p>
                <p class="p3">
                </p>
                <p class="p4">
                    <span>
                            <img src="images/product_detail/product_detail_img6.png" alt="">
                            <a>收藏</a>
                    </span>
                </p>`;
                $("#service").html(html);     
                var html = "";
                for(var x of specs){
                    var {lid,spec} = x;
                    html+=
                    `<a href="products.html?lid=${lid}">${spec}</a>`;
                }
                $(".p3").html(html);
                var html = "";
                var {lname,os,memory,resolution,video_card,cpu,video_memory,category,disk} = product;
                html = 
                `<li>商品名称:${lname}</li>
                    <li>系统:${os}</li>
                    <li>内存容量:${memory}</li>
                    <li>分辨率:${resolution}</li>
                    <li>显卡型号:${video_card}</li>
                    <li>处理器:${cpu}</li>
                    <li>显存容量:${video_memory}</li>
                    <li>分类:${category}</li>
                    <li>硬盘容量:${disk}</li>`;
                $("ul.pz").html(html);
                $("ul.banner-other>li:first-child>a>span").css("color",cx(25,255));
                $("ul.banner-other>li:nth-child(2)>a>span").css("color",cx(75,255));
                $("ul.banner-other>li:nth-child(3)>a>span").css("color",cx(75,255));
                $("ul.banner-other>li:nth-child(4)>a>span").css("color",cx(75,255));
                $("ul.banner-other>li:nth-child(5)>a>span").css("color",cx(75,255));
                $("ul.banner-other>li:nth-child(6)>a>span").css("color",cx(75,255));
                $("ul.banner-other>li:last-child>a>span").css("color",cx(75,255));
            },
            error:function () {
                console.log("错误");
            }
        })
    }
    function autoMove(){
        timer = setInterval(function () {
                moved++;
                $ul.animate({
                    left:-moved*LIWIDTH
                },interval,function () {
                    $ulIds.children(":eq("+moved+")").addClass("hover")
                        .siblings().removeClass("hover");
                    if(moved==$ul.children().length-1){
                        $ul.css("left",0);
                        moved=0;
                 }
            })
        },wait)
    }
    $("#banner").mouseenter(function(){
        clearInterval(timer);
        timer=null;
    }).mouseleave(function(){
        autoMove();
    });
    $ulIds.on("click","li",function(){
        var $li =$(this);
        var i = $li.index();
        moved=i;
        $ul.stop(true).animate({
            left:-moved*LIWIDTH
        },interval,function () {
            $ulIds.children(":eq("+moved+")").addClass("hover")
            .siblings().removeClass("hover");           
        })
        
    })
    var $banner = $(".banner-other");
     $.ajax({
         type:"get",
         url:"data/product/getindexabout.php",
         dataType:"json",
         success:function(image){
             var html="";
             for(var x of image){
                 var {title,img,href} = x;
                html+=
                `<li>
                    <a href="${href}"><img src="${img}" alt="">
				    <span>${title}</span></a>
				</li>`;
             }
            var LIWIDTH=290,interval=500,moved=0,wait=3000;
            $banner.html(html).css("width",LIWIDTH*image.length);
             var timer = setInterval(function(){
                 moved++;
                 $banner.animate({
                     left:-moved*LIWIDTH
                 },interval,function(){
                    if(moved==image.length-3){
                        //重复加载
                        $banner.css("left",0);
                        moved=0;
                        
                    }
                 })
             },wait)
         },
         error:function(){
             console.log("错误");
         }
     });
     

})