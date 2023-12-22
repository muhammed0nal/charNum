const textArea = document.getElementById("textarea");
const totalCounterSpan = document.getElementById("total-counter-span");
totalCounterSpan.innerText = 0;
textArea.addEventListener("keyup", () => {
    totalCounterSpan.innerText = textArea.value.length;
});