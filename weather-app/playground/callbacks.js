var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Diego'
  };

  setTimeout(() => callback(user), 2000);
};

getUser(123, (user) => {
  console.log(user);
})
