"use strict";
console.clear();

// Bottone che genera biglietto
const generateButton = document.getElementById("mybutton")

const resetButton = document.getElementById("reset")

let km = document.getElementById("km");
let age = document.getElementById("age");
const elImputName = document.getElementById("name");
console.log(elImputName)

const elImputkm = document.getElementById("km");
console.log(elImputkm)
console.log(parseInt(elImputkm.value))

const elImputAge = document.getElementById("age");
console.log(elImputAge)
age = parseInt(elImputAge.value);

const elP = document.getElementById("result")
    console.log(elP)

const elP2 = document.getElementById("result2")
    console.log(elP2)




// evento al quale fare calcoli
generateButton.addEventListener("click", function (event) {
    elP.classList.remove("d-none")
    // prezzo base
    const priceKm = 0.21;

    //sconto under
    const discountUnder = 20;

    //sconto over
    const discountOver = 40;


    
    //costo del biglietto
    let finalPrice = 0;



   
    

    

    //campo nome
    elP.innerText = elImputName.value
    console.log(elImputName.value)


    // campo distanza
    elP.innerText = elImputkm.value
    console.log(elImputkm.value)

    // campo eta
    elP.innerText = parseInt(elImputAge.value)
    console.log(elImputAge.value)


    if (age < 18) {
        finalPrice = parseFloat(priceKm) * parseInt(km.value)

        let discount = (finalPrice / 100) * discountUnder;
        finalPrice -= discount;
        console.log(finalPrice.toFixed(2));
        elP.innerText = ("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }

    //costo over 65
    else if (age > 65) {
        finalPrice = parseFloat(priceKm) * parseInt(km.value)

        let discount = (finalPrice / 100) * discountOver;
        finalPrice -= discount
        console.log(finalPrice.toFixed(2));
        elP.innerText = ("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }

    //costo base
    else {
        finalPrice = parseFloat(priceKm) * parseInt(km.value)

        console.log(finalPrice.toFixed(2));
        elP.innerText = ("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }
});

resetButton.addEventListener("click", function (event){
    event.preventDefault();
    elP.classList.add("d-none")
    elImputName.value = "";
    elImputkm.value = "";
    elImputAge.value = "";

});
