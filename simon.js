let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("the game is started");
        started=true;
        levelup();
    }
})
function gameflash(btn){
btn.classList.add("gameflash");
setTimeout(() => {btn.classList.remove("gameflash")
    
}, 100);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {btn.classList.remove("userflash")
        
    }, 100);
    }

function levelup(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;
let randomidx=Math.floor(Math.random()*3);
let randomcolo=btns[randomidx];
let randombtn=document.querySelector(`.${randomcolo}`);

// console.log(randomidx);
// console.log(randomcolo);
// console.log(randombtn);
gameseq.push(randomcolo);
console.log(gameseq);
gameflash(randombtn);
}

function checkans(idx){
    
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over yourscore was <b>${level} </b> <br> please press the key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        
        },1000)
        reset();
    }
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
function reset(){
     userseq=[];
     gameseq=[];
     started=false;
     level=0;

}