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
import {makeGetRequest} from "@/models/ApiRequest";

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
      chartBackground2: "#00E1FFFF",
      chartData: {
        labels: [],
        datasets: [
          {
            label:[],
            backgroundColor: "#00e1ff",
            data: []
          },

          {
            label: [],
            backgroundColor: "#ffc107",
            data:[],
          },
          {
            label: [],
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

      this.requestData = await makeGetRequest(this.identity);
      // this.chartData.labels.push("Duration")
      // this.chartData.labels.push("Efficiency")
      this.chartData.labels.push("Awakenings")
      this.chartData.labels.push("Awakenings")

      this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));


        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)

        // this.chartData.datasets[0].data.push(sleep.duration / 3600000)
        // this.chartData.datasets[1].data.push(sleep.efficiency/ 10)
        this.chartData.datasets[0].data.push(sleep.awakeningsCount)
        this.chartData.datasets[0].backgroundColor = this.chartBackground2




      })

      this.loaded = true;
    },
    async weightPolar() {

      this.requestData = await makeGetRequest(this.identity);

      console.log(this.requestData)

      this.chartData.labels.push("BMI")

      this.chartData.labels.push("Weight")

      this.requestData.weight.forEach(sleep => {


        console.log(parseInt( sleep.fat))

        var st =parseInt( sleep.fat)
        var s = st.toString();
        console.log(s)

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));


        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)

        this.chartData.datasets[0].data.push(sleep.bmi)

        this.chartData.datasets[1].data.push(sleep.weight)
        this.chartData.datasets[0].label.push("BMI")

        this.chartData.datasets[1].label.push("Weight")
      })

      this.loaded = true;
    },
  },


  async mounted() {

    if (this.methodName === 'sleepPolar') {
      this.sleepPolar();
    }
    this.weightPolar();
  }

}
</script>


<style scoped>

</style>