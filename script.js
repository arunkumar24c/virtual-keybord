
let button = document.getElementsByTagName('button');
let p = document.getElementById('ip');
let space =document.getElementById('space');
let Backspace = document.getElementById('backspace');



document.body.addEventListener('keydown' , function(index){
    for (let i=0 ; i <button.length ; i++) {
   //UpperCase() method returns the value of the string converted to uppercase
        if(button[i].innerHTML==index.key.toUpperCase()){
            button[i].classList.add('active')
        };
    }
//innerHTML property is part of the Document Object Model
    p.innerHTML+=index.key
    if(index.key=='Backspace'){
        p.innerHTML=p.innerHTML.slice(0 , -10)
    }
})
document.body.addEventListener('keyup' , function(index){
    for(let j=0 ; j<button.length ; j++){
        if(button[j].innerHTML == index.key.toUpperCase()){
            button[j].classList.remove('active')
        }
    }
})


for(let x of button){
//touchstart event occurs when the user touches an element
    x.addEventListener('touchstart' , function(){
        x.className='active'
    })
}
for(let y of button){
//touchend event occurs when the user removes the finger from an element
    y.addEventListener('touchend' , function(){
        space.classList.remove('active')
    })
}
space.addEventListener('touchstart',function(){
    space.classList.add('active')
})
space.addEventListener('touchend',function(){
    space.classList.remove('active')
})
Backspace.addEventListener('touchstart',function(){
    Backspace.className+= 'active'
})
Backspace.addEventListener('touchend',function(){
    Backspace.classList.remove('active')
})