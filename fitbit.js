fetch('https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100', {
    method: "GET",
    headers: {"Authorization": "Bearer " + process.env.VUE_APP_FITBIT_API_KEY}
})
    .then(response => response.json())
    .then(json => console.log(json));

// fetch('https://api.fitbit.com/1/user/943HNF/devices/tracker/1971133674/alarms.json', {
//     method: "GET",
//     headers: {"Authorization": "Bearer " + access_token, "time": "00:01"}
// })
//     .then(response => response.json())
//     .then(json => console.log(json));