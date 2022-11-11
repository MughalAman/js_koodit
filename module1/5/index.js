function IsLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const year = Number(prompt('Enter a year: '));


ul = document.getElementById('list')

if (IsLeapYear(year)) {
    li = document.createElement('li')
    li.innerHTML = `${year} is a leap year`
    ul.appendChild(li)
} else {
    li = document.createElement('li')
    li.innerHTML = `${year} is not a leap year`
    ul.appendChild(li)
}

