<template>
  <Radar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import {Radar} from 'vue-chartjs/legacy'
import axios from 'axios';
import {Chart as ChartJS, Legend, LineElement, PointElement, RadialLinearScale, Title, Tooltip} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)

export default {
  name: 'RadarChartNew',
  components: {
    Radar
  },
  props: {
    chartId: {
      type: String,
      default: 'radar-chart'
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
  data() {

    return {
      loaded: false,
      chartData: null,
      // chartData: {
      //   labels: [
      //     'Eatin',
      //     'Ballin',
      //     'Sleepin',
      //     'Workin',
      //     'Codin',
      //     'Gy',
      //     'Chillin'
      //   ],
      //   datasets: [
      //     {
      //       label: 'My First dataset',
      //       backgroundColor: 'rgba(179,181,198,0.2)',
      //       borderColor: 'rgba(179,181,198,1)',
      //       pointBackgroundColor: 'rgba(179,181,198,1)',
      //       pointBorderColor: '#fff',
      //       pointHoverBackgroundColor: '#fff',
      //       pointHoverBorderColor: 'rgba(179,181,198,1)',
      //       data: [65, 59, 90, 81, 56, 55, 40]
      //     },
      //     {
      //       label: 'My Second dataset',
      //       backgroundColor: 'rgba(255,99,132,0.2)',
      //       borderColor: 'rgba(255,99,132,1)',
      //       pointBackgroundColor: 'rgba(255,99,132,1)',
      //       pointBorderColor: '#fff',
      //       pointHoverBackgroundColor: '#fff',
      //       pointHoverBorderColor: 'rgba(255,99,132,1)',
      //       data: [28, 48, 40, 19, 96, 27, 100]
      //     }
      //   ]
      // },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  // methods: {
  //   query() {
  //     if (this.queryString) {
  //
  //       const url = 'https://itunes.apple.com/search?'
  //       // const li = 20;
  //
  //
  //
  //       const config = {
  //         params: {
  //           term: this.queryString,
  //           // limit: this.limit,
  //           media: this.select,
  //           limit: this.termLimit,
  //           // termLimit = this.termLimit
  //         }
  //       }
  //
  //       if (config.params.limit <= 10) {
  //         config.params.limit = 11;
  //       }
  //
  //       axios.get(url, config)
  //           .then(response => {
  //             if (response.data.results.length > 0) {
  //               this.queryResults = response.data.results;
  //               console.log(this.queryResults)
  //
  //             } else {
  //               this.queryResults = [];
  //
  //               console.error('No results', this.queryResults);
  //
  //             }
  //
  //             this.$emit('finished', this.queryResults);
  //
  //           })
  //           .catch(error => {
  //             console.log('AJAX SEARCH ERROR', error);
  //
  //           })
  //     }
  //   }
  // },
  methods: {
    async query() {
      // if (this.queryString) {

        const url = 'https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100'
        // const li = 20;
        let access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"



        const config = {
          params: {
            bearer:access_token
            // term: this.queryString,
            //authorization: access_token,
          },
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }

        // if (config.params.limit <= 10) {
        //   config.params.limit = 11;
        // }

        axios.get()

        axios.get(url, config,)
            .then(response => {

              console.log(response.data.sleep)

              this.chartData = response.data.sleep
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

  async mounted() {
    // this.loaded = false
    // const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"
    // try {
    //   let response = fetch('https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100', {
    //     method: "GET",
    //     headers: {"Authorization": "Bearer " + access_token}
    //   })
    //       .then(response => response.json())
    //       .then(json => json.sleep);
    //   this.chartData = response.json;
    //   this.loaded = true
    //   console.log(response.json)
    // } catch (e) {
    //   console.error(e)
    // }
    this.query();
  },
}
</script>

<style scoped>

</style>