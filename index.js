const charVal=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");

let userChar=0;

const updateCounter=()=>{
    userChar=charVal.value.length;
    totalCount.innerText=userChar;
    remainingCount.innerText=150-userChar;

};
charVal.addEventListener("keyup",()=>updateCounter());

// code of copy the text

const copyText=()=>{
    charVal.select();
    charVal.setSelectionRange(0,9999);//mobile
    navigator.clipboard.writeText(charVal.value);//very imp
}
