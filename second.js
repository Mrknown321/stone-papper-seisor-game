const choices= document.querySelectorAll(".choice");/// used to chose from stone pappaer  seisor
const userscore = document.querySelector(".score-a");// used foor score of user
const comscore = document.querySelector(".score-b");// used for score of computer
const winnertext = document.querySelector("#player-move");//used to print you lose or win 
const winnertext1 = document.querySelector(".yourscore");//used to print choosen value by user
const winnertext2 = document.querySelector(".comscore");//used to print choosen value by computer
const newbtn = document.querySelector("button");//used to satart new game with zero score
let uservalue = 0;//score of user 
let comvalue = 0;//score of computer

const scoreboard = (userwin) => {
    if(userwin === true){
       uservalue ++;
       userscore.innerText = uservalue;
       winnertext.innerText = "You win";
       winnertext.style.backgroundColor = "green";
       winnertext.style.color = "white"
       winnertext.style.border = "2px solid black"
    }else {
        comvalue ++;
        comscore.innerText = comvalue;
        winnertext.innerText = "Computer win";
        winnertext.style.backgroundColor = "Red";
        winnertext.style.color = "white"
        winnertext.style.border = "2px solid black"
    }
    
}
 const reset = () => {
    uservalue = 0;
    comvalue = 0;
    winnertext2.innerText = " ";
    winnertext1.innerText = " ";
    winnertext.innerText = "Enter the your  move";
    winnertext.style.backgroundColor = "#F17300";
    winnertext.style.color = "white"
    winnertext.style.border = "2px solid black"
 }
// event for bring new game of all value 
newbtn.addEventListener("click", reset);

const randchoice = () => {
    const options =["stone", "papper", "seisor"];
    // rock papper seisor
   let randindex= Math.floor(Math.random()*3);
   
   return options[randindex];   
}
let showwinner = (winvalue) => {
    if(userwin === true){
        console.log("user win the game")
    }else {
        console.log("computer win the game .")
    }
    
}
const playgame = (userchoice) =>{
    console.log("User choice = ",userchoice);
    winnertext1.innerText = "You chose =  " + userchoice;
    let compchoice = randchoice();
    console.log("computer choice = ",compchoice);
    winnertext2.innerText = "Computer choice = " + compchoice;


    if (userchoice === compchoice){
        console.log("the game is draw play again");
        winnertext.innerText = "Match draw! please choose again";
        winnertext.style.backgroundColor = "purple";
        winnertext.style.color = "white"
        winnertext.style.border = "2px solid black"

    }else {
        userwin = true;
        if(userchoice = "stone" ){
            // seisor papper
            if(compchoice === "papper"){
                userwin = false;
               }else {
                userwin = true;
               }
        }
         if (userchoice === "papper") {
            if(compchoice === "seisor"){
                userwin = false;
               }else {
                userwin = true;
               }
        }
        if(userchoice === "seisor"){
           if(compchoice === "papper"){
            userwin = true;
           }else {
            userwin = false;
           }
        }
        showwinner(userwin);
        scoreboard(userwin);
    }

}
choices.forEach ((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        console.log('choice was clicked.');
        let userid =choice.getAttribute("id");
       
        playgame(userid);
        randchoice();

    })
})