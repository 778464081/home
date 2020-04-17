// 找到DOM节点
let add = document.querySelectorAll('.Increase');
let reduce = document.querySelectorAll('.Reduce');
let numIpt = document.querySelectorAll('.unum');
let goods_list = document.querySelectorAll('.goods_list');
let choose = document.querySelectorAll('.choose');
let choose_all = document.querySelectorAll(".choose_all");
let del =document.querySelectorAll('.del');
let C_del=document.querySelector('.C_del');
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
  

 //每行单选被选中，结算

 for(let i=0;i<choose.length;i++){
     choose[i].onclick = function(){
         getTotal();
     }

 }

 //全选
 for(let i=0; i<choose_all.length;i++){
     choose_all[i].onclick = function(){
         for(let i=0;i<goods_list.length;i++){
             let check = goods_list[i].querySelector(".choose");
             check.checked = this.checked;           
         }
         choose_all[0].checked = choose_all[1].checked = this.checked;
         getTotal();
     }
 }


 //删除这一行
 for(let i =0;i<del.length;i++){
     del[i].onclick = function(event){
         event.preventDefault(); //阻止默认事件
         let tr = this.parentNode;
         tr.parentNode.removeChild(tr);
         getTotal();
     }
 }

 //删除选中商品
C_del.onclick = function(){
    goods_list=document.querySelectorAll('.goods_list');

    //找到被选中的行
    for(let i =0;i<goods_list.length;i++){
        let check = goods_list[i].querySelector('.choose');
        if(check.checked){
            goods_list[i].parentNode.removeChild(goods_list[i]);
         }
    }
    getTotal();
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
     //总计
     getTotal();
 }
//总计功能
 function getTotal(){

    //1.设置总价格
     let total = 0;
     goods_list=document.querySelectorAll('.goods_list');  //该题神来之笔

     //找到被选中的行
     for(let i =0;i<goods_list.length;i++){
        let check=goods_list[i].querySelector(".choose"); 
        if(check.checked){
            let smTot = goods_list[i].querySelector('.u-price').innerHTML;
            smTot =Number(smTot);
            total=total+smTot;
             
         }
     }
    
    //找到总计，并且放入
    let tprice = document.querySelector('.t-price');
    tprice.innerHTML = total.toFixed(2);

    // 2.判断是否全选
    let isAllCheck =true;
    for(let i=0;i<goods_list.length;i++){
        let check=goods_list[i].querySelector(".choose");
        if(!check.checked){// 一旦没被选中
            isAllCheck = false;
            break;
        }
    }
    if(!goods_list.length){
        isAllCheck = false;
    }
    choose_all[0].checked = choose_all[1].checked = isAllCheck;


    //计算总商品的个数
    let allNum = 0;
    for(let i =0;i<goods_list.length;i++){
        let check=goods_list[i].querySelector(".choose"); 
        if(check.checked){
            let smTot = goods_list[i].querySelector('.unum').value;
            smTot =Number(smTot);
            allNum=allNum+smTot; 
         }
     }
     document.querySelector('.t-num').innerHTML = allNum;
     
    
 }  