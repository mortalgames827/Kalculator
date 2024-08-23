const resultElement =  document.getElementById('result');
// resultElement.textContent = 147+1
// console.log(resultElement.textContent)
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitButton = document.getElementById("submit")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")

let action = "";
plusButton.onclick = function(){
 action = "+";
}

minusButton.onclick = function(){
action = "-";
}


submitButton.addEventListener("click", ()=>{
   if(action ==  "+"){
    const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
   }else if (action == "-"){
    const sum = Number(input1.value) - Number(input2.value);
resultElement.textContent = sum;
   }
})