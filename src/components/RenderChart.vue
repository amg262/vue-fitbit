<template>
  <div class="container">
    <Bar v-if="loaded" :chart-data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'RenderChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {}
  }),
  async mounted () {
    this.loaded = false
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUwOTMwNTA1LCJpYXQiOjE2NTA4NDQxMDl9._eQFdJ-n0o9L5_j7KyKYqI6kY243AP_WZMpanEgqfG4"
    try {
      const { userlist } =  await fetch('https://api.fitbit.com/1/user/-/devices.json', {
        method: "GET",
        headers: {"Authorization": "Bearer " + access_token}
      })
      this.chartdata = userlist

      this.loaded = true
      console.log(userlist)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>