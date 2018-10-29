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

    // 数据表格
    tableRender();
    //数据列表
    function tableRender(){
      table.render({
        elem: '#demo',
        size:'lg'
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
            ,{field: 'telephone', title: '账号',width:180,align:"center"}
            ,{field: 'name', title: '姓名', width:180,align:"center"}
            ,{field: 'sex', title: '性别',width:160,align:"center"}
            ,{field: 'position', title: '职务', width:160,align:"center"}
            ,{field: '', title: '状态',width:160,align:"center",templet:'#switch_stu'}
            ,{field: '', title: '操作', width:120,align:"center",templet:"#change_m"}
					
        ]],
        where:{
          
        }
        ,done:function(res){
            console.log(res);
        }
      });
    } 

    table.on('tool(table_test)',function(obj){
		var data = obj.data;
		var layEvent = obj.event; 
        console.log(data);
		if(layEvent === 'change_msg'){      //修改
			window.location.href = changeaccountmsg;
        }
        
        if(layEvent === 'switchTest'){      //启用，禁止

        }
	})


});