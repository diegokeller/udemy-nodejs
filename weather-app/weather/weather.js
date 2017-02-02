const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/2a7af0e8d3e3ff8e55b927b5e628c3c2/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
}
