const counter = document.getElementById('counter');
let countNumber = 0;
let intervalID;

document.getElementById('btn-start').addEventListener('click',function(){

    intervalID =setInterval(function(){
        countNumber++;
        counter.innerText = countNumber;
    })
})
document.getElementById('btn-stop').addEventListener('click',function(){
    

    setInterval(function(){
        clearInterval(intervalID)
    })
})

