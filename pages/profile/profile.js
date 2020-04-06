const app = getApp()
console.log(app.globalData.name)
Page({
  data:{
    students:[
      {name:'ZYX', age:19},
      {name:'WJY', age:20},
      {name:'DCY', age:19},
      {name:'HJQ', age:20}
    ],
    counter: 0
  },
  ADD(){
    this.setData({
      counter:this.data.counter += 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
    console.log('fine')
  },
  


})
