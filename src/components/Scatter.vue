<template>
  <Scatter
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
  />
</template>

<script>
import {Scatter} from 'vue-chartjs/legacy'

import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import {json, makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale
)

export default {
  name: 'ScatterChart',
  components: {
    Scatter
  },
  props: {
    chartId: {
      type: String,
      default: 'scatter-chart'
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

      //       label: 'Scatter Dataset 1',
      //       fill: false,
      //       borderColor: '#f87979',
      //       backgroundColor: '#f87979',
      //       data: [
      //         {
      //           x: -2,
      //           y: 4
      //         },
      //         {
      //           x: -1,
      //           y: 1
      //         },
      //         {
      //           x: 0,
      //           y: 0
      //         },
      //         {
      //           x: 1,
      //           y: 1
      //         },
      //         {
      //           x: 2,
      //           y: 4
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Scatter Dataset 2',
      //       fill: false,
      //       borderColor: '#7acbf9',
      //       backgroundColor: '#7acbf9',
      //       data: [
      //         {
      //           x: -2,
      //           y: -4
      //         },
      //         {
      //           x: -1,
      //           y: -1
      //         },
      //         {
      //           x: 0,
      //           y: 1
      //         },
      //         {
      //           x: 1,
      //           y: -1
      //         },
      //         {
      //           x: 2,
      //           y: -4
      //         }
      //       ]
      //     }
      //   ]
      // },
      //     chartOptions: {
      //       responsive: true,
      //       maintainAspectRatio: false
      //     }
      //   }
      // }
      loaded: false,

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
  async mounted() {

    console.log(this.identity)
    console.log(json)
    let v = await makeGetRequest(this.identity);

    v.sleep.forEach(sleep => {

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
  }

}
</script>


<style scoped>

</style>