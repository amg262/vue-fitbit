<template>
  <Pie
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
import {Pie} from 'vue-chartjs/legacy'

import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip} from 'chart.js'
import {makeGetRequest} from "@/models/ApiRequest";
// import {makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
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
        //labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        labels: [],
        datasets: [
          {
            // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            // data: [1, 1, 10, 10]
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


    }
  },
  async mounted() {

    //let v = this.identity;

     this.responseData = await makeGetRequest(this.identity);

    console.log(this.responseData)

    let data = {
      'backgroundColor': ["#41B883", "#FD0707FF"],
      'data': [this.responseData[1].batteryLevel, (100 - this.responseData[1].batteryLevel)]
    };
    this.chartData.labels.push("Battery")
    this.chartData.datasets.push(data);
    console.log(this.chartData)

      this.deviceDough();

    this.loaded = true;
  }
}
</script>


<style scoped>

</style>