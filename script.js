let c1 = document.getElementById('card1')
let c2 = document.getElementById('card2')
let c3 = document.getElementById('card3')
let c4 = document.getElementById('card4')

let count1 = 0;
let count2=0;
let count3 =0;
let count4 =0; 
c1.addEventListener('click',()=>{
    count1++;
    if(count1%2==0){
        c1.innerHTML=`
        `
    }
    else{
        c1.innerHTML=`
    <img src="images/joker.jpg" class="card">
    `
    }
   
})

c2.addEventListener('click',()=>{

count2++;
    if(count2%2==0){
        c2.innerHTML=`
        `
    }
    else{
        c2.innerHTML=`
    <img src="images/joker1.jpg" class="card">
    `
    }
})


c3.addEventListener('click',()=>{
    count3++;
    if(count3%2==0){
        c3.innerHTML=`
        `
    }
    else{
        c3.innerHTML=`
    <img src="images/joker2.jpg" class="card">
    `
    }
})

c4.addEventListener('click',()=>{
    count4++;
    if(count4%2==0){
        c4.innerHTML=`
        `
    }
    else{
        c4.innerHTML=`
    <img src="images/ace.jpg" class="card">
    
    `
    }
})
