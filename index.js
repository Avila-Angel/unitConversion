/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertButton = document.getElementById("convert-btn")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")

let convertInput = document.getElementById("convert-input")



convertButton.addEventListener("click", function() {
    
    let inputValue = convertInput.value
    
    let feetToMeter = (inputValue * 3.281).toFixed(3)
    let meterToFeet = (inputValue / 3.281).toFixed(3)

    let gallonToLiter = (inputValue * 0.264).toFixed(3)
    let literToGallon = (inputValue / 0.264).toFixed(3)

    let poundToKilogram = (inputValue * 2.204).toFixed(3)
    let kilogramToPound = (inputValue / 2.204).toFixed(3)

    
    lengthText.innerText = `${inputValue} meters = ${feetToMeter} feet | ${inputValue} feet = ${meterToFeet} meters
`
    volumeText.innerText = `${inputValue} liters = ${gallonToLiter} gallons | ${inputValue} gallons = ${literToGallon} liters
`
    massText.innerText = `${inputValue} kilos = ${poundToKilogram} pounds | ${inputValue} pounds = ${kilogramToPound} kilos
`
})

