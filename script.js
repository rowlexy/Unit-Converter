const convertBtn = document.getElementById("convert-btn")
const massEl = document.getElementById("mass-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
let inputEl = document.getElementById("input-el")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

convertBtn.addEventListener("click", function(){
    
    lengthEl.textContent = `${inputEl.value} meters =  ${(inputEl.value * meter).toFixed(3)} feet || 
                            ${inputEl.value} feet = ${(inputEl.value / meter).toFixed(3)} meters`

    volumeEl.textContent = `${inputEl.value} liters =  ${(inputEl.value * liter).toFixed(3)} gallons || 
                            ${inputEl.value} gallons = ${(inputEl.value / liter).toFixed(3)} liters`

    massEl.textContent = `${inputEl.value} kilos =  ${(inputEl.value * kilogram).toFixed(3)} pounds || 
                            ${inputEl.value} pounds = ${(inputEl.value / kilogram).toFixed(3)} kilos`

})