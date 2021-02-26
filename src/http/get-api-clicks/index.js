let data = require('@begin/data')
exports.handler = async function http(request) {
console.log("Get Clicks")
  let results = await data.get({
    table: 'clicks',
    key: 'adamj@vectric.com'
  })

  const clickCount = (results != null) ? results.clickCount : 0
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    type: 'text/html; charset=utf8',
    body: JSON.stringify({
        clicks: clickCount 
    })
  }
}