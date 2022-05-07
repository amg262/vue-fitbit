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
      :method-name="methodName"
  />
</template>

<script>
import {Doughnut} from 'vue-chartjs/legacy'

import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip} from 'chart.js'
import {makeGetRequest} from "@/models/ApiRequest";
// import {json, makeGetRequest} from "@/models/ApiRequest";

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
    methodName: {
      type: String,
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
      loaded: false,
      responseData: {},
      chartData: {
        labels: ['one'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [10]
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
    async deviceDough() {

      this.responseData = await makeGetRequest(this.identity);

      let arr = {
        'backgroundColor': ["#41B883"],
        'data': [25]
      };
      this.chartData.labels.push("two")
      this.chartData.datasets.push(arr);
      console.log(this.chartData)

    }
  },
  async mounted() {

    if (this.methodName === 'deviceDough') {
      this.deviceDough();
    }
    this.loaded = true;
  }
}
</script>


<style scoped>

</style>