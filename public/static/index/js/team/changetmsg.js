layui.use(['layer', 'form','table','laydate','upload'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
	upload = layui.upload,
	form = layui.form;

    //头像上传
	upload.render({
		elem:"#add_feng",
		url:'',
		accept:'images',
		acceptMime:'image/*',
		auto:false,
		bindAction:'.release-btn',
		multiple:false,
		number:1,
		choose:function(obj){
			if($('.pic-item-f').length>1){
				layer.msg('头像只能有一张图片',{time:1500},function(){
					return false;
				})
			}else{
				obj.preview(function(index,file,result){
					$('#add_feng').html('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">');
				})
			}
			
		}
	})

	//左侧导航鼠标移入移出样式
	$(document).on('mouseenter','.left-nav ul li',function(){
		$(this).css('background-color','#ff4d7d');
		$(this).find('a').css('color','#ffffff');
	});
	$(document).on('mouseleave','.left-nav ul li',function(){
		$(this).css('background-color','#ffffff');
		$(this).find('a').css('color','#000000');
	});
    
    // 返回上一级
    $('.return-r').on('click',function(){
        window.location.href =  teammanage;
    });
	//渲染生日时间选择器
	laydate.render({
		elem: '#birthday_date' //指定元素
        ,max:0
        ,theme:'#fcae14'
        ,showBottom:false
        
		,done: function(value, date, endDate){
			
		}
	});

    //渲染入行时间选择器
	laydate.render({
        elem: '#ru_date' //指定元素
        ,type: 'month'
        ,max:0
        ,theme:'#fcae14'
        ,showBottom:true
		,done: function(value, date, endDate){
			var num=1;
			var nowyear = new Date().getFullYear();
			var nowMonth =new Date().getMonth();  
			var allMonth = ((nowyear-date.year)*12+nowMonth+num-date.month)/12 ;
			var workyear = allMonth.toFixed(1);
			console.log(workyear);
			$('.work-year').html('工作年限：'+workyear+'年');
			console.log(date);
		}
	});

	// 保存并修改
	form.on('submit(save-btn)',function(){
		layer.msg('修改成功',{time:1500},function(){
			window.location.href = teammanage;
		})

	})

	// 取消
	$('.cancel-btn').on('click',function(){
		window.location.href = teammanage;
	})
});