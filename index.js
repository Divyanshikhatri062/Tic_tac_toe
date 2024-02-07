let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#re");
let ngb=document.querySelector("#ng");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turno=true;
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
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
       if(turno){
       box.innerText="O";
       turno=false;
       }
       else{
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;
       cw();
    });
});
const rgame=()=>{
    turno=true;
    eb();
    msgc.classList.add("hide");
};
const eb=()=>{
    for(let box in boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const db=()=>{
    for(let box in boxes){
        box.disabled=true;
    }
};
const sw=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgc.classList.remove("hide");
    db();
};
const cw=()=>{
    for(pattern of wp){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("winner is",p1);
                sw(p1);
            }
        }
    }
   };
   const rg=()=>{
    turno=true;

   };