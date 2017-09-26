window.onload=function(){
	
	Banner();
	function Banner(){
		var oSlide=document.querySelector('.slide');
		var oUl=oSlide.querySelector('ul');
		oUl.innerHTML+=oUl.innerHTML;
		var oLi=oSlide.querySelectorAll('li');
		var oDot=oSlide.querySelector('.dot');
		var aSpan=oDot.querySelectorAll('span');
		
		oUl.style.width=oLi.length+'00%';
		aSpan[0].className='on';
		
		var startPoint=0;
		var startX=0;
		var num=0;
		var timer;
		var onOff=true;//设一个开关，让手指在Y轴方向移动时失效
		cssTransform(oUl,'translateX',0);
		oSlide.addEventListener('touchstart',function(e){//按下的时候设置开关为true
			clearInterval(timer);
			var l=cssTransform(oUl,'translateX');
			num=-l/oSlide.offsetWidth;
			
			if(num==0){
				num=aSpan.length;
			}
			if(num==oLi.length-1){
				num=aSpan.length-1;
			}
			cssTransform(oUl,'translateX',-num*oSlide.offsetWidth);
			
			startPoint=e.changedTouches[0];
			startX=cssTransform(oUl,'translateX');
			oUl.style.transition='';
			onOff=true;
		});
		
		oSlide.addEventListener('touchmove',function(e){
			if(!onOff){
				return;
			}
			
			var newPoint=e.changedTouches[0];
			disX=newPoint.pageX-startPoint.pageX;
			disY=newPoint.pageY-startPoint.pageY;
			console.log('disX:'+disX+' disY'+disY);
			
			translateX=disX+startX;
			if(Math.abs(disY)>Math.abs(disX)){
				//return;
				onOff=false;
			}
			oUl.style.transition='';
			cssTransform(oUl,'translateX',translateX);
			
		});
		
		oSlide.addEventListener('touchend',function(){
			autoPlay();
			var l=cssTransform(oUl,'translateX');
			num=Math.round(-l/oSlide.offsetWidth);
			console.log(num);
			translateX=-num*oSlide.offsetWidth;
			tab();
		});
		
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				if(num==oLi.length-1){
					num=aSpan.length-1;
				}
				oUl.style.transition='';
				cssTransform(oUl,'translateX',-num*oSlide.offsetWidth);
				setTimeout(function(){
					num++;
					tab();
				},50);
			},2000);
		}
		
		function tab(){
			oUl.style.transition='1s';
			cssTransform(oUl,'translateX',-num*oSlide.offsetWidth);
			
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].className='';
			}
			aSpan[num%aSpan.length].className='on';
		}
	}
	
	
	/*滑动导航 begin*/
	(function(){
		var hdMove=document.querySelector('.head-move');
		console.log(hdMove);
		var hdUl=hdMove.querySelector('ul');
		
		var startPoint;
		var startX;
		var step=1;
		
		var lastX=0;
		var lastDis=0;
		var lastTime=0;
		var lastTimeDis=0;
		
		console.log('.head-move的可见宽度值：'+hdMove.clientWidth+' hdUl的宽度值：'+hdUl.offsetWidth);
		var maxX=hdMove.clientWidth-hdUl.offsetWidth;/////////容器宽度与滚动导航宽度的差值
		console.log('容器宽度与导航宽度的插值：'+maxX);
		hdMove.addEventListener('touchstart',function(e){
			startPoint=e.changedTouches[0].pageX;
			startX=cssTransform(hdUl,'translateX');
			
			lastX=startX;
			lastTime=new Date().getTime();
			lastDis=0;
			lastTimeDis=0;
		});
		
		hdMove.addEventListener('touchmove',function(e){
			var nowPoint=e.changedTouches[0].pageX;
			var disX=nowPoint-startPoint;
			console.log('nowPoint值：'+nowPoint+' startPoint值：'+startPoint);
			var l=disX+startX;
			
			var nowTime=new Date().getTime();
			lastDis=l-lastX;
			lastTimeDis=nowTime-lastTime;
			
			
			
			if(l>0){
				step=1-l/hdMove.clientWidth;
				l=parseInt(step*l);
			}
			if(l<maxX){
				//l=maxX;
				var L=maxX-l;
				step=1-L/hdMove.clientWidth;
				L=parseInt(step*L);
				l=maxX-L;
			}
			
			cssTransform(hdUl,'translateX',l);
			
			lastX=l;
			lastTime=nowTime;
		});
		
		hdMove.addEventListener('touchend',function(){
			var speed=lastDis/lastTimeDis;
			var l=cssTransform(hdUl,'translateX');
			var target=l+speed;
			if(target>0){
				target=0;
			}
			if(target<maxX){
				target=maxX;
			}
			hdUl.style.transition='transform 600ms cubic-bezier(0.1, 0.57, 0.1, 1)';
			cssTransform(hdUl,'translateX',target);
		});
	})();
	
	/*滑动导航 end*/
	/*获取新闻开始*/
	function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
    }
 
	function ajax(json){
	    var xhr = createXHR();
	    json.data = param(json.data);
	    //解决ie缓存
	    json.url = json.url + '?rand='+Math.random();
	    if(json.method === 'get'){
	        json.url += json.url.indexOf('?') == -1?'?'+json.data:""+json.data;
	    };
	    if(json.async === true){
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState == 4){//请求成功
	                if(xhr.status == 200){//拿到数据
	                    //要把数据怎么处理
	                    json.success(xhr.responseText);
	                }else{
	                    alert("错误信息:"+xhr.status+"---错误状态:"+xhr.statusText);
	                };
	            };
	        };
	    };
	    xhr.open(json.method,json.url,json.async);
	    if(json.method === 'post'){
	        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	        xhr.send(json.data);
	    }else{
	        xhr.send(null);
	    };
	
	    if(json.async === false){
	        if(xhr.status == 200){
	            //要把数据怎么处理
	            json.success(xhr.responseText);
	        }else{
	            alert("错误信息:"+xhr.status+"---错误状态:"+xhr.statusText);
	        };
	    };
	};
	
	
	function param(data){
	    var arr = [];
	    for(var k in data){
	        arr.push(encodeURIComponent(k)+"="+encodeURIComponent(data[k]));
	    }
	    //["user=xq","age=18"]
	    return arr.join("&");
	}
	
	
	function createXHR(){
	    if(typeof XMLHttpRequest != "undefined"){
	        return new XMLHttpRequest();
	    }else if(typeof ActiveXObject != "undefined"){
	        var version = [
	            'MSXML2.XMLHttp.6.0',
	            'MSXML2.XMLHttp.3.0',
	            'MSXML2.XMLHttp',
	        ];
	        for(var i=0;i<version.length;i++){
	            try{
	                return new ActiveXObject(version[i]);
	            }catch(e){
	                //跳过
	            }
	        }
	    }else{
	        throw new Error("你的系统或者浏览器不支持XHR对象");
	    }
	};
	
	
	function bind(dom,eventType,Fn){
	    if(dom.attachEvent){
	        dom.attachEvent("on"+eventType,Fn);
	    }else{
	        dom.addEventListener(eventType,function(){
	            Fn.call(dom);
	        },false);
	    };
	};
	
	ajax({
	     method:'get',
	     url:'http://route.showapi.com/181-1',
	     data:{
	        "showapi_timestamp": formatterDateTime(),
	         "showapi_appid": '46414', //这里需要改成自己的appid
	         "showapi_sign": '6fbcf7969516424685ecccaab4a1bbe4',  //这里需要改成自己的应用的密钥secret，
	         "num":5,
	         "rand":1
	     },
	     success:function(result){
	         console.log(typeof result); 
	         var result=JSON.parse(result);
	         console.log(result);
		        var newslist=result.showapi_res_body.newslist;
		        console.log(newslist);
		        var html="";
		        for(var i=0;i<newslist.length;i++){
		        	html+='<a href="'+newslist[i].url+'"><img src="'+newslist[i].picUrl+'" width="100%" height="100%"><span>'+newslist[i].title+'</span><i>&gt;</i></a>'
		        }
		        //console.log(document.querySelector('.page_wrap').children[0]);
		        document.querySelector('.page_wrap').children[0].innerHTML+=html;
	     },
	     async:true
	 })
	
	
	/*选项卡*/
	var oNav=document.querySelector('.navbar').querySelectorAll('div');
	var oPage=document.querySelector('.page_wrap').querySelectorAll('.page');
	var oWrap=document.querySelector('.page_wrap');
	
	oWrap.addEventListener('touchstart',touch,false);
	oWrap.addEventListener('touchmove',touch,false);
	oWrap.addEventListener('touchend',touch,false);
	
	var start={
		x:0,
		y:0
	}
	var end={
		x:0,
		y:0
	}
	for(var i=0;i<oNav.length;i++){
		(function(a){
			oNav[a].onclick=function(){
				addClass(a);
			}
		})(i)
	}
	
	var index=0;
	 
	function addClass(a){
		for(var i=0;i<oNav.length;i++){
			oNav[i].setAttribute('class','navbar-item');
			oPage[i].setAttribute('class','page');
		}
		oNav[a].setAttribute('class','navbar-item navbar-item-on');
		oPage[a].setAttribute('class','page page-on');
	}
	function touch(event){
		switch (event.type){
			case 'touchstart':
				start.x=event.changedTouches[0].pageX;
				start.y=event.changedTouches[0].pageY;
			break;
			case 'touchmove':
				end.x=event.changedTouches[0].pageX;
				end.y=event.changedTouches[0].pageY;
			break;
			case 'touchend':
				if((start.x-end.x)>(start.y-end.y)){
					index++;
					index=index>oNav.length-1?oNav.length-1:index;
					addClass(index);
				}
				if((start.x-end.x)<(start.y-end.y)){
					index--;
					index=index<0?0:index;
					addClass(index);
				}
			break;
		}
	}
}

