/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert");
const input = document.getElementById("input");
const meterToFeet = document.getElementById("meter-to-feet");
const feetToMeter = document.getElementById("feet-to-meter");
const litersTOGallon = document.getElementById("liters-to-gallon");
const gallonsToLiters = document.getElementById("gallons-to-liters");
const kilogramToPound = document.getElementById("kilogram-to-pound");
const poundToKilogram = document.getElementById("pound-to-kilogram");

convert.addEventListener("click", function () {
  const inputValue = input.value;
  const meters = 3.281;
  const gallons = 0.264;
  const kilogram = 2.204;

  let meterToFeetMaths = inputValue * meters;
  meterToFeetMaths = meterToFeetMaths.toFixed(3);

  let feetToMeterMaths = inputValue / 3.281;
  feetToMeterMaths = feetToMeterMaths.toFixed(3);

  let litersToGallonsMaths = inputValue * gallons;
  litersToGallonsMaths = litersToGallonsMaths.toFixed(3);

  let gallonsToLitersMaths = inputValue / gallons;
  gallonsToLitersMaths = gallonsToLitersMaths.toFixed(3);

  let kilogramToPoundMaths = inputValue * kilogram;
  kilogramToPoundMaths = kilogramToPoundMaths.toFixed(3);

  let poundToKilogramMaths = inputValue / kilogram;
  poundToKilogramMaths = poundToKilogramMaths.toFixed(3);

  meterToFeet.innerHTML = `${inputValue} meters = ${meterToFeetMaths} feet`;
  feetToMeter.innerHTML = `${inputValue} feet = ${feetToMeterMaths} meters`;
  litersTOGallon.innerHTML = `${inputValue} liters = ${litersToGallonsMaths} gallons`;
  gallonsToLiters.innerHTML = `${inputValue} gallons = ${gallonsToLitersMaths} liters`;
  kilogramToPound.innerHTML = `${inputValue} kilogram = ${kilogramToPoundMaths} pounds`;
  poundToKilogram.innerHTML = `${inputValue} pounds = ${poundToKilogramMaths} kilogram`;
});
