layui.use(['layer', 'form','table','laydate','upload','rate'], function(){
	var layer = layui.layer,
	table = layui.table,
	$ = layui.$,
	laypage = layui.laypage,
	laydate = layui.laydate,
	upload = layui.upload,
	rate = layui.rate,
	form = layui.form;

	//图片上传
	upload.render({
		elem:"#add_pic",
		url:'',
		accept:'images',
		acceptMime:'image/*',
		auto:false,
		bindAction:'.release-btn',
		multiple:true,
		number:8,
		choose:function(obj){
			obj.preview(function(index,file,result){
				$('.picBox').append('<div class="pic-item"><img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img item-img">'+
				'<img src="/static/index/images/deletphoto.png" class="delete-pic"></div>');
			})
		},
		before:function(obj){
			
		},
		done:function(res,idnex,upload){
			layer.msg('上传完成')
		},
		error:function(){
			layer.msg('上传错误')
		}
	})

	// 图片删除
	$(document).on('mouseenter','.pic-item',function(){
		$(this).children('.delete-pic').css('display','block');
	})
	$(document).on('mouseleave','.pic-item',function(){
		$('.delete-pic').css('display','none');
	})
	$(document).on('click','.delete-pic',function(){
		$(this).parent().remove();
	})

	//视频上传
	upload.render({
		elem:"#add_video",
		url:'',
		accept:'video',
		auto:false,
		bindAction:'.release-btn',
		choose:function(obj){
			if($('.video-lis').length>0){
				layer.msg('只能上传一个视频',{time:1500},function(){
					return false;
				})
			}else{
				obj.preview(function(index,file,result){
					if(file.size>0){
						layer.msg('上传中请稍后')
					}
					var url = URL.createObjectURL(file)
					if(url != null){
						$('.videoBox').append('<div class="video-item video-lis"><video width="267" height="186" controls src="'+ url +'" alt="'+ file.name +'" class="layui-upload-img"></video> </div>');	
					}

					// var timesRun = 0;
					// var timer = setInterval(function(){
					// 	timesRun +=1;
					// 	if(timesRun === 1){
					// 		clearInterval(timer);
					// 	}
					// 	entity.contentLen = parseInt()
					// })
				})
			}
			
		}
	})

	//封面上传
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
				layer.msg('封面只能有一张图片',{time:1500},function(){
					return false;
				})
			}else{
				obj.preview(function(index,file,result){
					$('#add_feng').html('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img item-img">');
				})
			}
		}
	})

	//左侧导航鼠标移入移出样式
	$(document).on('mouseenter','.left-nav ul li',function(){
		$(this).css('background-color','#ff4d7d');
		$(this).find('a').css('color','#ffffff');
	})
	$(document).on('mouseleave','.left-nav ul li',function(){
		$(this).css('background-color','#ffffff');
		$(this).find('a').css('color','#000000');
	})

	// 发布作品
	form.on('submit(release-btn)',function(){
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

	// 预览
	form.on('submit(preview-btn)',function(){
		layer.open({
			type: 2,
			title: ["预览","font-weight:bold"],
			area: ['1300px', '782px'],
			shadeClose:true,
			shade:0.5,
			content: previewworks,
			btn1:function(index,layero){
				// $(".layui-layer-btn0").unbind("click");//阻止重复提交
				layer.close(index);
				return false;
			}
		})
	})

	// 存草稿
	form.on('submit(save-draft)',function(){
		layer.msg('已存为草稿，可在草稿里查看',{time:1500},function(){
			 
		});
	})

	//下拉添加成员
	form.on('select(team-menmber)', function(data){
		console.log(data.elem); //得到select原始DOM对象
		console.log(data.value); //得到被选中的值
		console.log(data.othis); //得到美化后的DOM对象
		var value = $(this).html();
		$('.team-member-div').append('<span class="item-p">'+value+' <img class="item-i" src="/static/index/images/delet.png" alt=""> </span>');
		console.log (value);
	});  

	// 删除团队成员
	$(document).on('click','.item-i',function(){
		$(this).parent().remove();
	})


});