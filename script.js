console.log("WORKING");

var cities = document.querySelectorAll(".cities h3");
var cookie = document.getElementById("cookies");

var lowTemp = document.querySelectorAll(".low");
var highTemp = document.querySelectorAll(".high")


function alertCity(index) {
        alert("Loading " + cities[index].innerHTML + " Weather Report")
}
function hideCookie() {
    cookie.style.visibility = "hidden"
}



function showTemp(){

    if(isFahrenheit) {
        for(let i = 0; i < lowTemp.length; i++) {
            var fNum = parseInt(lowTemp[i].innerHTML);
            var cNum = convertTemp("farenheit", fNum);
            lowTemp[i].innerHTML = Math.floor(cNum) + "°";
            var fNum = parseInt(highTemp[i].innerHTML);
            var cNum = convertTemp("farenheit", fNum);
            highTemp[i].innerHTML = Math.floor(cNum) + "°";
        }
    } else {
        for(let i = 0; i < lowTemp.length; i++) {
            var cNum = parseInt(lowTemp[i].innerHTML);
            var fNum = convertTemp("celsius", cNum);
            lowTemp[i].innerHTML = Math.floor(fNum) + "°";
            var cNum = parseInt(highTemp[i].innerHTML);
            var fNum = convertTemp("celsius", cNum);
            highTemp[i].innerHTML = Math.floor(fNum) + "°";
        }
    }
}

function convertTemp(centigrade, value) {
    if(centigrade == "farenheit"){
        return (value - 32) * (5/9);
    } else if (centigrade == "celsius"){
        return (value * (9/5)) + 34;
    }
}
