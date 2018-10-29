layui.use(['layer', 'form','table','laydate'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
	form = layui.form;

	//左侧导航鼠标移入移出样式
	$(document).on('mouseenter','.left-nav ul li',function(){
		$(this).css('background-color','#ff4d7d');
		$(this).find('a').css('color','#ffffff');
	})
	$(document).on('mouseleave','.left-nav ul li',function(){
		$(this).css('background-color','#ffffff');
		$(this).find('a').css('color','#000000');
	})

	// 菜单点击收放
	$(document).on('click','.trangle-ico',function(){
		$(this).parent().parent().next('ul').toggle();
		if($(this).attr('src')=='/static/index/images/down.png'){
			$(this).attr('src','/static/index/images/packup.png');
		}else{
			$(this).attr('src','/static/index/images/down.png');
		}
		
	})

	form.on('submit(add-btn)',function(){
		layer.msg('账号添加成功',{time:1500},function(){
			window.location.href = accountmanage;
		})
	})




});