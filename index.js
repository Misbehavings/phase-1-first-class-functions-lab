const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function fareMultiplier() {
        return number ** 2
    }
}

const fareDoubler = function(fareMultiplier) {
    return fareMultiplier * 2 
}

const fareTripler = function(fareMultiplier) {
    return fareMultiplier * 3
}

function selectDifferentDrivers(arrayOfDrivers, fn) {     
    return fn(arrayOfDrivers)
}
