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

	// 增加操作小图标
	$('.li-span').each(function(){
		$(this).append(' <span class="authority-ico"> '+
						'	<img class="edit-ico" src="/static/index/images/editauthority.png" alt="" title="修改">'+
						'	<img class="delete-ico" src="/static/index/images/deletauthority.png" alt="" title="删除">'+
						'	<img class="move-ico" src="/static/index/images/moveauthority.png" alt="" title="移动">'+
						'	<img class="order-ico" src="/static/index/images/orderingauthority.png" alt="" title="排序">'+
						'</span>')
	})

	$(document).on('mouseenter','.li-span',function(){
		$(this).children('.authority-ico').css('display','inline-block');
	})

	$(document).on('mouseleave','.li-span',function(){
		$(this).children('.authority-ico').css('display','none');
	})

	// 菜单点击收放
	$(document).on('click','.li-span',function(){
		$(this).parent().next('ul').toggle();
		if($(this).children('img').attr('src')=='/static/index/images/down.png'){
			$(this).children('img').attr('src','/static/index/images/packup.png');
		}else{
			$(this).children('img').attr('src','/static/index/images/down.png');
		}
		
	})

	// 添加权限
	$(document).on('click','.add-authority-s',function(){
		layer.open({
			closeBtn: 1,
            type: 2,
            title: "添加权限",
            area: ['702px', '505px'],
            shadeClose: true, //点击遮罩关闭
            content: addauthority,
            yes: function () {}
		})
	})

	// 修改权限
	$(document).on('click','.edit-ico',function(e){
		e.stopPropagation();
		layer.open({
			closeBtn: 1,
            type: 2,
            title: "修改权限",
            area: ['702px', '505px'],
            shadeClose: true, //点击遮罩关闭
            content: editauthority,
            yes: function () {}
		})
	})

	// 删除权限
	$(document).on('click','.delete-ico',function(e){
		e.stopPropagation();
		layer.open({
			type: 2,
			title: ["提示","font-weight:bold"],
			area: ['702px', '382px'],
			btn:['取消','确定'],
			btnAlign: 'c',
			closeBtn:1,
			shade:0.5,
			content: deletenotice,
			btn2:function(index,layero){
				// $(".layui-layer-btn0").unbind("click");//阻止重复提交
				layer.msg('ok',{time:1500},function(){
					layer.close(index);
				});
				
			}
		})
	})

	// 移动权限
	$(document).on('click','.move-ico',function(e){
		e.stopPropagation();
		layer.open({
			type: 2,
			title: "移动",
			area: ['702px', '300px'],
			shadeClose: true, //点击遮罩关闭
			content: moveauthority,
		  
		});
	})

	// 权限排序
	$(document).on('click','.order-ico',function(e){
		e.stopPropagation();
		var thatorder = $(this).parent().parent().prev('input');
		thatorder.focus();
	})

	// 双击排序 获取、失去焦点
	$(document).on('focus','.num-no',function(){
		$(this).css('border','1px solid grey');
	})

	$(document).on('blur','.num-no',function(){
		$('.num-no').css('border','0');
	})

	

});