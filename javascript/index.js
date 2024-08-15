function updateTime() {
let lasVegasElement=document.querySelector("#las-vegas");
let lasVegasDateElement=lasVegasElement.querySelector(".date");
let lasVegasTimeElement=lasVegasElement.querySelector(".time");
let lasVegasTime=moment().tz("America/Las_Vegas");

lasVegasDateElement.innerHTML= lasVegasTime.format("MMMM Do YYYY");
lasVegasTimeElement.innerHTML= lasVegasTime.format("h:mm:ss [<small>]");
}
function updateCity(event) {
let cityTimeZone = event.target.value;     
let cityTime=moment().tz(cityTimeZone);
let citiesElement= document.querySelector("cities");

console.log(cityTime.format("MMMM Do YYYY"));
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
