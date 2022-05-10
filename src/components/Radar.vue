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
      v-if="loaded"
      :identity="identity"
      :methodName="methodName"

  />
</template>

<script>
import {Radar} from 'vue-chartjs/legacy'

import {Chart as ChartJS, Legend, LineElement, PointElement, RadialLinearScale, Title, Tooltip} from 'chart.js'
import {json, makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)

export default {
  name: 'RadarChart',
  components: {
    Radar
  },
  props: {
    chartId: {
      type: String,
      default: 'radar-chart'
    },

    identity: {
      type: String
    },
    chartLabel: {
      type: String,
    },
    chartLabel2: {
      type: String,
    },
    chartLabel3: {
      type: String,
    },
    chartLabel4: {
      type: String,
    },
    methodName: {
      type: String
    },

    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 800
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
      //       'Eatin',
      //       'Ballin',
      //       'Sleepin',
      //       'Workin',
      //       'Codin',
      //       'Gy',
      //       'Chillin'
      //     ],
      //     datasets: [
      //       {
      //         label: 'My First dataset',
      //         backgroundColor: 'rgba(179,181,198,0.2)',
      //         borderColor: 'rgba(179,181,198,1)',
      //         pointBackgroundColor: 'rgba(179,181,198,1)',
      //         pointBorderColor: '#fff',
      //         pointHoverBackgroundColor: '#fff',
      //         pointHoverBorderColor: 'rgba(179,181,198,1)',
      //         data: [65, 59, 90, 81, 56, 55, 40]
      //       },
      //       {
      //         label: 'My Second dataset',
      //         backgroundColor: 'rgba(255,99,132,0.2)',
      //         borderColor: 'rgba(255,99,132,1)',
      //         pointBackgroundColor: 'rgba(255,99,132,1)',
      //         pointBorderColor: '#fff',
      //         pointHoverBackgroundColor: '#fff',
      //         pointHoverBorderColor: 'rgba(255,99,132,1)',
      //         data: [28, 48, 40, 19, 96, 27, 100]
      //       }
      //     ]
      //   },
      //   chartOptions: {
      //     responsive: true,
      //     maintainAspectRatio: false
      //   }
      // }
      // }
      loaded: false,

      requestData: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Hours Asleep",
            backgroundColor: "#ff4b00",
            pointBackgroundcolor: "#b907ff",
            data: []
          },

          {
            label: "Efficiency",
            backgroundColor: "#ffc107",
            data: [],
          },
          {
            label: "Hours Awake",
            backgroundColor: "#c800ff",
            data: [],
          },
          {
            label: "Time in bed",
            backgroundColor: "#00ff44",
            data: [],
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false

      },
    }
  },
  methods: {
    async sleepRadar() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);

      this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateOfSleep)

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.minutesAsleep / 60)
        this.chartData.datasets[1].data.push(sleep.efficiency / 10)
        this.chartData.datasets[2].data.push(sleep.minutesAwake / 60)
        this.chartData.datasets[3].data.push(sleep.timeInBed / 60)
      })

      this.loaded = true;
    },
    async activityRadar1() {
      console.log(this.identity)

      this.requestData = await makeGetRequest(this.identity);

      console.log(this.requestData)

      this.requestData['activities-steps'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateTime)

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.value)
   
      })

      this.loaded = true;
    },
  },
  async mounted() {

    if (this.methodName === 'sleepRadar') {
      this.sleepRadar()
    } else if (this.methodName === 'activityRadar1') {
      this.activityRadar1()
    }

  }
}
</script>

<style scoped>

</style>