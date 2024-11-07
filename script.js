let num1 = null;
let num2 = null;
let op = null;
let total = null;

function operate(num1,num2,op){
    if (op == "+") {
        let result = num1 + num2;
        return Number.isInteger(result) ? result : result.toFixed(6);
    }
    if(op == "-"){
        let result = num1 - num2;
        return Number.isInteger(result) ? result : result.toFixed(6);
    }
    if(op == "x"){
        let result = num1 * num2;
        return Number.isInteger(result) ? result : result.toFixed(6);
    }
    if (op == "÷") {
        let result = 0;
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            return "you suck";  
        }
    
        return Number.isInteger(result) ? result : result.toFixed(6);
    }
}

let disp = document.querySelector(".display");
document.querySelectorAll(".container button").forEach(button => {
        if(!isNaN(button.textContent) && button.textContent.trim() !== ''){
            button.addEventListener("click", () =>{
                if (disp.textContent === "0") {
                    disp.textContent = "";
                } 
                if(disp.textContent.length<8){
                        disp.textContent += button.textContent;
                }  
                
                
            });
        }
        
});

document.getElementById("AC").addEventListener("click", () =>{
    disp.textContent = "0";
    num1 = null;
    num2 = null;
    op = null;
    total = null;
});
document.getElementById("(-)").addEventListener("click", () =>{
      if(parseFloat(disp.textContent)>0){
        disp.textContent = parseFloat(disp.textContent)*-1;
      }  
});

document.getElementById("+/-").addEventListener("click", () =>{
      disp.textContent = parseFloat(disp.textContent)*-1;
});

document.getElementById("%").addEventListener("click", () =>{
    disp.textContent = parseFloat(disp.textContent)/100;
});

const equals = document.getElementById("=");

const array = ["+","-","x","÷"];
array.forEach(element => {
    document.getElementById(element).addEventListener("click", () =>{
        if(op == null){
            num1 = parseFloat(disp.textContent);
            disp.textContent = "";
            op = element;
        }
    })
});

equals.addEventListener("click", () => {
    if (num1 !== null && op !== null) {
        num2 = parseFloat(disp.textContent);
        disp.textContent = "";
        const result = operate(num1, num2, op);
        
        let resultString = result.toString();
        if (resultString.length > 8) {
            resultString = Number(result).toExponential(2);
        }

        disp.textContent = resultString;
        num1 = result;
        num2 = null;
        op = null;
    }
});






