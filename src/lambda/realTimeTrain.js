import axios from 'axios';

const apikey = process.env.API_KEY;
const baseApi = 'https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/traindata';

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
