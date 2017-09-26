/*function cssTransform(obj,attr,val){
	if(!obj.transform){
		obj.transform={};
	}
	obj.transform[attr]=val;
	console.log(obj.transform)
}第一步测试*/

function cssTransform(obj,attr,val){
	if(!obj.transform){
		obj.transform={};
	}
	if(arguments.length===3){//3个参数 设置
		obj.transform[attr]=val;
		var strVal='';
		for(var key in obj.transform){
			switch (key){
				case 'rotate':
				case 'rotateX':
				case 'rotateY':
				case 'skewX':
				case 'skewY':
					strVal+=key+'('+obj.transform[key]+'deg) ';
					break;
				case 'translate':
				case 'translateX':
				case 'translateY':
					strVal+=key+'('+obj.transform[key]+'px) ';
					break;
				case 'scale':
				case 'scaleX':
				case 'scaleY':
					strVal+=key+'('+obj.transform[key]+') ';
					break;
			}
			obj.style.webkitTransform=obj.style.transform=strVal;
		}
	}else{//2个参数   获取值
		val=obj.transform[attr];
		if(typeof val==='undefined'){
			if(attr=='scale'||attr=='scaleX'||attr=='scaleY'){
				val=1;
			}else{
				val=0;
			}
		}
		return val;//注意获取值一定要返回出来才能在控制台打印出来
	}
	
}
