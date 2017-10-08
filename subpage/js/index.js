window.onload=function(){
	(function(){
		var screenH=window.screen.height;
		var num=0;
		var arrData=[];
		var onOff=true;
		
		getData(num);
		window.onscroll=function(){
			if(getScrollTop()+screenH>document.body.scrollHeight-630){
				if(num>=arrData.length-4){//alert('没有更多啦！')
					return;
				}
				if(onOff){
					//num=4;
					onOff=false;
				}
				num+=4;
				getData(num);
				
				
			}
		}
		function getScrollTop(){
			return document.documentElement.scrollTop||document.body.scrollTop;
		}
		
		
		function getData(num){
			ajax('get','js/data.php','',function(data){
				data=JSON.parse(data);
				console.log(data);
				arrData=data;
				for(var i=num;i<num+4;i++){
					(function(obj){
						var bigImg=new Image();
						var smallImg=new Image();
						bigImg.src=obj.bigSrc;
						smallImg.src=obj.smallSrc;
						bigImg.onload=function(){
							this.b=true;
							if(this.b==true&&smallImg.b==true){
								addData(obj);
							}
						}
						smallImg.onload=function(){
							this.b=true;
							if(this.b==true&&bigImg.b==true){
								addData(obj);
							}
						}
					})(data[i]);
					
				}
				
			});
		}
		function addData(obj){
			var bigPic=obj.bigSrc;
			var smallPic=obj.smallSrc;
			var title=obj.title;
			var price=obj.price;
			var oUl=document.createElement('ul');
			oUl.innerHTML='<li class="pic"><img class="big-pic" src="'+bigPic+'"><img class="small-pic" src="'+smallPic+'"></li><li class="txt"><span class="price">'+price+'折起</span>'+title+'</li><li class="buy"><span class="">立即购买</span></li>'
			oUl.style.opacity=0;
			document.querySelector('.clothes').appendChild(oUl);
			animateTime(oUl,{opacity:100},1000,'linear');
		}
	})();
	
	
	(function(){
			var oReturn = document.querySelector('.return');
			oReturn.onclick = goBack;

			/** 
			 * 返回前一页（或关闭本页面） 
			 * <li>如果没有前一页历史，则直接关闭当前页面</li> 
			 */  
			function goBack(){  
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE  
					if(history.length > 0){  
						window.history.go( -1 );  
					}else{  
						window.opener=null;window.close();  
					}  
				}else{ //非IE浏览器  
					if (navigator.userAgent.indexOf('Firefox') >= 0 ||  
						navigator.userAgent.indexOf('Opera') >= 0 ||  
						navigator.userAgent.indexOf('Safari') >= 0 ||  
						navigator.userAgent.indexOf('Chrome') >= 0 ||  
						navigator.userAgent.indexOf('WebKit') >= 0){  
			  
						if(window.history.length > 1){  
							window.history.go( -1 );  
						}else{  
							window.opener=null;window.close();  
						}  
					}else{ //未知的浏览器  
						window.history.go( -1 );  
					}  
				}  
			} 
		})();
}
	
	
	