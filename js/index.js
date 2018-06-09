$(function(){
    $.ajax({
        type:"get",
        url:"Data/product/getIndexText.php",
        dataType:"json",
        success:function(data){
            var html = "";
            var y ="";
            data.forEach(function(p,i){
                var {title,details,href}=p;
                if(i<3){
                html+=
                    `<div>
                        <img src="images/2xc.PNG" alt="">
                        <div class="content">
                            <h4 class="H4"><a href="${href}">${title}</a></h4>
                            <i class="line"></i>
                            <p class="text"><a href="${href}">${details}</a></p>
                        </div>
                    </div>`;
                }else{
                    y=
                    `<div>
                        <h2 class="H2">BEST SERVICES</h2>
                        <hr class="line">
		    		</div>`;
                    y+=
                `<div>
					<div class="text-2 lf">
						<h4 class="title">${title}</h4>
						<p class="text2">${details}</p>
					</div>
					<div class="text-2 rf">
						<h4 class="title">${title}</h4>
						<p class="text2">${details}</p>
					</div>
				</div>
                <div>
					<div class="text-2 lf">
						<h4 class="title">${title}</h4>
						<p class="text2">${details}</p>
					</div>
					<div class="text-2 rf">
						<h4 class="title">${title}</h4>
						<p class="text2">${details}</p>
					</div>
				</div>`;
                }
            })
            $("#row").html(html);
            $("#r-text").html(y);
        }
    })
})