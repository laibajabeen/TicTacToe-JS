let boxes =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector (".msg-container");
let msg = document.querySelector("#msg");  
let turn0 = true;
let winpattern =[[0,1,2],[0,3,6], [0,4,8], [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
        if(turn0)
        {
             box.innerText="O"
             turn0=false;
        }
        else{
             box.innerText="X"
             turn0=true; 
        }
        box.disabled=true;
        checkWinner();
    })
}) 
const resetgame = () =>{
    turn0=true;
    enabled();
msgcontainer.classList.add("hide"); 
}
const disabled=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enabled=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner) =>{
    msg.innerText=`Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disabled();
}
const checkWinner= () =>{
    for(let pattern of winpattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
             if(pos1 ==pos2 && pos2==pos3)
             {
                showWinner(pos1);
             }
        }
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);