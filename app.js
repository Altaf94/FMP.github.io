var dispmin = document.getElementById("min");
var dispsec = document.getElementById("sec");
var dispmil = document.getElementById("mil");



var min = 0;
var sec = 0;
var mil = 0;

function init(){
    dispmin.innerHTML = min;
}

init();

function ini(){
    dispsec.innerHTML = sec;
}

ini();

function ino(){
    
    dispmil.innerHTML = mil;
    
}

ino();


var interval;

function timer(){
    
    min = min + 1
    if( min == 10000){
        clearInterval(interval)
    } 

    init();
    
}




interval = setInterval(timer, 0.00005)



var interva;
function time(){
    
    sec = sec + 1
    if( sec == 350){

        clearInterval(interva)
    } 

    ini();
    
}

interva = setInterval(time, 100)




var interv;
function tim(){
    
    mil = mil + 1
    if( mil == 250){
        clearInterval(interv)
    } 

    ino();
    
}

interv = setInterval(tim, 100)


function changeback(){
    console.log("hello")
}


var heart1 =document.getElementById('heart');

function change(){
    if( heart1.style.color == "red"){
        heart1.style.color = "lightpink"
    }
    else{
        heart1.style.color = "red"
    }
}

var heart11 =document.getElementById('heart1');

function change1(){
    if( heart11.style.color == "red"){
        heart11.style.color = "lightpink"
    }
    else{
        heart11.style.color = "red"
    }
}


var heart111 =document.getElementById('heart2');

function change2(){
    if( heart111.style.color == "red"){
        heart111.style.color = "lightpink"
    }
    else{
        heart111.style.color = "red"
    }
}

var heart1111 =document.getElementById('heart3');

function change3(){
    if( heart1111.style.color == "red"){
        heart1111.style.color = "lightpink"
    }
    else{
        heart1111.style.color = "red"
    }
}


// <!-- middle 5 -->



function messagesend(){

    var message = alert("your message is sent to customer care. you will be contacted soon")
    
    

}


// CART