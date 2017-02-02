var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments are not numbers.');
      }
    }, 1500);
  });
};

asyncAdd(1,true).then((result) => {
  console.log('Result:', result);
  return asyncAdd(result, 20);
}).then((result) => {
  console.log('Result 2:', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('It worked!');
//     reject('Unable to fulfill promise.');
//   }, 2000);
// });
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
