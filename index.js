// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = function(drivers) {
        return drivers.slice(0,2);
    }
    return firstTwoDrivers(drivers);
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = function(drivers){
        return drivers.slice(-2);
    }
    return lastTwoDrivers(drivers);
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

function createFareMultiplier(int){
    return function(fare) {
        return fare * int;
    }
}
    
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,func){
    return func(drivers);
}

