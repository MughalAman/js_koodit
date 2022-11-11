function IsLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const start_year = Number(prompt('Enter the start year: '));
const end_year = Number(prompt('Enter the end year: '));

let leap_years = [];

for (let i = start_year; i <= end_year; i++) {
    if (IsLeapYear(i)) {
        leap_years.push(i);
    }
}

ul = document.getElementById('list')
for (let i = 0; i < leap_years.length; i++) {
    li = document.createElement('li')
    li.innerHTML = leap_years[i]
    ul.appendChild(li)
}
