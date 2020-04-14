// 找到DOM节点
let add = document.querySelectorAll('.Increase');
let reduce = document.querySelectorAll('.Reduce');

// 数量点击事件
    // 商品增加
    for (let i =0;i<add.length;i++){
        add[i].onclick =function () {
          let amount =this.parentNode;  //寻找父节点
          let text = amount.querySelector('.unum');
          let num =text.value;
          num++;
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
    }
    //商品减少
    for (let i =0;i<reduce.length;i++){
       reduce[i].onclick =function () {
            let amount =this.parentNode;  //寻找父节点
            let text = amount.querySelector('.unum');
            let num =text.value;
            num--;
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
    }

    //33.15