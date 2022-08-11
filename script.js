 const date = new Date();

function calendar(){
//const month = date.getMonth(+1);
const month =["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь" , "Октябрь", "Ноябрь", "Декабрь"];

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
console.log(lastDay);
let monthDays = document.querySelector('.days');
document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toLocaleDateString();

let days =  "";


for (let i = 1; i<=lastDay; i++){
	days+= ` <div >${i} </div>`;
	monthDays.innerHTML = days;
	

}
 
let firstDayMonth = date.getDay();
console.log(firstDayMonth);



}
const  nextmonth = document.querySelector('[date-next]');
 nextmonth.addEventListener('click' , button =>{
date.setMonth(date.getMonth()+1);
calendar();
});

const  prevmonth = document.querySelector('[date-prev]');
   prevmonth.addEventListener('click' , button =>{
  date.setMonth(date.getMonth()-1);
  calendar();
  });


calendar();
