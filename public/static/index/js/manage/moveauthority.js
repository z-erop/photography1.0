layui.use(['layer', 'form', 'element', 'table'], function () {
    var layer = layui.layer,
        form = layui.form,
        table = layui.table,
        $ = layui.$,
        element = layui.element;

        $('.quxiao').on('click', function () { //取消
            var index = parent.layer.getFrameIndex(window.name);
            parent.layer.close(index);
        })
        //保存提交数据
        form.on('submit(sub_btn)', function (data) {
            layer.msg('移动成功',{time:1500},function(){
                var index = parent.layer.getFrameIndex(window.name);
                parent.layer.close(index);
            });
            return false;
            console.log(data.field)
            $.ajax({
                url: movesMenuDtc+'&pid='+data.field.pid,
                type: "get",
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
                        
                    }
                }
            });
            return false;
        });

})