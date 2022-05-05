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
      chartData: {
        labels: [],
        datasets: [
          {
            label: this.chartLabel,
            backgroundColor: this.chartBackground,
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

    console.log(this.identity)
    console.log(json)
    let v = await makeGetRequest(this.identity);

    v.sleep.forEach(sleep => {

      // eslint-disable-next-line vue/no-mutating-props
      // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
      this.chartData.labels.push(sleep.dateOfSleep)
      this.chartData.datasets[0].data.push(sleep.duration / 3600000)
    })

    this.loaded = true;
  }
}
</script>

<style scoped>

</style>