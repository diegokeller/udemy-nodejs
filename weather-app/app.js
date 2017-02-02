//
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/2a7af0e8d3e3ff8e55b927b5e628c3c2/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  }else{
    console.log('Unable to fetch weather.');
  }
});
