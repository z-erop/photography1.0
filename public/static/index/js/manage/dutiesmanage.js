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

    // 职务鼠标移入样式
    $(document).on('mouseenter','.duties-box ul li',function(){
        $(this).siblings().removeClass('li-active');
        $(this).siblings().children('img').remove();
        $(this).addClass('li-active');
        $(this).append('<img class="delete-ico" src="/static/index/images/deletpost.png" alt="">');
    })
    $(document).on('mouseleave','.duties-box ul li',function(){
        $(this).removeClass('li-active');
        $(this).children('img').remove();
    })

    //职务添加
    $('.add-btn').on('click',function(){
        var role_type=$('#role_type').val().trim();
        var duties_lis = $('.duties-box ul li');
        if(role_type == ''){
            layer.msg('职务名不能为空!');
            return false;
        }
        for(var i=0;i<duties_lis.length;i++){
            if(role_type == duties_lis[i].innerHTML.trim()){
                layer.msg('该职务已存在！');
                return false;
            }
        }
        $('.duties-box ul').append('<li>'+role_type+'</li>');
    })

    // 移出职务
    $(document).on('click','.delete-ico',function(){
        $(this).parent().remove();
    })

});