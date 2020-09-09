const express = require('express');
const Twitter = require('twit');
const app = express();

const client = new Twitter({
    consumer_key: 'LNXntnkvHHYJE5GCHu2hrBfVO',
    consumer_secret: 'OoyWJrfRbUjfDsEYKpql4Kk364fTgxTHIIAUnFAOq30SrtnVPw',
    access_token: '2546350070-l9nEIRcLrcUqkuRMNd3lOI2ETZD5pcV4Va3ilYS',
    access_token_secret: 'nZnHBxux5TouSuTIomBTAsgL19S3jK0BF49tBvl4RAewW',
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
    
    client.get(`statuses/home_timeline`, params)
        .then(timeline => {
            res.send(timeline);
        })
        .catch(error => {
            res.send(error);
        })
})

app.listen(3000, () => console.log('Server Running on port 3000'));