const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkDiv = document.querySelector("#check-div");
const checkButton = document.querySelector("#check-button");
const billAmountErrorMessage = document.querySelector("#bill-amount-error-message");
const cashAmountErrorMessage = document.querySelector("#cash-amount-error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes"); //numberOfNotes becomes an array

console.log(billAmount.value);
console.log(cashGiven.value);
// checkButton.addEventListener("click" , function(){
//     console.log("clicked!");
// })
// checkButton.addEventListener("click" , ()=>console.log("clicked!"));

const availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];
hideDiv();
hideBillMessage();
hideCashMessage();
nextButton.addEventListener("click", () => {
    if (billAmount.value < 0 || billAmount.value == "") {
        showBillMessage("invalid bill amount");
        hideDiv();
    } else {
        hideBillMessage();
        checkDiv.style.display = "flex";
        checkButton.addEventListener("click", function validateBillAndCashAmount() {
            if (cashGiven.value >= billAmount.value) {
                hideCashMessage();
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
            } else {
                showCashMessage("The cash given must atleast be equal to bill amount");
            }
        })
    }
})

function hideDiv() {
    checkDiv.style.display = "none";
}

function hideBillMessage() {
    billAmountErrorMessage.style.display = "none";
}

function hideCashMessage() {
    cashAmountErrorMessage.style.display = "none";
}

function showBillMessage(billErrorMessage) {
    billAmountErrorMessage.style.display = "block";
    billAmountErrorMessage.innerText = billErrorMessage;
}

function showCashMessage(cashErrorMessage) {
    cashAmountErrorMessage.style.display = "block";
    cashAmountErrorMessage.innerText = cashErrorMessage;
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
}