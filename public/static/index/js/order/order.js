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

	tableRender();
	//数据列表
	function tableRender(){
		table.render({
			elem: '#demo'
			,height: 720
			,size:'lg'
			,url: '/static/json/test.json' //数据接口
			,page: {
			layout:['count', 'prev', 'page', 'next'],
			groups:3,
			theme:'#ff4d7d',
			limit:10,
			
			}
			,skin:'line',
            cols: [[ //表头
            {field: 'id', title: '#', width:38,align:"center"}
			,{field: 'name', title: '预约人', width:108,align:"center"}
			,{field: 'telephone', title: '电话', width:128,align:"center"}
            ,{field: 'time', title: '预约时间', width:180,align:"center"}
            ,{field: 'name', title: '预约备注', width:118,align:"center"}
			,{field: 'telephone', title: '预约来源', width:183,align:"center"}
            ,{field: 'status', title: '联系状态', width:180,align:"center", templet:'#contact_status'}
            ,{field: 'time', title: '失败原因', width:189,align:"center"}
			]],
			where:{
			
			}
		});
	} 
	// 联系状态修改样式
	$(document).on('mouseover','.chose-c-s',function(){
		$(this).css('display','none');
		$(this).next().css('display','block');
	})
	$(document).on('mouseleave','.chose-ico',function(){
		$(this).css('display','none');
		$(this).prev().css('display','block');
	})
	
	table.on('tool(test)', function(obj){ 
		var data = obj.data; 
		var layEvent = obj.event; 
		var tr = obj.tr; 
		var id = obj.data.id; 
		
		if(layEvent === 'success_c'){ 	//联系成功
			 
			layer.open({
				type: 2,
				title: ["提示","font-weight:bold"],
				area: ['702px', '382px'],
				btn:['取消','确定'],
				btnAlign: 'c',
				closeBtn:1,
				shade:0.5,
				content: contactsuccess,
				btn2:function(index,layero){
					$(".layui-layer-btn0").unbind("click");//阻止重复提交
					layer.msg('ok',{time:1500},function(){
						layer.close(index);
					});
					
				}
			})
		} else if(layEvent === 'fail_c'){ //联系失败  
			layer.open({
				type: 2,
				title: ["提示","font-weight:bold"],
				area: ['702px', '382px'],
				btn:['取消','确定'],
				btnAlign: 'c',
				closeBtn:1,
				shade:0.5,
				content: contactfail,
				btn2:function(index,layero){
					// $(".layui-layer-btn0").unbind("click");//阻止重复提交
					var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象
					var reason = $.trim(iframeWin.document.getElementById("reason").value);
					var data = {};
					if(!reason){
						layer.msg("请输入失败原因",{time:1500},function () {  
							iframeWin.document.getElementById("reason").focus();
						});
						
					}else{
						data.id = id;
						data.why = reason;
						var load1 = layer.load(1);
						layer.msg('yes',{time:1500},function(){
							layer.close(load1);
							layer.close(index);
						})
						
					}

				}
			
			})
			
			
			//同步更新缓存对应的值
			obj.update({
			username: '123'
			,title: 'xxx'
			});
		}
	});
});