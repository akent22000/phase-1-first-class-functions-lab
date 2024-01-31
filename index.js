// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    drivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, drivers.length-2);
}

const returnLastTwoDrivers = function(drivers){
    drivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2);
}

const selectingDrivers=[ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function fareMultiplier(){return 5*x};
}

 function fareDoubler(x) {
    return 2*x;
}

function fareTripler(x) {
    return 3*x;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    arrayOfDrivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return returnFirstTwoDrivers();
}