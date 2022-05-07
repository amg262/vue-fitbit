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

      //let v = this.identity;

     //this.responseData = await makeGetRequest(this.identity);

      let data = {
        'backgroundColor': ["#41B883"],
        'data': [25]
      };
      this.chartData.labels.push("two")
      this.chartData.datasets.push(data);
      console.log(this.chartData)

    }
  },
  async mounted() {


      this.deviceDough();

    this.loaded = true;
  }
}
</script>


<style scoped>

</style>