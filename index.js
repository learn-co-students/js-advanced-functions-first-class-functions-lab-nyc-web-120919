const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyBy) {
    return function(number) {
        return number * multiplyBy;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, functionArg) {
    return functionArg(drivers);
}
