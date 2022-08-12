 const date = new Date();


function calendar(){


//const month = date.getMonth(+1);
const month =["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь" , "Октябрь", "Ноябрь", "Декабрь"];

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
console.log(lastDay);
let monthDays = document.querySelector('.days');
document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toLocaleDateString();

let days =  "";
const day = date.getDay()+1;

const next = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();



const firstDayMonth = day;
console.log(firstDayMonth);
console.log(date.getDay().lastDay);

let lastDayMonth = 7-next;

console.log(day);
console.log(date.getDate());

for (let i=day; i>=0; i--){
	days+=`<div> ${prevLastDay-i} </div>`;
	monthDays.innerHTML = days;
}


for (let i = 1; i<=lastDay; i++){
	if(i===date.getDate() && i===date.getMonth()){
		days+=`<div class = "today"> ${i} </div>`;
monthDays.innerHTML = days;
}else{
	days+= ` <div >${i} </div>`;
	monthDays.innerHTML = days;
	
}
}

 
	for (let i =1;  i<=lastDayMonth; i++) {
		

	 
	days+= `<div> ${i} </div>`;
	monthDays.innerHTML = days;
	 
}



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

