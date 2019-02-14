const { format, subDays } = require('date-fns')
const axios = require('axios')

const cityArr = ['sh', 'bj', 'gz']
const todayStr = format(subDays(new Date(), 1), 'YYYY-MM-DD')

cityArr.forEach(city => {
  const url = `http://metro.sinchang.me/api/flows?city=${city}&count=1`
  axios(url)
    .then(res => {
      if (res.data.data[0].date !== todayStr) {
        console.log(`Not found ${city}'s data in ${todayStr}`)
        process.exit(1)
      }
    })
    .catch(() => {
      process.exit(1)
    })
})
