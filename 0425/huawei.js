let box =document.querySelector('.box');
let navheight = document.querySelector('.nav-height');
let action =function(){
    let height = box.style.height;
    console.log(height);
    
    if(height!='0px'){
        height='0px';
    }else{
        height='200px';
    }
    box.style.height=height;
}
navheight.addEventListener('click',action,false);
