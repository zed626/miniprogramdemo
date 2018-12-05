// pages/kuaidi/kuaid.js
Page({
  data: {
    expressNu:null,
    expressInfo:null
  },

    getExpressInfo: function (nu, cb) {
    wx.request({
      url: 'http://localhost:8888/wechat/test',
      data: {
        x: '',
        y: ''
      },
      header: {
        'apikey': '2e24c33be1e7f7dafebc496c07441138'
      },
      success: function (res) {
        // console.log(res.data)
        cb(res.data)
      }
    })

  },

  btnClick : function(){
    //console.log(this.data.expressNu)
    var thispage = this;
    thispage.getExpressInfo(this.data.expressNu,function(data){
      console.log(data.books)
        thispage.setData({expressInfo:data.books})
    });
  },
  input : function(e){
    this.setData({expressNu:e.detail.value})
  }
})