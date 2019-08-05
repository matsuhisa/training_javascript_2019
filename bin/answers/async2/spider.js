const request = require('request')
const options = {
  url: 'https://api.github.com/users/matsuhisa123',
  headers: {
    'User-Agent': 'Awesome-Octocat-App'
  }
}

request(options, function (error, response, body) {
  console.log('body:', response.toJSON())
});