$(function (){
    var pno = 0;
    var kw = location.search.split("=")[1];
    $.ajax({
        type:"get",
        url:"Data/product/getproducts.php",
        data:{pno:pno,kw:kw},
        dataType:"json",
        success:function(output){
            console.log(output);
                var {products,pageCount} = output;
                var html = "";
            for(var x of products){
                var {title,price,md,lid}=x;
                html+=`<li class="c1">
                            <a href="products.html?lid=${lid}">
                                <img src="${md}" alt="">
                            </a>
                            <p class="p2">¥${parseFloat(price).toFixed(2)}</p>
                            <p class="p1">${title}</p>
                            <div>
                                <span class="reduce">-</span>
                                <input type="text" value="1">
                                <span class="add">+</span>
                                <a href="#" class="addCart">加入购物车</a>
                            </div>
                        </li>`;
            }
            $("ul.computer").html(html);
            var html = `<li><a href="javascript:;">上一页</a></li>`;
            for(var i =0;i<pageCount;i++){
                if(i===pno){
                    html +=`<li class="current"><a href="javascript:;">${i+1}</a></li>`;
                }else{
                    html +=`<li><a href="javascript:;">${i+1}</a></li>`;
                }
            }
            html+=`<li><a href="javascript:;">下一页</a></li> -->`;
            $("#title-foot>ul").html(html);
            var $first = $("#title-foot>ul").first();
            var $last = $("#title-foot>ul").last();
            if(pno===0) $first.addClass("disabled");
            if(pno===pageCount-1) $last.addClass("disabled");
        },
        error:function(){
            console.log("错误");
        }
    })
})