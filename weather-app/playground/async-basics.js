console.log('Starting app');

setTimeout(() => {
  console.log('Fired');
}, 1000);

setTimeout(() => {
  console.log('Fired 2');
}, 0);

console.log('Finishing up');
