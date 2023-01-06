//get current year
let date = new Date();
let year = date.getFullYear();

console.log(year);
console.log(date);

document.querySelector('h1').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;

document.querySelector('.last-updated').innerHTML = currentdate;