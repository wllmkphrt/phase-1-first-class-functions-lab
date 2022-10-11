const returnFirstTwoDrivers = function(driverList){
    const firstTwo = [driverList[0], driverList[1]];
    return firstTwo;
}
const returnLastTwoDrivers = function(driverList){
    const lastTwo = [driverList[driverList.length - 2], driverList[driverList.length - 1]];
    return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){return fare * multiplier};
}
function fareDoubler(fare){
    const newFare = createFareMultiplier(2)(fare);
    return newFare;
}
function fareTripler(fare){
    const newFare = createFareMultiplier(3)(fare);
    return newFare;
}
function selectDifferentDrivers(driverList, someFunction){
    return someFunction(driverList);
}