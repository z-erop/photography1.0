layui.use(['layer', 'form','table','laydate'], function(){
    var layer = layui.layer,
    table = layui.table,
    laypage = layui.laypage,
    $=layui.$,
    laydate = layui.laydate,
    form = layui.form;
  
          //导航样式
      $(document).on('mouseover','.nav-div-box ul li a',function(){
            $(this).addClass('nav-active');
            $(this).parent().siblings().children().removeClass('nav-active');
      })
      //个人中心 鼠标移入移出
      $('.user-div').on('mouseenter',function(){
            $(this).css({'background-color':'#333333'});
            $('.user-info').css('display','block');
      })
      $('.user-div').on('mouseleave',function(){
            $(this).css({'background-color':'#ff4d7d'});
            $('.user-info').css('display','none');
      })
      //修改密码
      $('.change-pwd').on('click',function(){
          layer.open({
              type: 2,
              title: ["修改","font-weight:bold"],
              area: ['702px', '459px'],
              btn:['取消','确定'],
              btnAlign: 'c',
              closeBtn:1,
              shade:0.5,
              content: changepwd,
              btn2:function(index,layero){
                  $(".layui-layer-btn0").unbind("click");//阻止重复提交
                  layer.msg('修改成功了');
                  layer.close(index);
              }
          })
      })
      //退出
      $('.exit').on('click',function(){
          layer.msg('退出成功',{time:1500},function(){
              window.location.href = login;
          });
      })
  
  
  })
  