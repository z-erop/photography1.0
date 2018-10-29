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

	// 修改成员信息
	$(document).on('click','.change-msg',function(){
		window.location.href = changetmsg; 
	})

	// 删除成员
	$(document).on('click','.delete',function(){
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
	var worksDivBox=$('.works-div-box');
	for(var i=0;i<8;i++){
		$('.works-div-box').append('<div class="item-box">'   +
					'<div class="item-img">'     +
						'<img src="/static/index/images/th (1).jpeg" alt="">'  +
					'</div>'   +
					'<div class="item-info">'   +
						'<div class="item-info-left">'  +
							'<img class="user-pic" src="/static/index/images/th (3).jpeg" alt="">'   +
							'<span class="user-name">河冰</span>'+
							'<span class="authod_z">策划师 <span class="authod_sex">男</span></span>'+
							'<span class="authod_js">'+
									'个人描述或励志宣言个人描述或励志宣言个人描述或励志宣言个人描述或励志宣言个人描述或励志宣'+
							'</span>'+
						'</div>'+
					'</div>'+
					'<div class="item-buttom">'+
						'<span class="change-msg">修改</span>'+
						'<span class="delete">删除</span>'+
					'</div>'+
				'</div>'
		)
	}

});