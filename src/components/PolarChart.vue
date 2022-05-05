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
      default: 'polar-chart'
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