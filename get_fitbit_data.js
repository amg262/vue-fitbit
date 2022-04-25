const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"


fetch('https://api.fitbit.com/1/user/-/devices.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
    .then(response => response.json())
    .then(json => console.log(json));

// fetch('https://api.fitbit.com/1/user/-/devices/tracker/1971133674/alarms.json', {
//     method: "GET",
//     headers: {"Authorization": "Bearer " + access_token, "time": "00:01"}
// })
//     .then(response => response.json())
//     .then(json => console.log(json));