// Getting input elements
const loanInput = document.querySelector("#loanInput");
const interestInput = document.querySelector("#interestInput");
const yearInput = document.querySelector("#yearInput");
const calculate = document.querySelector("#calculate");
let inputFields = [loanInput, interestInput, yearInput];

const loading = document.querySelector(".loading");
const errorMsg = document.querySelector("#error-msg");
const results = document.querySelector(".results");

// Loading action Listeners

calculate.addEventListener("click", calculateClick);
loanInput.addEventListener("focus", hideError);
interestInput.addEventListener("focus", hideError);
yearInput.addEventListener("focus", hideError);

function calculateClick (){
    loading.style.display = "flex";
    results.style.display = "none";
    setTimeout(main, 1500);
}

function main() {
    loading.style.display = "none";
    if(numberCheck()) setOutput()
}

function errorMessage(message){
    errorMsg.textContent = message;
    document.querySelector(".error").style.display = "flex";
}

function numberCheck() {
    let flag = true;
    for (let x in inputFields) {
        if(isNaN(Number.parseInt(inputFields[x].value))){
            inputFields[x].parentElement.parentElement.style.borderColor = "rgb(255, 0, 0)";
            errorMessage("Please use only numbers!")
            flag = false;
        }
    }
    return flag;
}

function setOutput(){

    // Getting output elements
    const outputMonthly = document.querySelector("#outputMonthly");
    const outputPayment = document.querySelector("#outputPayment");
    const outputInterest = document.querySelector("#outputInterest");

    let p = parseFloat(loanInput.value);
    let r =  parseFloat(interestInput.value)/100/12;
    let N = parseFloat(yearInput.value)*12

    let monthlyPayment = (r * p / (1-Math.pow((1+r), -N)));
    if(isFinite(monthlyPayment)) {
        let totalPayment = (monthlyPayment*N);
        let totalInterest = (totalPayment-p);
        
        outputMonthly.textContent = monthlyPayment.toFixed(2);
        outputPayment.textContent = totalPayment.toFixed(2);
        outputInterest.textContent = totalInterest.toFixed(2);
        results.style.display = "flex";
        document.querySelector("#asd").style.padding = "5% 0 5% 0";
    } else {
        for (let x in inputFields) {
            if(Number.parseInt(inputFields[x].value) === 0){
                inputFields[x].parentElement.parentElement.style.borderColor = "rgb(255, 0, 0)";
            }
        }
        errorMessage("Please check your numbers!")
    }
}

function hideError() {
    errorMsg.parentElement.style.display = "none";
    
    for (const key in inputFields) {
        inputFields[key].parentElement.parentElement.style.borderColor = "rgb(34, 39, 37)";
        
    }
}
