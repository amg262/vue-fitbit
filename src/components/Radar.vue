<template>
  <Radar
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
      :identity2="identity2"
      :identity3="identity3"
      :identity4="identity4"
      :methodName="methodName"

  />
</template>

<script>
import {Radar} from 'vue-chartjs/legacy'

import {Chart as ChartJS, Legend, LineElement, PointElement, RadialLinearScale, Title, Tooltip} from 'chart.js'
import {makeGetRequest} from "@/models/ApiRequest";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)

export default {
  name: 'RadarChart',
  components: {
    Radar
  },
  props: {
    chartId: {
      type: String,
      default: 'radar-chart'
    },

    identity: {
      type: String
    },
    identity2: {
      type: String
    },
    identity3: {
      type: String
    },
    identity4: {
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
    methodName: {
      type: String
    },

    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 700
    },
    height: {
      type: Number,
      default: 700
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
      //         borderColor: 'rgba(179,181,198,1)',
      //         pointBackgroundColor: 'rgba(179,181,198,1)',
      //         pointBorderColor: '#fff',
      //         pointHoverBackgroundColor: '#fff',
      //         pointHoverBorderColor: 'rgba(179,181,198,1)',
      //         data: [65, 59, 90, 81, 56, 55, 40]
      //       },
      //       {
      //         label: 'My Second dataset',
      //         backgroundColor: 'rgba(255,99,132,0.2)',
      //         borderColor: 'rgba(255,99,132,1)',
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
      // }
      loaded: false,

      requestData: {},
      requestData2: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: [],
            backgroundColor: "#ff4b00",
            pointBackgroundcolor: "",
            data: []
          },

          {
            label: [],
            backgroundColor: "#ffc107",
            data: [],
          },
          {
            label: [],
            backgroundColor: "#a851dc",
            data: [],
          },
          {
            label: [],
            backgroundColor: "#00ff44",
            data: [],
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false

      },
    }
  },
  methods: {
    async hrRadar() {

      this.requestData = await makeGetRequest(this.identity);

      this.chartData.datasets[0].label.push("Sedentary")
      this.chartData.datasets[1].label.push("Lightly Active")
      this.chartData.datasets[2].label.push("Faily Active")
      this.chartData.datasets[3].label.push("Very Active")

      this.requestData['activities-heart'].forEach(sleep => {
        this.chartData.labels.push(sleep.dateTime)

        console.log("heart 1",sleep)
        sleep['value'].forEach(sleep2 => {
          this.chartData.labels.push(sleep.dateTime)
          console.log("heart 2",sleep2)

          // this.requestData.sleep.forEach(sleep => {

          // eslint-disable-next-line vue/no-mutating-props
          // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));

          // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
          this.chartData.datasets[0].data.push(sleep2.caloriesOut)
          this.chartData.datasets[0].label.push(sleep2.name)
        })
      })


      this.loaded = true;
    },
    async sleepRadar2() {

      this.requestData = await makeGetRequest(this.identity);
      this.chartData.datasets[0].label.push("Hours while Asleep")
      this.chartData.datasets[1].label.push("Efficiency Score")
      this.chartData.datasets[2].label.push("Hours spent awake")
      this.chartData.datasets[3].label.push("Total time in bed")

      this.requestData.sleep.forEach(sleep => {
        this.chartData.labels.push(sleep.dateOfSleep)
        // noinspection JSDeprecatedSymbols
        this.requestData['sleep'].levels.summary.forEach(sleep2 => {

          // eslint-disable-next-line vue/no-mutating-props
          // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));


          // this.chartData.datasets[1].label.push(sleep.dateOfSleep)


          this.chartData.datasets[0].data.push(sleep2.deep.minutes / 60)
          this.chartData.datasets[1].data.push(sleep2.light.minutes / 60)
          this.chartData.datasets[2].data.push(sleep2.rem.minutes / 60)
          this.chartData.datasets[3].data.push(sleep2.wake.minutes / 60)
        })
      })

      this.loaded = true;
    },
    async sleepRadar() {

      this.requestData = await makeGetRequest(this.identity);
      this.chartData.datasets[0].label.push("Hours while Asleep")
      this.chartData.datasets[1].label.push("Efficiency Score")
      this.chartData.datasets[2].label.push("Hours spent awake")
      this.chartData.datasets[3].label.push("Total time in bed")

      this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        this.chartData.labels.push(sleep.dateOfSleep)

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)


        this.chartData.datasets[0].data.push(sleep.minutesAsleep / 60)
        this.chartData.datasets[1].data.push(sleep.efficiency / 10)
        this.chartData.datasets[2].data.push(sleep.minutesAwake / 60)
        this.chartData.datasets[3].data.push(sleep.timeInBed / 60)
      })

      this.loaded = true;
    },
    async activityRadar1() {

      this.requestData = await makeGetRequest(this.identity);
      this.requestData2 = await makeGetRequest(this.identity2);
      this.requestData3 = await makeGetRequest(this.identity3);
      this.requestData4 = await makeGetRequest(this.identity4);


      // console.log(this.requestData)
      console.log(this.requestData2['activities-minutesLightlyActive'])

      this.chartData.datasets[0].label.push("Sedentary")
      this.chartData.datasets[1].label.push("Lightly Active")
      this.chartData.datasets[2].label.push("Faily Active")
      this.chartData.datasets[3].label.push("Very Active")

      this.requestData['activities-minutesSedentary'].forEach(sleep => {
        this.chartData.labels.push(sleep.dateTime)

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.value / 60)

      })

      this.requestData2['activities-minutesLightlyActive'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        //this.chartData.labels.push(sleep.dateTime)
        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[1].data.push(sleep.value / 60)

      })

      this.requestData3['activities-minutesFairlyActive'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        //this.chartData.labels.push(sleep.dateTime)
        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[2].data.push(sleep.value / 60)

      })

      this.requestData4['activities-minutesVeryActive'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        //this.chartData.labels.push(sleep.dateTime)
        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[3].data.push(sleep.value / 60)

      })

      this.loaded = true;
    },
    async activityRadar2() {

      this.requestData = await makeGetRequest(this.identity);
      this.requestData2 = await makeGetRequest(this.identity2);
      this.requestData3 = await makeGetRequest(this.identity3);
      this.requestData4 = await makeGetRequest(this.identity4);


      this.requestData['activities-steps'].forEach(sleep => {
        this.chartData.labels.push(sleep.dateTime)

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));

        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[0].data.push(sleep.value)

      })

      this.requestData2['activities-calories'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        //this.chartData.labels.push(sleep.dateTime)
        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[1].data.push(sleep.value)

      })

      this.requestData3['activities-minutesSedentary'].forEach(sleep => {

        // this.requestData.sleep.forEach(sleep => {

        // eslint-disable-next-line vue/no-mutating-props
        // this.chartCalculation += parseFloat(this.chartData.datasets[0].data.push(sleep.duration / 3600000));
        //this.chartData.labels.push(sleep.dateTime)
        // this.chartData.datasets[1].label.push(sleep.dateOfSleep)
        this.chartData.datasets[2].data.push(sleep.value)

      })

      this.loaded = true;
    },
  },
  async mounted() {

    if (this.methodName === 'sleepRadar') {
      this.sleepRadar()
    } else if (this.methodName === 'activityRadar1') {
      this.activityRadar1()
    } else if (this.methodName === 'sleepRadar2') {
      this.sleepRadar2()
    } else if (this.methodName === 'hrRadar') {
      this.hrRadar()
    }

  }
}
</script>

<style scoped>

</style>