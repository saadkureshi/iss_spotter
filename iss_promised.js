const request = require('request-promise-native');
//request returns a promise when called.

// const fetchMyIP = function () {
//   let apiCalls = {
//     uri: 'https://api.ipify.org/?format=json',
//     json: true // Automatically parses the JSON string in the response
//   };
//   request(apiCalls)
//     .then(function (ipObj) {
//       console.log('Success! IP is:', ipObj.ip);
//     })
//     .catch(function (err) {
//         // API call failed...
//     });

// };

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(ipObj) {
  let ip = JSON.parse(ipObj).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(coords) {
  let coordsParsed = JSON.parse(coords);
  let coordsObj = {latitude: coordsParsed.latitude, longitude: coordsParsed.longitude};
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}`);
};

const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
    .then(fetchCoordsByIP) //in this line, the output of fetchMyIp is automatically given to fetchCoordsByIP and its run. i.e. fetchCoordsByIP(whateverfetchmyipoutput). thats pretty cool
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const responseArray = JSON.parse(data).response;
      return responseArray;
  });
};

module.exports = { nextISSTimesForMyLocation };