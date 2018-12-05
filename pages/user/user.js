
var app = getApp();
Page({
  data:{
    username:null
  },
  onLoad:function(options){
    if (!app.globalData.loginStatus){
     // wx.navigateTo({url:"../login/login"})
      wx.redirectTo({ url: "../login/login"})  //需要重定向不能用跳转
    }else{
      this.setData({ username: app.globalData.userInfo.nickName})
    }


  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})