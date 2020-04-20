 
 //获取DOM
let increase = document.querySelectorAll('.Increase');
let reduce = document.querySelectorAll('.Reduce');
let unum = document.querySelectorAll('.unum');
let goods_list = document.querySelectorAll('.goods_list');
let choose = document.querySelectorAll('.choose');
let choose_all = document.querySelectorAll(".choose_all");
for(let i=0;i<increase.length;i++){
    increase[i].onclick = function(){
       numChange(this,'add');
    }
}

for(let i=0;i<increase.length;i++){
   reduce[i].onclick = function(){
       numChange(this,'reduce');
    }
}

for(let i=0;i<unum.length;i++){
    unum[i].onblur = function(){
       if(unum.value<1){
           unum.value=1;
       }
       this.value= parseInt(this.value);
       numChange(this,'unum');
     } 
    
 }

 for(let i= 0;i<choose.length;i++){
     choose[i].onclick=function(){
        getTotal();
     }
 }

function numChange(dom,act){
    let amount = dom.parentNode;
    let text = amount.querySelector('.unum');    
    let num = text.value;

    if(act=='add'){
        num++;
    }else if(act == 'reduce'){
        if(num=1){
            num=1;
        }else{
            num--;
        }
    }else if(act == 'unum'){}
    else{
        return;
    }
    text.value = num;
    let goods_list = amount.parentNode;
    let unit = goods_list.querySelector(".unit");   
    let uprice = goods_list.querySelector('.u-price');  
    let price = unit.innerHTML;
    let smTot=price*num;
    smTot=smTot.toFixed(2);
    // console.log(smTot,price,num);
    uprice.innerHTML= smTot;

    let choose = goods_list.querySelector('.choose');
    choose.checked=true;


}

function getTotal(){

    let total =  0;
    goods_list=document.querySelectorAll('.goods_list');  

    for(let i=0;i<goods_list.length;i++){
       let check=goods_list[i].querySelector(".choose"); 
       if(check.checked){
        let smTot =  goods_list[i].querySelector('.u-price').innerHTML;  
        smTot=Number(smTot);
        total = total +smTot; 
       }
    }
    let tprice = document.querySelector('.t-price');
    tprice.innerHTML=total.toFixed(2);
    
}