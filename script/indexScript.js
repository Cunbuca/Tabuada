let respArea = document.getElementById("resp");
let per1Area = document.getElementById("per1");
let per2Area = document.getElementById("per2");
let op = document.getElementById("op");

let resp = "";

function numAle(min ,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numOp = numAle(1,4);

let num1 = numAle(1,10);
let num2 = numAle(1,10);

if(numOp == 1){
    op.innerHTML="+";
}else if(numOp == 2){
    op.innerHTML="-";
}else if(numOp == 3){
    op.innerHTML="/";
}else if(numOp == 4){
    op.innerHTML="x";
}

respArea.innerHTML=resp;

per1Area.innerHTML=num1;
per2Area.innerHTML=num2;

function presBackSpace(){
    resp="";
    respArea.innerHTML=resp;
}

function presOk(){
}

function pres1(){
    if(resp.length < 4){
        resp=resp+"1";
        respArea.innerHTML=resp;
    }
}
function pres2(){
    if(resp.length < 4){
        resp=resp+"2";
        respArea.innerHTML=resp;
    }
}
function pres3(){
    if(resp.length < 4){
        resp=resp+"3";
        respArea.innerHTML=resp;
    }
}
function pres4(){
    if(resp.length < 4){
        resp=resp+"4";
        respArea.innerHTML=resp;
    }
}
function pres5(){
    if(resp.length < 4){
        resp=resp+"5";
        respArea.innerHTML=resp;
    }
}
function pres6(){
    if(resp.length < 4){
        resp=resp+"6";
        respArea.innerHTML=resp;
    }
}
function pres7(){
    if(resp.length < 4){
        resp=resp+"7";
        respArea.innerHTML=resp;
    }
}
function pres8(){
    if(resp.length < 4){
        resp=resp+"8";
        respArea.innerHTML=resp;
    }
}
function pres9(){
    if(resp.length < 4){
        resp=resp+"9";
        respArea.innerHTML=resp;
    }
}
function pres0(){
    if(resp.length < 4){
        resp=resp+"0";
        respArea.innerHTML=resp;
    }
}