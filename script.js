let advice;
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const adviceIdContainer = document.getElementById("advice-id-container");
const adviceContentContainer = document.getElementById("advice-content-container");
const firstMessage = document.getElementById("first-message");
const dividerMobile = document.getElementById("divider-mobile");
const dividerDesktop = document.getElementById("divider-desktop");
const dice = document.getElementById("dice");

dice.addEventListener("click", clicked);

if (!advice) {
    adviceIdContainer.classList.add("hidden");
    adviceContentContainer.classList.add("hidden");
    firstMessage.classList.add("show");
    firstMessage.classList.add("pb");
    dividerMobile.classList.add("hidden");
    dividerDesktop.classList.add("hidden");
}

function clicked() {
    axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
        advice = response.data.slip;
        adviceId.innerHTML = advice.id;
        adviceContent.innerHTML = advice.advice;
    })

    adviceIdContainer.classList.add("show");
    adviceContentContainer.classList.add("show");
    adviceContentContainer.classList.add("pb");
    firstMessage.classList.remove("show");
    firstMessage.classList.add("hidden");
    firstMessage.classList.remove("pb");
    dividerDesktop.classList.remove("hidden");
    dividerDesktop.classList.add("show")
    dividerMobile.classList.remove("hidden");
    dividerMobile.classList.add("show")
}


// VERIFICA NUMERO PRIMO

// const number = 1;
// let numbers = [];
// let primo;
// // Definisco la metà del mio numero arrotondata per eccesso
// const ceil = Math.round(Math.round(number) / 2);
// // Se il numero è divisibile per i lo inserisco nell'array
// while (i = ceil || i = ) {
    
// }

// if (number === 0 || number === 1 || numbers.length != 0) {
//     primo = false;
// } else {
//     primo = true;
// }

// console.log(primo);

