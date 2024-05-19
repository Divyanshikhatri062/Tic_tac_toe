let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#re");
let ngb=document.querySelector("#ng");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turno=true;
let draw=0;
const wp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const rgame=()=>{//reset game
    draw=0;
    turno=true;
    eb();
    msgc.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turno){//playerO
       box.innerText="O";
       turno=false;
       }
       else{//player X
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;
       draw++;
       console.log("y");
       console.log(draw);
       let iswinner=cw();
       if(draw===9 && !iswinner){
        console.log("ey");
        gameDraw();
       }
       
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgc.classList.remove("hide");
    db();
  };
const eb=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const db=()=>{//disable boxes
    for(let box of boxes){
        box.disabled=true;
    }
};
const sw=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgc.classList.remove("hide");
    db();
};
const cw=()=>{
    for(let pattern of wp){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                sw(p1);
               return true;
            }
        }
    }
   };
   ngb.addEventListener("click", rgame);
resetbtn.addEventListener("click", rgame);