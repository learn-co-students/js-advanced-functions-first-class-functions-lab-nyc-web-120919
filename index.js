// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length-2,array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

function fareDoubler(num) {
    return createFareMultiplier(2)(num); 
}

function fareTripler(num) {
    return createFareMultiplier(3)(num);
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}