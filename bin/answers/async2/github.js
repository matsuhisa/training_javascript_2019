const fetch = require('node-fetch')

fetch(`https://api.github.com/users/matsuhisa`)
  .then(response => {
    console.log(response.status)
    response.json().then(userInfo => {
      console.log(userInfo)
    });
  });