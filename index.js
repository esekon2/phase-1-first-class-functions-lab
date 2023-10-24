// Code your solution in this file!

// this is the array ['Antonia', 'Nuru', 'Amari', 'Mo'] from test.
// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0,2)};

console.log (returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)};


const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(value){
    function fareMultiplier(value){
        return value * value;
    };
    return fareMultiplier;
}


function fareDoubler(value){
    let newfare = value * 2;
    return newfare;
}


function fareTripler(value){
    let newfaret = value * 3;
    return newfaret;
}


function selectDifferentDrivers(value,value2=returnLastTwoDrivers()) {
    return value2(value);
}

selectDifferentDrivers(drivers,returnFirstTwoDrivers());
  