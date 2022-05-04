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
// import axios from "axios";
import '../models/ApiRequest'
import {makeGetRequest,json } from "@/models/ApiRequest";
// import {hi} from '../models/Help';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar,
  },
  props: {
    resp: {
      type: String
    },
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

     }
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
  async mounted() {
    //let url2 = 'https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=90'

    let v = await makeGetRequest(json.sleepList);

    v.sleep.forEach(sleep => {
      this.chartData.labels.push(sleep.dateOfSleep)
      this.chartData.datasets[0].data.push(sleep.duration / 3600000)
    })

    this.loaded = true;
  }
}
</script>

<style scoped>

</style>