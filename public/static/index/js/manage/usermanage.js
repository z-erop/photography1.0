layui.use(['layer', 'form','table','laydate'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
	form = layui.form;

	//左侧导航鼠标移入移出样式
	$(document).on('mouseenter','.left-nav ul li',function(){
		// $(this).css('background-color','#ff4d7d');
		$(this).find('a').css('color','#ffffff');
	})
	$(document).on('mouseleave','.left-nav ul li',function(){
		// $(this).css('background-color','#ffffff');
		$(this).find('a').css('color','#000000');
	})
    
    // 数据表格
    tableRender();
    //数据列表
    function tableRender(){
     	table.render({
			elem: '#demo'
			,height: 757
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
				,{field: 'name', title: '姓名', width:180,align:"center"}
				,{field: 'telephone', title: '电话',width:180,align:"center"}
				,{field: 'time', title: '备注', width:480,align:"center"}
				,{field: '', title: '操作', width:120,align:"center",templet:"#change_m"}
						
			]],
			where:{
			
			}
     	});
    } 

	table.on('tool(table_test)',function(obj){
		var data = obj.data;
		var layEvent = obj.event; 

		if(layEvent === 'change_msg'){   //修改
			layer.open({
				type: 2,
				title: ["修改","font-weight:bold"],
				area: ['702px', '558px'],
				btn:['取消','确定'],
				btnAlign: 'c',
				closeBtn:1,
				shade:0.5,
				content: changeinfo,
				btn2:function(index,layero){
					$(".layui-layer-btn0").unbind("click");//阻止重复提交
					layer.msg('修改成功了');
					layer.close(index);
				}
			})
		}
	})


});