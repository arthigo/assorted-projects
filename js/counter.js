const btnDecrease = document.getElementById("btnDecrease");
const btnIncrease = document.getElementById("btnIncrease");
const btnReset = document.getElementById("btnReset");
const btnRandom = document.getElementById("btnRandom");

let value = document.getElementById("value");

btnDecrease.addEventListener('click', ()=>{
    value.innerText = parseInt(value.innerText) - 1;
});

btnIncrease.addEventListener('click', ()=>{
    value.innerText = parseInt(value.innerText) + 1;
});

btnReset.addEventListener('click', ()=>{
    value.innerText = 0;
});

btnRandom.addEventListener('click', ()=>{
    value.innerText = getRandomInt(-9999, 9999);
});