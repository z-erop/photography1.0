<?php
/**
 * 测试
 * Created by PhpStorm.
 * User: 朱佩
 * Date: 2018/10/8
 * Time: 17:39
 */

namespace app\index\controller;

use think\Controller;

class Test extends Controller
{
    /**
     * @auth 朱佩 18-10-8
     * 测试页面 首页
     */
    public function index()
    {
        return $this->fetch('index/index');
    }

    /**
     * @auth 朱佩 18-10-9
     * 测试页面 作品-作品管理-页面
     */
    public function worksmanage()
    {
        return $this->fetch('works/worksmanage');
    }

    /**
     * @auth 朱佩 18-10-9
     * 测试页面 作品-上传作品-页面
     */
    public function uploadworks()
    {
        return $this->fetch('works/uploadworks');
    }

     /**
     * @auth 朱佩 18-10-11
     * 测试页面 作品-草稿-页面
     */
    public function worksdraft()
    {
        return $this->fetch('works/worksdraft');
    }

    /**
     * @auth 朱佩 18-10-11
     * 测试页面 团队-团队管理-页面
     */
    public function teammanage()
    {
        return $this->fetch('team/teammanage');
    }

    /**
     * @auth 朱佩 18-10-11
     * 测试页面 团队-成员添加-页面
     */
    public function addpeople()
    {
        return $this->fetch('team/addpeople');
    }

     /**
     * @auth 朱佩 18-10-11
     * 测试页面 团队-预约-页面
     */
    public function order()
    {
        return $this->fetch('order/order');
    }

    /**
     * @auth 朱佩 18-10-12
     * 测试页面 团队-预约-联系成功-弹窗
     */
    public function contactsuccess()
    {
        return $this->fetch('order/contactsuccess');
    }

    /**
     * @auth 朱佩 18-10-12
     * 测试页面 团队-预约-联系失败-弹窗
     */
    public function contactfail()
    {
        return $this->fetch('order/contactfail');
    }

     /**
     * @auth 朱佩 18-10-12
     * 测试页面 团队-管理-用户管理-页面
     */
    public function usermanage()
    {
        return $this->fetch('manage/usermanage');
    }

    /**
     * @auth 朱佩 18-10-14
     * 测试页面 团队-管理-职务管理-页面
     */
    public function dutiesmanage()
    {
        return $this->fetch('manage/dutiesmanage');
    }

    /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-管理-账号管理-页面
     */
    public function accountmanage()
    {
        return $this->fetch('manage/accountmanage');
    }

    /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-管理-账号添加-页面
     */
    public function addaccount()
    {
        return $this->fetch('manage/addaccount');
    }

    /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-管理-权限管理-页面
     */
    public function authoritymanage()
    {
        return $this->fetch('manage/authoritymanage');
    }

    /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-管理-用户管理-修改信息-弹窗
     */
    public function changeinfo()
    {
        return $this->fetch('manage/changeinfo');
    }

    /**
     * @auth 朱佩 18-10-15
     * 测试页面 修改密码-弹窗
     */
    public function changepwd()
    {
        return $this->fetch('public/changepwd');
    }

     /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-修改团队成员信息-弹窗
     */
    public function changetmsg()
    {
        return $this->fetch('team/changetmsg');
    }

     /**
     * @auth 朱佩 18-10-15
     * 测试页面 团队-删除提示-弹窗
     */
    public function deletenotice()
    {
        return $this->fetch('team/deletenotice');
    }

     /**
     * @auth 朱佩 18-10-16
     * 测试页面 作品-发布提示-弹窗
     */
    public function releasenotice()
    {
        return $this->fetch('works/releasenotice');
    }

    /**
     * @auth 朱佩 18-10-16
     * 测试页面 管理-账号管理-修改-页面
     */
    public function changeaccountmsg()
    {
        return $this->fetch('manage/changeaccountmsg');
    }

    /**
     * @auth 朱佩 18-10-16
     * 测试页面 管理-作品上传-预览-页面
     */
    public function previewworks()
    {
        return $this->fetch('works/previewworks');
    }

    /**
     * @auth 朱佩 18-10-17
     * 测试页面 管理-评论审核-页面
     */
    public function commentmanage()
    {
        return $this->fetch('manage/commentmanage');
    }

    /**
     * @auth 朱佩 18-10-19
     * 测试页面 管理-权限管理-添加权限-弹窗
     */
    public function addauthority()
    {
        return $this->fetch('manage/addauthority');
    }

    /**
     * @auth 朱佩 18-10-19
     * 测试页面 管理-权限管理-修改权限-弹窗
     */
    public function editauthority()
    {
        return $this->fetch('manage/editauthority');
    }

    /**
     * @auth 朱佩 18-10-19
     * 测试页面 管理-权限管理-移动权限-弹窗
     */
    public function moveauthority()
    {
        return $this->fetch('manage/moveauthority');
    }

     /**
     * @auth 朱佩 18-10-20
     * 测试页面 作品-修改作品-页面
     */
    public function editworks()
    {
        return $this->fetch('works/editworks');
    }
   
    /**
     * @auth 朱佩 18-10-20
     * 测试页面 作品-编辑草稿-页面
     */
    public function editdraft()
    {
        return $this->fetch('works/editdraft');
    }

    /**
     * @auth 朱佩 18-10-24
     * 测试页面 登陆-页面
     */
    public function login()
    {
        return $this->fetch('index/login');
    }

}
