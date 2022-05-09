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
      :identity="identity"
      :methodName="methodName"
  />
</template>

<script>
import {Bar} from 'vue-chartjs/legacy'

import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'
// import axios from "axios";
import '../models/ApiRequest'
import {json, makeGetRequest} from "@/models/ApiRequest";

import annotationPlugin from 'chartjs-plugin-annotation';

// import {hi} from '../models/Help';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, annotationPlugin)


// ChartJS.register(annotationPlugin);

export default {
  name: 'BarChart',
  components: {
    Bar,
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
    async sleepBar() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);

      this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));

        this.chartData.labels.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.duration / 3600000)
      })

      this.loaded = true;
    }
  },
  data() {
    return {
      loaded: false,
      requestData: {},
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

    if (this.methodName === 'sleepBar') {
      this.sleepBar();
    }
  }
}
</script>

<style scoped>

</style>