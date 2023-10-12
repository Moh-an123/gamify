let a=document.getElementsByClassName('g1');
let b=document.getElementById('rst');
console.log(a.length);
let c=0;
for(let i=0;i<9;i++){
a[i].addEventListener('click',()=>{
    if(a[i].innerHTML!='X'&&a[i].innerHTML!='O'){
    if(c%2==0){
    console.log('X');
    a[i].innerHTML='X';
    }
else{
console.log('O');
a[i].innerHTML='O';
}c++;
    }
});}
b.addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        a[i].innerHTML=i+1;
    }
})