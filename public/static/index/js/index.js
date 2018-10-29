layui.use(['layer', 'form','table','laydate'], function(){
  var layer = layui.layer,
  table = layui.table,
  laypage = layui.laypage,
  $=layui.$,
  laydate = layui.laydate,
  form = layui.form;

  //时间选择切换
  // $('.login-chose').on('click',function(){
    laydate.render({
      elem: '#test2' //指定元素
      ,max:0
      ,showBottom:false
      ,eventElem:'#test1'
      ,trigger: 'click'
      ,theme:'#fcae14'
      ,ready: function(date){
        console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        // $('.transform-img').animate({'transform':'rotate(180deg)',
        //                             '-ms-transform':'rotate(180deg)', 
        //                             '-moz-transform':'rotate(180deg)',
        //                             '-webkit-transform':'rotate(180deg)',
        //                             '-o-transform':'rotate(180deg)'},function(){
                                      
        //                             })

                  $('.transform-img').css({'transform':'rotate(180deg)',
                          '-ms-transform':'rotate(180deg)', 
                          '-moz-transform':'rotate(180deg)',
                          '-webkit-transform':'rotate(180deg)',
                          '-o-transform':'rotate(180deg)'
                        })

        }
      ,done: function(value, date, endDate){
        console.log(value); //得到日期生成的值，如：2017-08-18
        console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}

        // $('.transform-img').animate({'transform':'rotate(0deg)',
        //                             '-ms-transform':'rotate(0deg)', 
        //                             '-moz-transform':'rotate(0deg)',
        //                             '-webkit-transform':'rotate(0deg)',
        //                             '-o-transform':'rotate(0deg)'})
                                          
              $('.transform-img').css({'transform':'rotate(0deg)',
                      '-ms-transform':'rotate(0deg)', 
                      '-moz-transform':'rotate(0deg)',
                      '-webkit-transform':'rotate(0deg)',
                      '-o-transform':'rotate(0deg)'
                    })
        var choseTime=date.year+'-'+date.month+'-'+date.date;
        var nowTime = new Date();
        var nowyear = nowTime.getFullYear();
        var nowmonth = nowTime.getMonth()+1;
        var nowday = nowTime.getDate();
        if(date.year==nowyear&&date.month==nowmonth&&date.date==nowday){
            console.log('今日登陆');
            $('.login-chose').html('今日登陆<img class="transform-img" src="/static/index/images/down.png" alt="">');
          }else{
            $('.login-chose').html(choseTime+'<img class="transform-img" src="/static/index/images/down.png" alt="">');
          }
        }
      });
  // })


  tableRender();
  //数据列表
  function tableRender(){
    table.render({
      elem: '#demo'
      ,height: 517
      ,url: '/static/json/test.json' //数据接口
      ,page: {
        layout:['count', 'prev', 'page', 'next'],
        groups:3,
        theme:'#ff4d7d',
        limit:10,
        
      }
      ,skin:'line',
      cols: [[ //表头
        {field: 'name', title: '姓名', width:321,align:"center"}
        ,{field: 'telephone', title: '电话', width:480,align:"center"}
        ,{field: 'time', title: '登录时间', width:397,align:"center"}
      ]],
      where:{
        
      }
    });
  } 
  

  

});