<template>
  <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
      v-if="loaded"
  />
</template>

<script>
import {Bar} from 'vue-chartjs/legacy'

import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    async query() {
      // if (this.queryString) {

      const url = 'https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=10'
      // const li = 20;
      //let access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3c2xlIHdzb2MiLCJleHAiOjE2NTE3MTAzMzIsImlhdCI6MTY1MTEwNzA0MH0.Cu1HavUp_iTRD8GaFgLxybHvpRE8x2f6i9A9EVJyJC0"

      const config = {
        params: {
          //bearer:access_token
          // term: this.queryString,
          //authorization: access_token,
        },
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_FITBIT_API_KEY}`
        }
      }

      // if (config.params.limit <= 10) {
      //   config.params.limit = 11;
      // }

      axios.get(url, config,)
          .then(response => {

            console.log(response.data.sleep)

            // this.chartData = response.data.sleep
            response.data.sleep.forEach(sleep => {
              this.chartData.labels.push(sleep.dateOfSleep)
              this.chartData.datasets[0].data.push(sleep.duration)
            })
            this.renderChart(this.chartData, this.chartOptions);
                        // if (response.data.results.length > 0) {
            //   this.queryResults = response.data.results;
            //   console.log(this.queryResults)
            //   this.chartData = response.json;
            //   this.loaded = true
            //
            // } else {
            //   this.queryResults = [];
            //
            //   console.error('No results', this.queryResults);
            //
            // }
            //
            // this.$emit('finished', this.queryResults);

          })
          .catch(error => {
            console.log('AJAX SEARCH ERROR', error);

          })
    }
    // }
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          // 'January',
          // 'February',
          // 'March',
          // 'April',
          // 'May',
          // 'June',
          // 'July',
          // 'August',
          // 'September',
          // 'October',
          // 'November',
          // 'December'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {



    const url = 'https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100'
    // const li = 20;
    // let access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"
    // let access_token = process.env.VUE_APP_FITBIT_API_KEY

    const config = {
      params: {
        //bearer:access_token
        // term: this.queryString,
      },
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_FITBIT_API_KEY}`
      }
    }

    // if (config.params.limit <= 10) {
    //   config.params.limit = 11;
    // }


    axios.get(url, config,)
        .then(response => {

          console.log(response.data.sleep)

          // this.chartData = response.data.sleep
          response.data.sleep.forEach(sleep => {
            this.chartData.labels.push(sleep.dateOfSleep)
            this.chartData.datasets[0].data.push(sleep.duration / 3600000)
          })
          //this.renderChart(this.chartData, this.chartOptions);
          this.loaded = true;
          // if (response.data.results.length > 0) {
          //   this.queryResults = response.data.results;
          //   console.log(this.queryResults)
          //   this.chartData = response.json;
          //   this.loaded = true
          //
          // } else {
          //   this.queryResults = [];
          //
          //   console.error('No results', this.queryResults);
          //
          // }
          //
          // this.$emit('finished', this.queryResults);

        })
        .catch(error => {
          console.log('AJAX SEARCH ERROR', error);

        })
  }
}
</script>

<style scoped>

</style>