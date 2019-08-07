const fetch = require('node-fetch')

fetch(`https://api.github.com/users/matsuhisa`)
    .then(response => {
        console.log(response.status); // => 200
        response.json().then(userInfo => {
            // JSONパースされたオブジェクトが渡される
            console.log(userInfo); // => {...}
        });
    });