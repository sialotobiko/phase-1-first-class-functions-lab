// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(y){
    return function (fare){
        return fare * y;
    }
}

const multipliedFare = createFareMultiplier(2);
function fareDoubler(fare){
    return multipliedFare(fare);
}

const multipliedFare2 = createFareMultiplier(3);
function fareTripler(fare){
    return multipliedFare2(fare);
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}