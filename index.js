const {  nextISSTimesForMyLocation } = require('./iss.js');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    console.log(datetime);
    datetime.setUTCSeconds(pass.risetime);
    console.log(datetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};




// Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
// Next pass at Fri Jun 01 2021 14:36:08 GMT-0700 (Pacific Daylight Time) for 632 seconds!


// fetchMyIP((error, ip) => {
//   // inside the request callback ...
//   // error can be set if invalid domain, user is offline, etc.
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked!", ip);
// });

// fetchCoordsByIP("142.184.51.52", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });

// fetchISSFlyOverTimes({ latitude: 45.4998, longitude: -73.6087 }, (error, flyOverArray) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover details:' , flyOverArray);
// });
// iss.js



