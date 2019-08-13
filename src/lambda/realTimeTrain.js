import axios from 'axios';

const apiKey = process.env.API_KEY;
const baseApi = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals';

export function handler(event, context, callback) {

  axios.get(baseApi, { params: { apikey } })
.then(res => {
    callback(null, {
    statusCode: 200,
      headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(res.data)
  });
})
.catch((error) => {
    callback(error)
  });
}
