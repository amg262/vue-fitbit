<template>
  <PolarArea
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
import {PolarArea} from 'vue-chartjs/legacy'

import {ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Title, Tooltip} from 'chart.js'
import {json, makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

export default {
  name: 'PolarAreaChart',
  components: {
    PolarArea
  },
  props: {
    chartId: {
      type: String,
      default: 'polar-chart'
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
    chartBackground: {
      type: String,
    },
    chartCalculation: {
      type: Number
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
    //         pointBackgroundColor: 'rgba(179,181,198,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: '#fff',
    //         pointHoverBorderColor: 'rgba(179,181,198,1)',
    //         data: [65, 59, 90, 81, 56, 55, 40]
    //       },
    //       {
    //         label: 'My Second dataset',
    //         backgroundColor: 'rgba(255,99,132,0.2)',
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
      requestData: {},
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: this.chartLabel,
            backgroundColor: this.chartBackground,
            pointBackgroundcolor: "#b907ff",
            data: []
          },

          {
            label: this.chartLabel2,
            backgroundColor: "#ffc107",
            data:[],
          },

        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  methods: {
    async sleepPolar() {
      console.log(this.identity)
      console.log(json)
      this.requestData = await makeGetRequest(this.identity);

      this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateOfSleep)
        this.chartData.labels.push("Efficieny")

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.duration / 3600000)
        this.chartData.datasets[1].data.push(sleep.efficiency/ 10)
      })

      this.loaded = true;
    }
  },
  async mounted() {

    if (this.methodName === 'sleepPolar') {
      this.sleepPolar();
    }

  }

}
</script>


<style scoped>

</style>