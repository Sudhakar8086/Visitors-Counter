let saveEl = document.getElementById("btnSave");
let countEl = document.getElementById("count-el");
let count = 0;


function increment()
{
    count += 1;
    countEl.innerText = count; 
}
let total;
function btnSave()
{
  let countStr = count + "-";
total= saveEl.textContent+=countStr;
countEl.innerText = 0;
count = 0;
console.log(total);
}
