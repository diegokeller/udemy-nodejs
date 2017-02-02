// API Request
const request = require('request');

// Função assíncrona para obter o endereço
var geocodeAddress = (address) => {

  // Retorna uma promise
  return new Promise((resolve, reject) => {

    // Codifica o endereço
    var encodedAddress = encodeURIComponent(address);

    // Faz a requisição
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body)=>{

      // Se houver erro
      if(error){
        reject('Unable to connect to Google servers.');
      } else if(body.status === 'ZERO_RESULTS'){
        // Se não encontrar o resultado
        reject('Address not found.');
      } else if(body.status === 'OK') {
        // Se encontrou o resultado, resolve a promise
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('95096280').then((location) => {
  console.log('Success!');
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log('Error:', errorMessage);
});
