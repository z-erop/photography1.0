layui.use(['layer', 'form','table','laydate'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
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

	// 上部导航切换
	$(document).on('click','.ul-type li',function(){
		$(this).css('color','#ff4d7d');
		$(this).siblings().css('color','#000000');
		$('.ul-typechild').children().remove();
		if($(this).html()=="影视文化"){
			$('.ul-typechild').append('<li style="color:#ff4d7d;">全部</li>'+
									'<li>楼盘代理拍摄</li>'+
									'<li>个人宣传片</li>'+
									'<li>企业宣传片</li>'+
									'<li>微电影</li>'+
									'<li>婚纱照</li>'+
									'<li>纪录片</li>'+
									'<li>MV制作</li>');
		}else if($(this).html()=="活动策划"){
			$('.ul-typechild').append('<li style="color:#ff4d7d;">全部</li>'+
									'<li>企业活动策划</li>'+
									'<li>大小年会</li>'+
									'<li>婚礼策划</li>'+
									'<li>演唱会策划</li>');
		}else{
			$('.ul-typechild').append('<li style="color:#ff4d7d;">全部</li>'+
									'<li>书籍排版</li>'+
									'<li>杂志设计</li>'+
									'<li>包装设计</li>'+
									'<li>海报设计</li>');
		}
	})
	// 上部导航子菜单
	$(document).on('click','.ul-typechild li',function(){
		$(this).css('color','#ff4d7d');
		$(this).siblings().css('color','#000000');
	})


	//修改
	$(document).on('click','.change-content',function(){
		window.location.href = editworks;
		
	})

	//删除
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
							'<div class="item-record">'+
								'<span><img src="/static/index/images/browsedata.png" alt="">100</span>'+
								'<span><img src="/static/index/images/collectdata.png" alt="">100</span>'+
								'<span><img src="/static/index/images/commentdata.png" alt="">100</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="item-buttom">'+
						'<span class="change-content">修改</span>'+
						'<span class="delete-s">删除</span>'+
						'<span>著亨利 2018-04-30 发布</span>'+
					'</div>'+
				'</div>'
		)
	}

});