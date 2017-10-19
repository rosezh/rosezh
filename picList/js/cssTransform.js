/**
 * Created by aflyi on 2017/5/8.
 */

function cssTransform( obj,attr,val ) {
    if( !obj.transform ){
        obj.transform = {};
    }
    if( arguments.length === 3 ){  // 3个实参 设置
        obj.transform[attr] = val;
        var strVal = '';
        for ( var key in  obj.transform){
            switch (key){
                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                case 'skewX':
                case 'skewY':
                    strVal += key + '('+obj.transform[key]+'deg) ';
                    break;
                case 'translate':
                case 'translateX':
                case 'translateY':
				case 'translateZ':
                    strVal += key + '('+obj.transform[key]+'px) ';
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    strVal +=  key +'('+obj.transform[key]+') ';
                    break;
            }
            obj.style.WebkitTransform = obj.style.transform =  strVal;
        }
    }else {  // 2个实参 获取
        val = obj.transform[attr];
        if ( typeof val === 'undefined'){
            if( attr === 'scale' || attr === 'scaleX' || attr === 'scaleY') {
                val = 1;
            }else{
                val = 0;
            }
        }
        return val;
    }


}


function getDisScale( point1,point2 ){
	var disX = point1.pageX - point2.pageX;
	var disY = point1.pageY - point2.pageY;
	//return Math.sqrt( Math.pow(disX,2) + Math.pow(disY,2) );
	return Math.sqrt( disX*disX + disY*disY )
}

function gesDeg( point1,point2 ){
	var disX = point1.pageX - point2.pageX;
	var disY = point1.pageY - point2.pageY;

	return Math.atan2( disY,disX )*180/Math.PI;
}

// 多指事件
function gesture(obj,callBack){//这里要注意手指放在谁上面，对象就是谁
	var isGesture = false;
	var startPoint = {};
	obj.addEventListener('touchstart',function(e){
		var touches = e.touches;
		if( touches.length >=2 ){  // 说明是多指
			isGesture = true;
			var pointDis = getDisScale( touches[0],touches[1] );
			var pointDeg = gesDeg( touches[0],touches[1] );
			startPoint = { dis :pointDis,deg : pointDeg};

			if( callBack&&callBack.start ){
				callBack.start.call(obj);
			}
		}
	});
	obj.addEventListener('touchmove',function(e){
		var touches = e.touches;
		if( touches.length >=2 && isGesture ){  // 说明是多指
			if( callBack&&callBack.change ){
				var nowPoint = getDisScale( touches[0],touches[1] );
				var pointDeg = gesDeg( touches[0],touches[1] );
				e.scale = nowPoint / startPoint.dis;
				e.rotation = pointDeg - startPoint.deg;
				callBack.change.call(obj,e);
			}
		}
	});
	obj.addEventListener('touchend',function(e){
		var touches = e.touches;
		if( isGesture ){
			if( callBack&&callBack.end ){
				callBack.end.call(obj,e);
			}
		}
		isGesture = false;
	});
}