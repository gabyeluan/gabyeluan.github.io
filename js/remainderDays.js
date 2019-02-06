var marryDay = new Date(2019,11,30);
var today = new Date();

var one_day = 1000*60*60*24;
var DivBetweenDates = 0;

var diffAnos = today.getYear() - marryDay.getYear();

console.log(today.getTime(), marryDay.getTime());

//DivBetweenDates = ((today.getDate() + (today.getMonth() * 30)) / (marryDay.getDate() + (marryDay.getMonth() * 30))); //esse calculo também funciona, mas não usa o ano em miliseconds.

DivBetweenDates = (today.getTime() / marryDay.getTime());

var percentage = Math.floor(DivBetweenDates * 100);

var diffInDay = Math.abs(marryDay - today);

var days = Math.floor(diffInDay/one_day)-29; //less one month, because Jan is 0, for some misterious reason, is -29 days than 30 (maybe because the leap year);



document.getElementById("day").textContent = "♥ " + days + " Dias para o casamento ♥ " + percentage + "%";


$(function(){
   $("#day").css("width", percentage + "%");
});
