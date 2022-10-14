let advice;
let adviceId = document.getElementById("advice-id");
let adviceContent = document.getElementById("advice-content");
let adviceIdContainer = document.getElementById("advice-id-container");
let adviceContentContainer = document.getElementById("advice-content-container");

const dice = document.getElementById("dice");

dice.addEventListener("click", clicked);

if (!advice) {
    adviceIdContainer.classList.add("hidden");
    adviceContentContainer.classList.add("hidden");
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

