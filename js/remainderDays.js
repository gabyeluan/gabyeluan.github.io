var marryDay = new Date(2019,10,30);
var today = new Date();

var one_day = 1000*60*60*24;
var DivBetweenDates = 0;

var diffAnos = today.getYear() - marryDay.getYear();

//console.log("today:" + (monthToDay(today.getMonth()) + today.getDate()) + "\n" + 'marry day: ' + (monthToDay(marryDay.getMonth()) + marryDay.getDate() ));

DivBetweenDates = (today.getDate() + monthToDay(today.getMonth())) / (marryDay.getDate() + monthToDay(marryDay.getMonth())); //esse calculo também funciona, mas não usa o ano em miliseconds.

//DivBetweenDates = (today.getTime() / marryDay.getTime()); //este é o calculo de porcentagem diferente do acima, esse é o realmente correto (com o ano no calculo).

var percentage = Math.floor(DivBetweenDates * 100);

var diffInDay = Math.abs(marryDay - today);

var days = Math.floor(diffInDay/one_day)-29; //less one month, because Jan is 0, for some misterious reason, is -29 days than 30 (maybe because the leap year);



document.getElementById("day").textContent = "♥ " + days + " Dias para o casamento ♥ " + percentage + "%";


$(function(){
   $("#day").css("width", percentage + "%");
});


function monthToDay(month){
   var day = 0;

   for (var i = 1; i < month+1; i++){ //jan is 0, so I need to add more 1 value.
      if (i % 2 == 0 && i != 2){
         day += 30;
      }else if (i % 2 == 1){
         day += 31;
      }else if( i == 2){ //então vai ser fevereiro, e esse ano ele retorn 28 dias.
         day += 28;
      }
   }
   return day;
}
