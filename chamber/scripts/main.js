//get current year
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


console.log(year);
console.log(date);

let currentdate = document.lastModified;

document.querySelector('.current-date').innerHTML = month + "-" + day + "-" + year;
