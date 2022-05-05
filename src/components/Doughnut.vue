<template>
  <Doughnut
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
import {Doughnut} from 'vue-chartjs/legacy'

import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip} from 'chart.js'
import {json, makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
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
      default: 'doughnut-chart'
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
      chartData: {
        //labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        labels: [],
        datasets: [
          {
            labels: this.chartLabel,

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