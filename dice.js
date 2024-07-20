const img_display=document.getElementById("images");
const display=document.getElementById("results");
function roll(){
const dice_value=Number(document.getElementById("inp1").value);
let results=[];
let images=[];
for(let i=0;i<dice_value;i++){
    const random = Math.floor(Math.random()*6)+1;
    results.push(random);
    images.push(`<img src ="images/dice${random}.png">`);
}
img_display.innerHTML=images.join(' ');
}