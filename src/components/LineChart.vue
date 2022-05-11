<template>
  <LineChartGenerator
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
      :identity="identity"
      :methodName="methodName"
      :tension="tension"
      :requestData="requestData"
  />
</template>

<script>
import {Line as LineChartGenerator} from 'vue-chartjs/legacy'

import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import {json, makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator
  },
  props: {
    identity: {
      type: String
    },
    chartLabel: {
      type: String,
    },
    chartBackground: {
      type: String,
    },
    chartCalculation: {
      type: Number
    },
    methodName: {
      type: String,
    },
    tension: {
      type:String
    },
    borderColor:{
      type:String
    },
    fill: {
      type: String
    },

    chartId: {
      type: String,
      default: 'line-chart'
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
      //   chartData: {
      //     labels: [
      //       'January',
      //       'February',
      //       'March',
      //       'April',
      //       'May',
      //       'June',
      //       'July'
      //     ],
      //     datasets: [
      //       {
      //         label: 'Data One',
      //         backgroundColor: '#f87979',
      //         data: [40, 39, 10, 40, 39, 80, 40]
      //       }
      //     ]
      //   },
      //   chartOptions: {
      //     responsive: true,
      //     maintainAspectRatio: false
      //   }
      // }
      loaded: false,
      requestData: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: this.chartLabel,
            backgroundColor: this.chartBackground,
            data: [],
            fill: false,
            borderColor: '#4BC0C0FF',
            tension: 0.5
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    async sleepLine() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);

      this.requestData.sleep.forEach(sleep => {
        this.chartData.datasets.fill = this.fill
        this.chartData.datasets.borderColor = this.borderColor;
        this.chartData.datasets.tension = this.tension;

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.duration / 3600000)
      })

      this.loaded = true;
    },
    async actLine() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);
      console.log(this.requestData);
      this.requestData['activities-distance'].forEach(sleep => {

        this.chartData.datasets.fill = this.fill
        this.chartData.datasets.borderColor = this.borderColor;
        this.chartData.datasets.tension = this.tension;

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateTime)
        this.chartData.datasets[0].data.push(sleep.value)
      })

      this.loaded = true;
    },
    async heartLine() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);
      console.log(this.requestData);
      this.requestData['activities-heart'].forEach(sleep => {

        this.chartData.datasets.fill = this.fill
        this.chartData.datasets.borderColor = this.borderColor;
        this.chartData.datasets.tension = this.tension;

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateTime)
        this.chartData.datasets[0].data.push(sleep.value.restingHeartRate)
      })

      this.loaded = true;
    }
  },
  async mounted() {

    if (this.methodName ==='sleepLine') {
      this.sleepLine();
    } else if (this.methodName === 'heartLine') {
      this.heartLine();
    } else if (this.methodName === 'actLine') {
      this.actLine();
    }
  }
}
</script>

<style scoped>

</style>