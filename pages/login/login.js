
var app = getApp();

Page({
  data:{
    username:null,
    password:null,
  },
  onLoad:function(options){
   
  },
  onReady:function(){
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  loginBtnClick:function (){
    this.login()
    // 用户名和密码验证的过程
    app.globalData.loginStatus =true
    console.log(app.globalData.loginStatus)
    wx.switchTab({ url: "../user/user" })   //跳转tabbar页面必须这个函数
    //app.appData.userinfo = {username:this.data.username,password:this.data.password}
    
  },

  usernameInput : function (event){
    this.setData({username:event.detail.value})
  },

  passwordInput : function (event){
    this.setData({password:event.detail.value})
  },

  login: function () {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://192.168.3.193:8888/wechat/userlogin',
            data: {
              code: res.code
            },
            success: function (res) {
              // console.log(res.data)
              console.log(res)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }


})