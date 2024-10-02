let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    console.log("Game draw.");
    msg.innerText="Game Draw..";
    msg.style.backgroundColor="black";

}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        console.log("You Are Winner...");
        msg.innerText=`You Win...  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorePara.innerText=compscore;
        console.log("Computer Win...");
        msg.innerText=`Computer Win... ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};

const playgame=(userchoice)=>{
    // console.log("user choice = ",userchoice);
    // Now genereate computer choice
    const compchoice=genCompchoice();
    // console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("clicked",userchoice);
        playgame(userchoice);
    });
});