layui.use(['layer', 'form','table','laydate','upload'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
	upload = layui.upload,
    form = layui.form;
    
    //渲染时间选择器
    laydate.render({
		elem: '#test1' //指定元素
		,max:0
		,theme:'#fcae14'
		,showBottom:false
		,done: function(value, date, endDate){
			
		}
	});

	//左侧导航鼠标移入移出样式
	$(document).on('mouseenter','.left-nav ul li',function(){
		$(this).css('background-color','#ff4d7d');
		$(this).find('a').css('color','#ffffff');
	})
	$(document).on('mouseleave','.left-nav ul li',function(){
		$(this).css('background-color','#ffffff');
		$(this).find('a').css('color','#000000');
	})

	// 编辑
	$(document).on('click','.change-m',function(){
		window.location.href = editdraft;
	})

	// 删除
	$(document).on('click','.delete-s',function(){
		var that = $(this);
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
					that.parent().parent().remove();
					layer.close(index);
				});
				
			}
		})
	})

	// 发布
	$(document).on('click','.release-s',function(){
		layer.open({
			type: 2,
			title: ["提示","font-weight:bold"],
			area: ['702px', '382px'],
			btn:['取消','确定'],
			btnAlign: 'c',
			closeBtn:1,
			shade:0.5,
			content: releasenotice,
			btn2:function(index,layero){
				// $(".layui-layer-btn0").unbind("click");//阻止重复提交
				layer.msg('发布成功，可到作品管理里面进行管理',{time:1500},function(){
					layer.close(index);
				});
				
			}
		})
	})

	var worksDivBox=$('.works-div-box')
	for(var i=0;i<8;i++){
		$('.works-div-box').append('<div class="item-box">'   +
					'<div class="item-img">'     +
						'<img src="/static/index/images/th (1).jpeg" alt="">'  +
					'</div>'   +
					'<div class="item-info">'   +
						'<div class="item-info-left">'  +
							'<img class="user-pic" src="/static/index/images/th (3).jpeg" alt="">'   +
							'<span class="user-name">河冰</span>'+
						'</div>'+
						'<div class="item-info-right">'+
							'<div class="item-right-title">'+
								'<span>标题极简混搭</span><span class="item-price">￥12000</span>'+
							'</div>'+
							// '<div class="item-record">'+
							// 	'<span><img src="/static/index/images/browsedata.png" alt="">100</span>'+
							// 	'<span><img src="/static/index/images/collectdata.png" alt="">100</span>'+
							// 	'<span><img src="/static/index/images/commentdata.png" alt="">100</span>'+
							// '</div>'+
						'</div>'+
					'</div>'+
					'<div class="item-buttom">'+
						'<span class="change-m">编辑</span>'+
						'<span class="delete-s">删除</span>'+
						'<span class="release-s">发布</span>'+
						'<span>著亨利 2018-04-30 创建</span>'+
					'</div>'+
				'</div>'
		)
	}



});