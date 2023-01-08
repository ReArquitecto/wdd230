//get current year
let date = new Date();
let year = date.getFullYear();

console.log(year);
console.log(date);

document.querySelector('.copyright-year').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;

document.querySelector('.last-updated').innerHTML = 'Last Updated on ' + currentdate;