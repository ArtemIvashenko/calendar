"use strict";
let date = new Date();
class Calendar {
    constructor() {
       
    }

    

    calendarRun(){
 let month =[
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
        ];

let lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
let monthDays = document.querySelector('.days');
document.querySelector('.date h1').innerHTML = month[date.getMonth()];
document.querySelector('.date p').innerHTML = date.toLocaleDateString();
let days = '';
let day = date.getDay()+1;
let next = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
let lastDayMonth = 7-next;
   
    for (let i = day+1; i>0; i--){
        days+=`<div> ${prevLastDay-i+1} </div>`;
        monthDays.innerHTML = days;
    }


    for (let i = 1; i<=lastDay; i++){
        if(i===date.getDate() && 
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()){
            days+=`<div class = 'today'> ${i} </div>`;
            monthDays.innerHTML = days;
        }else{
            days+= ` <div class = 'thismonth' > ${i} </div>`;
	    monthDays.innerHTML = days;
	
        }  
    } 

 
    for (let i =1;  i<=lastDayMonth; i++) {	 
        days+= `<div> ${i} </div>`;
        monthDays.innerHTML = days;
	 
    }

    }    
}


let calendar = new Calendar();

calendar.calendarRun();
let  nextmonth = document.querySelector('[date-next]');
    nextmonth.addEventListener('click' , button =>{
    date.setMonth(date.getMonth()+1);
    calendar.calendarRun();
    });

let  prevmonth = document.querySelector('[date-prev]');
    prevmonth.addEventListener('click' , button =>{
    date.setMonth(date.getMonth()-1);
    calendar.calendarRun();
    });






