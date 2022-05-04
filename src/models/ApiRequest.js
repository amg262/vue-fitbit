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
/* eslint-disable */
class BuildRequestUri_2 {

    h = 'j';
    j = 'h'

    constructor(h, j) {
        this.h = h;
        this.j = j;
    }

    // url = '';
    // config = '';
    //
    //
    // constructor(url, config) {
    //     if (url)
    //         this.url = url;
    //     if (config)
    //         this.config = config;
    //     else
    //         this.config = conf;
    //
    //     axios.get(this.url, conf)
    //         .then(response => {
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log('AJAX SEARCH ERROR', error);
    //         });
    // }

}
//const axios = require('axios');

async function makeGetRequest(url) {

    //let payload = { name: 'John Doe', occupation: 'gardener' };
    const config = {
        method: 'get',
        url: url,
        headers: { 'Bearer': process.env.VUE_APP_FITBIT_API_KEY }
    }
    //const params = new url.URLSearchParams(payload);
    let res = await axios(url, conf)

    //let res = await axios.get(url);

    let data = res.data;
    // console.log(data);
    return data;
}


function processThat(url) {
    //let response;

    axios.get(url, conf)
        .then(response => {
            console.log('no', response.data)

            return response.data;
        })
        .catch(error => {
            console.log('AJAX SEARCH ERROR', error);
        });
    //this.response = json;
    //return this.response();

}

class BuildRequestUri {


    url = '';
    config = '';
    _response = '';


    constructor(url, config) {
        this.url = url;

        if (url)
            this.url = url;
        else
            this.url = json;

        if (config)
            this.config = config;
        else
            this.config = conf;


        // axios.get(this.url, conf)
        //     .then(res => {
        //
        //         this.process(res)
        //         //return response;
        //     })
        //     .catch(error => {
        //         console.log('AJAX SEARCH ERROR', error);
        //     });
    }
    //
    //
    // process() {
    //
    //     axios.get(this.url, conf)
    //         .then(res => {
    //
    //             this.response(res);
    //             //return res;
    //         })
    //         .catch(error => {
    //             console.log('AJAX SEARCH ERROR', error);
    //         });
    //     //this.response = json;
    //     return this.response();
    // }
    //
    // iterate() {
    //     this.response.data.sleep.forEach(sleep => {
    //         // this.chartData.labels.push(sleep.dateOfSleep)
    //         console.log(sleep)
    //         // this.chartData.datasets[0].data.push(sleep.duration / 3600000)
    //     })
    //     return this.response.JSON();
    // }
    //
    // get response() {
    //     return this._response;
    // }
    //
    // set response(value) {
    //     this._response = value;
    // }


}

export {BuildRequestUri, processThat, makeGetRequest, conf, json}
// const li = 20;
// let access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"
// let access_token = process.env.VUE_APP_FITBIT_API_KEY