Page({
  data: {
    curNav:1,
    curIndex:0,
    cateItems:[
      {
        cate_id:1,
        cate_name:'旋式楼房',
        children: [
          { 
            child_id: 1, 
            name: '旋式楼房1', 
            image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2265710170,4110599299&fm=26&gp=0.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '旋式楼房2', 
            image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1343665771,4005835831&fm=26&gp=0.jpg"  
          },
          { 
            child_id: 3, 
            name: '旋式楼房3', 
            image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2912660609,2408431995&fm=26&gp=0.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '旋式楼房4', 
            image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=486985821,1779104873&fm=11&gp=0.jpg"  
          },
          { 
            child_id: 5, 
            name: '旋式楼房5', 
            image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2908177960,2076537877&fm=26&gp=0.jpg" 
          }, 
          { 
            child_id: 6, 
            name: '旋式楼房6', 
            image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3230691003,1370870894&fm=26&gp=0.jpg"  
          },
          { 
            child_id: 7, 
            name: '旋式楼房7', 
            image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1672485889,1256436269&fm=26&gp=0.jpg" 
          }, 
          { 
            child_id: 8, 
            name: '旋式楼房8', 
            image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1808407393,2792425922&fm=11&gp=0.jpg"  
          },
          { 
            child_id: 9, 
            name: '旋式楼房9', 
            image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3237023055,384283967&fm=26&gp=0.jpg" 
          }, 
          { 
            child_id: 10, 
            name: '旋式楼房10', 
            image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3708119168,788664969&fm=11&gp=0.jpg"  
          }
        ]
      },
      {
        cate_id:2,
        cate_name:'时代倾城'
      },
      {
        cate_id:3,
        cate_name:'花景苑'
      },
      {
        cate_id: 4,
        cate_name: '汇贤苑'
      },
      {
        cate_id: 5,
        cate_name: '德惠豪庭'
      }
    ]
  },
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
})
  