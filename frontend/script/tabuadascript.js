let respArea = document.getElementById("resp");
let per1Area = document.getElementById("per1");
let per2Area = document.getElementById("per2");
let tempoArea = document.getElementById("tempo");
let contQtdArea = document.getElementById("contQtd");
let opArea = document.getElementById("op");
let op;
let numOp;
let perQtd = 0;
let num1;
let num2;
let respCorrect = 0;
let perMax = 5;

let tempo = 0;
let resp = "";

function numAle(min ,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciaTimer(){
    intervalo = setInterval(() => {
        tempo++;
        tempoArea.innerHTML = `${tempo}s`;
        contQtdArea.innerHTML=`${perQtd}/${perMax}`;
    },1000);
}

function setPergunta(){
    let numOp = numAle(1,4);
    if(numOp == 1){
        op = "x";
        opArea.innerHTML=op;
    }else if(numOp == 2){
        op = "+";
        opArea.innerHTML=op;
    }else if(numOp == 3){
        op = "&divide;";
        opArea.innerHTML=op;
    }else if(numOp == 4){
        op = "-";
        opArea.innerHTML=op;
    }

    num1 = numAle(1,10);
    num2 = numAle(1,10);
    per1Area.innerHTML=num1;
    per2Area.innerHTML=num2;
    iniciaTimer();
}
function newPergunta(){
    numOp = numAle(1,4);
    if(numOp == 1){
        op = "x";
        opArea.innerHTML=op;
    }else if(numOp == 2){
        op = "+";
        opArea.innerHTML=op;
    }else if(numOp == 3){
        op = "&divide;";
        opArea.innerHTML=op;
    }else if(numOp == 4){
        op = "-";
        opArea.innerHTML=op;
    }

    num1 = numAle(1,10);
    num2 = numAle(1,10);
    per1Area.innerHTML=num1;
    per2Area.innerHTML=num2;
    presBackSpace();
}

respArea.innerHTML=resp;

function presBackSpace(){
    resp="";
    respArea.innerHTML=resp;
}

function presOk(){
    if(numOp == 1){
        if(resp == num1 * num2){
            respCorrect++;
        }
    }else if(numOp == 2){
        if(resp == num1 + num2){
            respCorrect++;
        }
    }else if(numOp == 3){
        if(resp == num1 / num2){
            respCorrect++;
        }
    }else if(numOp == 4){
        if(resp == num1 - num2){
            respCorrect++;
        }
    }
    if(perQtd < perMax){
        perQtd++;
        newPergunta();
    }
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
setPergunta()