const fetch = require('node-fetch')

class Weather {
  async fetch(area_id) {
    if(area_id !== "") {
      const response = await fetch(`http://weather.livedoor.com/forecast/webservice/json/v1?city=${area_id}`)
      if(response.status == 200) {
        return await response.json()
      }else{
        throw Error(response.statusText)
      }  
    }else {
      throw Error('Empty area_id')
    }
  }
}

async function weather() {
  const weather = new Weather()
  const json = await weather.fetch(130010)

  console.log( json.forecasts[0].telop )
  console.log( json.forecasts[0].date )
  console.log( json.location.city )
  console.log( json.forecasts[0].image.url )
}

weather()


