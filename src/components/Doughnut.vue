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
      default: 600
    },
    height: {
      type: Number,
      default: 600
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
        labels: [],
        datasets: [
          {
            backgroundColor: [],
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
  methods: {
    async deviceDough() {

      this.responseData = await makeGetRequest(this.identity);

      let data = {
        'backgroundColor': ["#41B883", "#FD0707FF"],
        'data': [this.responseData[1].batteryLevel, (100 - this.responseData[1].batteryLevel)]
      };
      this.chartData.labels.push("Battery")
      this.chartData.datasets.push(data);
      console.log(this.chartData)

    }
  },
  async mounted() {

    this.responseData = await makeGetRequest(this.identity);

    let data = {
      'backgroundColor': ["#41B883", "#FD0707FF"],
      'data': [this.responseData[1].batteryLevel, (100 - this.responseData[1].batteryLevel)]
    };
    this.chartData.labels.push("Battery")
    this.chartData.datasets.push(data);
    console.log(this.chartData)
    this.loaded = true;
  }
}
</script>


<style scoped>

</style>