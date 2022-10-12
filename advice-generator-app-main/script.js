let advice;
let adviceId = document.getElementById("advice-id");
let adviceContent = document.getElementById("advice-content");
let adviceIdContainer = document.getElementById("advice-id-container");
let adviceContentContainer = document.getElementById("advice-content-container");

const dice = document.getElementById("dice");

dice.addEventListener("click", clicked);

function clicked() {
    axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
        advice = response.data.slip;
        adviceId.innerHTML = advice.id;
        adviceContent.innerHTML = advice.advice;
    })

    if (advice) {
        adviceIdContainer.classList.remove("hidden");
        adviceIdContainer.classList.add("show");
        adviceContentContainer.classList.remove("hidden");
        adviceContentContainer.classList.add("show");
    }
}