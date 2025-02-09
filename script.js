const messages = [
    "Are you sure?",
    "Really sure cutie??",
    "Are you corona positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad my sona...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    noButton.innerText = messages[messageIndex];
    messageIndex++;
    currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize= (currentFontSize * 1.5) + "px" ;

}
function handleYesClick(){
    window.location.href = "yes.html";
}