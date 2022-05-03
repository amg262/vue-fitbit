import axios from "axios";

const json = {
    'sleepList': 'https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100'
}

const conf = {
    params: {
        //bearer:access_token
        // term: this.queryString,
    }, headers: {
        Authorization: `Bearer ${process.env.VUE_APP_FITBIT_API_KEY}`
    }
}

// eslint-disable-next-line no-unused-vars
function buildRequestUri(url, config) {

    this.url = url ?? '';
    this.config = config ?? conf;


    axios.get(this.url, this.config)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('AJAX SEARCH ERROR', error);
        });
}
// const li = 20;
// let access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"
// let access_token = process.env.VUE_APP_FITBIT_API_KEY