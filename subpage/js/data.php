<?php
	header('content-type:text/html;charset="utf-8"');
	$setData = array(
		array('bigSrc'=>'img/clothes1.jpg','smallSrc'=>'img/clothes1-1.png','price'=>'5.0','title'=>'韩都衣舍HSTYLE女装春装专场','des'=>'韩版时尚简约立领呢大衣'),
		array('bigSrc'=>'img/clothes2.jpg','smallSrc'=>'img/clothes2-2.png','price'=>'5.5','title'=>'乔伊思女装专场','des'=>'韩版刺绣七分袖衬衫'),
		array('bigSrc'=>'img/clothes3.jpg','smallSrc'=>'img/clothes3-3.png','price'=>'6.8','title'=>'Amii女装专场','des'=>'韩版长款奢华呢大衣'),
		array('bigSrc'=>'img/clothes4.jpg','smallSrc'=>'img/clothes4-4.png','price'=>'6.5','title'=>'沫晗依美女装专场','des'=>'韩版连帽修身直筒羽绒服'),
		array('bigSrc'=>'img/clothes5.jpg','smallSrc'=>'img/clothes5-5.png','price'=>'4.3','title'=>'东方骆驼情侣装专场','des'=>'韩版抽腰长款大毛领羽绒服'),
		array('bigSrc'=>'img/clothes6.jpg','smallSrc'=>'img/clothes6-6.png','price'=>'4.0','title'=>'OSA女装专场','des'=>'韩版小兔子贴布呢大衣'),
		array('bigSrc'=>'img/clothes7.jpg','smallSrc'=>'img/clothes7-7.png','price'=>'8.8','title'=>'艾蓓怡ibelieveyou女装专场','des'=>'韩版小猫咪印花无袖连衣裙'),
		array('bigSrc'=>'img/clothes8.jpg','smallSrc'=>'img/clothes8-8.png','price'=>'7.8','title'=>'艾蓓怡ibelieveyou女装专场','des'=>'韩版貉子毛领中长款羽绒服'),
		array('bigSrc'=>'img/clothes9.jpg','smallSrc'=>'img/clothes9-9.png','price'=>'3.6','title'=>'韩版修身连衣裙','des'=>''),
		array('bigSrc'=>'img/clothes10.jpg','smallSrc'=>'img/clothes10-10.png','price'=>'5.4','title'=>'美特斯邦威Metersbonwe女装专场','des'=>'时髦春装早打算，跨专场满298减50，上不封顶'),
		array('bigSrc'=>'img/clothes11.jpg','smallSrc'=>'img/clothes11-11.png','price'=>'2.2','title'=>'韩版貉子毛领短款羽绒服','des'=>'唐狮tonlion女装专场'),
		array('bigSrc'=>'img/clothes12.jpg','smallSrc'=>'img/clothes12-12.png','price'=>'1.8','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),

		array('bigSrc'=>'img/clothes13.jpg','smallSrc'=>'img/clothes13-13.jpg','price'=>'0.7','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),
		array('bigSrc'=>'img/clothes14.jpg','smallSrc'=>'img/clothes14-14.png','price'=>'1.1','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),
		array('bigSrc'=>'img/clothes15.jpg','smallSrc'=>'img/clothes15-15.png','price'=>'1','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),

		array('bigSrc'=>'img/clothes1.jpg','smallSrc'=>'img/clothes1-1.png','price'=>'1.0','title'=>'韩版七分裤小脚裤','des'=>'苏醒的乐园女装专场'),
		array('bigSrc'=>'img/clothes2.jpg','smallSrc'=>'img/clothes2-2.png','price'=>'4.8','title'=>'韩版精致刺绣雪纺衫','des'=>'美都汇MODEWE女装专场'),
		array('bigSrc'=>'img/clothes3.jpg','smallSrc'=>'img/clothes3-3.png','price'=>'2.5','title'=>'韩版七分裤小脚裤','des'=>'巨圣JUUSNN女鞋专场'),
		array('bigSrc'=>'img/clothes4.jpg','smallSrc'=>'img/clothes4-4.png','price'=>'6.8','title'=>'韩版双排扣毛呢外套','des'=>'【2017春新款】衬衫领假两件连衣裙皮粉色'),
		array('bigSrc'=>'img/clothes5.jpg','smallSrc'=>'img/clothes5-5.png','price'=>'3.0','title'=>'酒红色 韩版修身连衣裙','des'=>'韩版时尚套头毛针织衫'),
		array('bigSrc'=>'img/clothes6.jpg','smallSrc'=>'img/clothes6-6.png','price'=>'3.5','title'=>'韩版貉子毛领中长款羽绒服','des'=>'天蓝色钉钻短袖上衣+时尚短裙套装'),
		array('bigSrc'=>'img/clothes7.jpg','smallSrc'=>'img/clothes7-7.png','price'=>'7.8','title'=>'黑色 韩版时尚中长款印花马甲','des'=>'黑色 韩版无领中长款风衣外套'),
		array('bigSrc'=>'img/clothes8.jpg','smallSrc'=>'img/clothes8-8.png','price'=>'2.4','title'=>'红色 韩版修身毛领呢大衣','des'=>'紫色 韩版修身镂空长款针织衫'),
		array('bigSrc'=>'img/clothes9.jpg','smallSrc'=>'img/clothes9-9.png','price'=>'1.6','title'=>'粉色 韩版时尚印花连衣裙','des'=>'韩版修身打底T恤黑色'),
		array('bigSrc'=>'img/clothes10.jpg','smallSrc'=>'img/clothes10-10.png','price'=>'6.2','title'=>'黑色 时尚修身小脚裤','des'=>'韩都衣舍HSTYLE女装春装专场'),
		array('bigSrc'=>'img/clothes11.jpg','smallSrc'=>'img/clothes11-11.png','price'=>'4.6','title'=>'韩版时尚印花短袖T恤','des'=>'粉色 韩版修身貉子毛领中长款羽绒服'),
		array('bigSrc'=>'img/clothes12.jpg','smallSrc'=>'img/clothes12-12.png','price'=>'8.2','title'=>'黑色 直筒连帽牛角扣大毛领羽绒服','des'=>'【2017春新款】趣味衬衫短裙套装蓝色'),
		array('bigSrc'=>'img/clothes13.jpg','smallSrc'=>'img/clothes13-13.jpg','price'=>'0.7','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),
		array('bigSrc'=>'img/clothes14.jpg','smallSrc'=>'img/clothes14-14.png','price'=>'1.1','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),
		array('bigSrc'=>'img/clothes15.jpg','smallSrc'=>'img/clothes15-15.png','price'=>'1','title'=>'韩版精致刺绣雪纺衫','des'=>'纯色韩版连帽羽绒服'),

		array('bigSrc'=>'img/clothes3.jpg','smallSrc'=>'img/clothes3-3.png','price'=>'2.5','title'=>'酒红色 韩版木耳领修身连衣裙','des'=>'韩版貉子毛领中长款羽绒服'),
		array('bigSrc'=>'img/clothes4.jpg','smallSrc'=>'img/clothes4-4.png','price'=>'6.8','title'=>'沫晗依美女装专场','des'=>'韩版抽腰长款大毛领羽绒服'),
		array('bigSrc'=>'img/clothes5.jpg','smallSrc'=>'img/clothes5-5.png','price'=>'3.0','title'=>'韩版七分裤小脚裤','des'=>'【2017春新款】衬衫领假两件连衣裙皮粉色'),
		array('bigSrc'=>'img/clothes6.jpg','smallSrc'=>'img/clothes6-6.png','price'=>'3.5','title'=>'纯色韩版连帽羽绒服','des'=>'韩版貉子毛领短款羽绒服'),
		array('bigSrc'=>'img/clothes7.jpg','smallSrc'=>'img/clothes7-7.png','price'=>'7.8','title'=>'韩版小兔子贴布呢大衣','des'=>'韩版时尚印花连衣裙'),
		array('bigSrc'=>'img/clothes8.jpg','smallSrc'=>'img/clothes8-8.png','price'=>'2.4','title'=>'韩版时尚简约立领呢大衣','des'=>'韩都衣舍HSTYLE女装春装专场'),
		array('bigSrc'=>'img/clothes1.jpg','smallSrc'=>'img/clothes1-1.png','price'=>'1.0','title'=>'艾蓓怡ibelieveyou女装专场','des'=>'韩版抽腰长款大毛领羽绒服'),
		array('bigSrc'=>'img/clothes2.jpg','smallSrc'=>'img/clothes2-2.png','price'=>'4.8','title'=>'韩版木耳领修身连衣裙','des'=>'【2017春新款】衬衫领假两件连衣裙皮粉色'),
		array('bigSrc'=>'img/clothes3.jpg','smallSrc'=>'img/clothes3-3.png','price'=>'2.5','title'=>'沫晗依美女装专场','des'=>'韩版抽腰长款大毛领羽绒服'),
		array('bigSrc'=>'img/clothes4.jpg','smallSrc'=>'img/clothes4-4.png','price'=>'6.8','title'=>'韩版时尚印花连衣裙','des'=>'韩版小兔子贴布呢大衣'),
	);

	echo json_encode($setData);
?>
