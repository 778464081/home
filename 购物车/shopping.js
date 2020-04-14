// 找到DOM节点
let add = document.querySelectorAll('.Increase');
let reduce = document.querySelectorAll('.Reduce');
let numIpt = document.querySelectorAll('.unum');

// 数量点击事件
    // 商品增加
    for (let i =0;i<add.length;i++){
        add[i].onclick =function () {
         numChange(this,"add");
        }
    }
    //商品减少
    for (let i =0;i<reduce.length;i++){
       reduce[i].onclick =function () {
         numChange(this,"reduce");
      }
    }
    //手动修改数量
    for (let i=0;i<numIpt.length;i++){
        // 输入完之后
            numIpt[i].onblur = function(){
                if(this.value<1){
                    this.value=1;
                }
                this.value= parseInt(this.value);  //保证数量是整数
               numChange(this,'cursor')
            }
    }
/*
* 数量变化函数
* @param{Object} dom  被点击的节点
*  @param{String} act  数量添加还是减少还是手动修改值
* */
 function numChange(dom,act) {
     let amount =dom.parentNode;  //寻找父节点
     let text = amount.querySelector('.unum');
     let num =text.value;

     /* 判断添加与减少*/
     if (act=="add"){
         num++;

     }else if(act=="reduce"){
         if(num==1){
             num=1;

         }else{
             num--;
         }
     }else if(act=='cursor'){
         console.log('cursor为手动修改的值');
     }else{
         return;
     }
     text.value=num;
     //计算一行的小计
     let goods_list= amount.parentNode;
     let unit =goods_list.querySelector('.unit');  //单价框
     let price = unit.innerHTML;
     let smTotal= price*num;
     smTotal = smTotal.toFixed(2);     //保留两位小数
     //将小计放入对应的位置
     let smPrice = goods_list.querySelector('.u-price');  //金额框
     smPrice.innerHTML = smTotal;
     //计算总价格
     let choose = goods_list.querySelector('.choose');  //选中checkbox
     choose.checked = true ;
 }

 //53.39