"use strict";

class Calendar {

    constructor(dateObject, month) {
        this.dateObject = dateObject;
        this.month = month;
    }

    process() {
        let lastDay = new Date(this.dateObject.getFullYear(), this.dateObject.getMonth() + 1, 0).getDate();
        let prevLastDay = new Date(this.dateObject.getFullYear(), this.dateObject.getMonth(), 0).getDate();
        let monthDays = document.querySelector('.days');
        document.querySelector('.date h1').innerHTML = this.month[this.dateObject.getMonth()];
        document.querySelector('.date p').innerHTML = this.dateObject.toLocaleDateString();

        let days = '';
        let day = new Date (this.dateObject.getFullYear(), this.dateObject.getMonth(), 0).getDay();
        let next = new Date(this.dateObject.getFullYear(), this.dateObject.getMonth() + 1, 0).getDay();
        let lastDayMonth = 7 - next;
           
		 
                for (let i = day ; i > 0; i--) {
                days +=` <div> ${prevLastDay - i + 1  } </div>`;
                monthDays.innerHTML = days;
                }


        for (let i = 1; i <= lastDay; i++) {
            if (i === this.dateObject.getDate() &&
                this.dateObject.getMonth() === new Date().getMonth() &&
                this.dateObject.getFullYear() === new Date().getFullYear()) {
                days += `<div class = 'today'> ${i} </div>`;
                monthDays.innerHTML = days;
            } else {
                days += ` <div class = 'thismonth' > ${i} </div>`;
                monthDays.innerHTML = days;

            }
        }


        for (let i = 1; i <= lastDayMonth; i++) {
            days += `<div> ${i} </div>`;
            monthDays.innerHTML = days;

        }
    }

    clock(date) {
        let h = date.getHours().toString();
        let m = date.getMinutes().toString();
        let s = date.getSeconds().toString();

        if (h.length < 2) {
            h = '0' + h;
        }
        if (m.length < 2) {
            m = '0' + m;
        }
        if (s.length < 2) {
            s = '0' + s;
        }

        return h + ':' + m + ':' + s;
    }
}

const month = [
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
let date = new Date();
let calendar = new Calendar(date, month);

calendar.process();

let nextmonth = document.querySelector('[date-next]');
nextmonth.addEventListener('click', button => {
    date.setMonth(date.getMonth() + 1);
    calendar.process();
});

let prevmonth = document.querySelector('[date-prev]');
prevmonth.addEventListener('click', button => {
    date.setMonth(date.getMonth() - 1);
    calendar.process();
});

setInterval(function () {
    document.querySelector('[ time]').innerHTML = calendar.clock(new Date())
}, 1000);
