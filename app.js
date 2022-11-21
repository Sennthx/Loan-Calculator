// Getting input elements
const errorMsg = document.querySelector("#error-msg");
const loanInput = document.querySelector("#loanInput");
const interestInput = document.querySelector("#interestInput");
const yearInput = document.querySelector("#yearInput");
const calculate = document.querySelector("#calculate");

let inputFields = [loanInput, interestInput, yearInput];

// Getting output elements
const loading = document.querySelector(".loading");
const results = document.querySelector(".results");
const outputMonthly = document.querySelector("#outputMonthly");
const outputPayment = document.querySelector("#outputPayment");
const outputInterest = document.querySelector("#outputInterest");

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
    if(numberCheck()) {
        if(setOutput()) {

        }


        results.style.display = "flex";
    }
}

function numberCheck() {
    let flag = true;
    for (let x in inputFields) {
        console.log()
        if(isNaN(Number.parseInt(inputFields[x].value))){
            inputFields[x].parentElement.parentElement.style.borderColor = "rgb(255, 0, 0)";
            errorMsg.textContent = "Please fill the forms correctly!";
            document.querySelector(".error").style.display = "flex";
            flag = false;
        }
    }
    return flag;
}

function setOutput(){
    
}

function hideError() {
    console.log(errorMsg.parentElement)
    errorMsg.parentElement.style.display = "none";
    
    for (const key in inputFields) {
        inputFields[key].parentElement.parentElement.style.borderColor = "rgb(34, 39, 37)";
        
    }
}
