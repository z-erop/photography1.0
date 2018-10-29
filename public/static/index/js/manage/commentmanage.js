layui.use(['layer', 'form','table','laydate','rate'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
    laydate = layui.laydate,
    rate = layui.rate,
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

    // 时间筛选渲染
    laydate.render({
        elem:'#chose_time',
        range:'~'

    })

    // 星星评分渲染
    rate.render({
        elem:'.u-comment-r',
        readonly:'true',
        length:5,
        value:5
    })

    // 操作图标展示
    $(document).on('mouseenter','.msgbox1',function(){
        $('.no-rep-ico-span').css('display','none');
        $(this).find('.no-rep-ico-span').css('display','block');
    })
    $(document).on('mouseleave','.msgbox1',function(){
        $('.no-rep-ico-span').css('display','none');
    })

    $(document).on('mouseenter','.rep-msgbox',function(){
        $('.no-rep-ico-span').css('display','none');
        $(this).find('.no-rep-ico-span').css('display','block');
    })
    $(document).on('mouseleave','.rep-msgbox',function(){
        $('.no-rep-ico-span').css('display','none');
    })

    // 评论外网同步
    $(document).on('click','.yun-ico',function(){
        if($(this).attr('src')=='/static/index/images/cloudsynchronization.png'){
             $(this).attr('src','/static/index/images/cloudsynchronizationselectse.png');
        }else{
            $(this).attr('src','/static/index/images/cloudsynchronization.png');
        }
       
        layer.msg('外网同步')
    })
    // 回复评论
    $(document).on('click','.reply-ico',function(){
        // $(this).parent().parent().parent().next().css('display','block');
        // $(this).parent().parent().parent().next().find('textarea').focus();
        $(this).css('display','none');
        $(this).parent().parent().parent().after('<div class="reply-msgbox"  >'+
                                                    '<div class="rep-box">'+
                                                        '<div class="rep-msg-c">'+
                                                            '<div class="reply-c-box">'+
                                                                '<div class="rep-textarea">'+
                                                                    '<textarea class="rep-txt" name="" placeholder="输入你的回复......"></textarea>'+
                                                               ' </div>'+
                                                               ' <div class="rep-btn-box">'+
                                                                    '<button class="cancel">取消</button>'+
                                                                    '<button class="queren">确定</button>'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                   ' </div>'+
                                                '</div>');

        $(this).parent().parent().parent().parent().find('.rep-txt').focus();                                    
        // layer.msg('评论回复')
    })
    //删除
    $(document).on('click','.delete-ico',function(){
        layer.msg('删除评论')
    })

});