layui.use(['layer', 'form','table','laydate'], function(){
    var layer = layui.layer,
    table = layui.table,
    laypage = layui.laypage,
    $=layui.$,
    laydate = layui.laydate,
    form = layui.form;

    // 登陆
    $('.login-btn').on('click',function(){
        window.location.href = index;
        return false;
    })
})