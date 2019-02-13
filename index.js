const dateFns = require('date-fns')
const axios = require('axios')

const cityArr = ['sh', 'bj', 'gz']
const todayStr = dateFns.format(new Date(), 'YYYY-MM-DD')

cityArr.forEach(city => {
  const url = `http://metro.sinchang.me/api/flows?city=${city}&count=1`
  axios(url)
    .then(res => {
      if (res.data[0].date !== todayStr) {
        throw new Error(`Not found ${city}'s data in ${todayStr}`)
      }
    })
    .catch(err => {
      throw new Error(err)
    })
})
