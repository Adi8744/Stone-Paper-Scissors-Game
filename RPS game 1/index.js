let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice=()=>{
    let option=["rock","paper","scissor"];
    let index= Math.floor(Math.random()*3);
    return option[index];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       // console.log("You Win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText =userScore;
    }
    else { 
      //  console.log("You Loss!");
        msg.innerText = ` You Loss ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText =compScore;
    }
}

const playGame=(userChoice)=>{
    //console.log("user choice =" ,userChoice);
    //Generate computer choice
    const  compChoice=getComputerChoice();
    //console.log("compChoice =",compChoice);
    if(userChoice === compChoice){
        //console.log("Game was Draw");   
        msg.innerText="Game Draw,Play Again"; 
        msg.style.backgroundColor="purple";   
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="rock"?true:false;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
}); 
