layui.use(['layer', 'form', 'element', 'table'], function () {
    var layer = layui.layer,
        form = layui.form,
        table = layui.table,
        element = layui.element,
        $ = layui.$;
    //限制菜单名长度
    $('.menuNameIpt').on("keydown",function(){
        if (this.value.length>=14){
            $(this).val($(this).val().substr(0,10));
        }
    });
    
    //选择控制器触发
    form.on('select(control-name)',function (data) {  
        return false;
        var controlname=data.value;
        console.log(controlname);
        $.get(
            getAction+'?controller='+controlname+'&model=index',
            function (res) {
                console.log(res);
                $('.method-name').children('option').remove();
                $('.method-name').append('<option>请选择</option>');
                for(var i=0;i<res.data.length;i++){
                    $('.method-name').append('<option  value="'+res.data[i]+'">'+res.data[i]+'</option>');
                }
                form.render('select');
            }
        )
    
    })

    $('.quxiao').on('click', function () { //取消
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    })
    //确认 提交
    form.on('submit(sub_btn)', function (data) {
        if($('.menuNameIpt').val().length>=10){
            layer.msg('菜单名过长');
            return false;
        };
        console.log(data.field);
        data.field.id='';
        return false;
        $.ajax({
            url: dtcMenuAdd,
            type: "POST",
            data: data.field,
            success: function (resp) {
                console.log(resp);
                if (resp.status == 200) {
                    layer.msg(resp.txt, {
                        time: 1200,
                        offset: 'auto'
                    }, function () {
                        parent.window.location.reload();
                    });
                } else {
                    layer.msg(resp.txt, {
                        time: 1200
                    });
                    setTimeout("location.reload()",1200);
                }
            }
        });
        return false;
    });

})