console.log("WORKING");

var cities = document.querySelectorAll(".cities h3");
var cookie = document.getElementById("cookies");

var lowTemp = document.querySelectorAll(".low");
var highTemp = document.querySelectorAll(".high");
var fLowTemp = [];
var fHighTemp = [];
var cLowTemp = [];
var cHighTemp = [];

for(let i = 0; i < lowTemp.length; i++) {
    cLowTemp.push(Math.floor(convertTemp(parseInt(lowTemp[i].innerHTML))) + "°"); 
    cHighTemp.push(Math.floor(convertTemp(parseInt(highTemp[i].innerHTML)))+ "°");
    fHighTemp.push(highTemp[i].innerHTML);
    fLowTemp.push(lowTemp[i].innerHTML);
}

function setTemp(element) {
    if(element.value == "°C") {
        for(let i = 0; i < fLowTemp.length; i++) {
            lowTemp[i].innerHTML = cLowTemp[i];
            highTemp[i].innerHTML = cHighTemp[i];
        }
    } else if(element.value == "°F") {
        for(let i = 0; i < fLowTemp.length; i++){
            lowTemp[i].innerHTML = fLowTemp[i];
            highTemp[i].innerHTML = fHighTemp[i];
        }
    }
}

function convertTemp(value) {
        return (value - 32) * (5/9);
}


function alertCity(element) {
    alert("Loading " + element.innerHTML + " Weather Report...");
}
function hideCookie() {
    cookie.style.visibility = "hidden";
}
