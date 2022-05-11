<template>
  <div class="row fb-page body">
    <h1 class="fb-heading">Heart Rate</h1>
    <p>The Heart Rate Time Series endpoints are used for querying the user's heart rate data. </p>


    <div class="row">
      <div class="col"></div>

      <div class="col"></div>
    </div>
    <div class="row">
      <!--      <InputForm @date-picked="popup"></InputForm>-->

      <RadarChart
          identity="activities/heart/date/2022-05-01/today.json"
          chart-label="2.5 Month Daily Activity"
          chart-background="#008CFFFF"
          method-name="hrRadar"

      >

      </RadarChart>

      <LineChartGenerator
          identity="activities/heart/date/2022-01-01/today.json"
          method-name="heartLine"
          chart-label="Resting Heart Rate for 2022"
          chart-background="#ff7c00"
          border-color="#4BC0C0FF"
          tension="0.5"
          fill="true"
      >

      </LineChartGenerator>

      <LineChartGenerator
          identity="activities/heart/date/2021-07-01/2021-12-31.json"
          method-name="heartLine"
          chart-label="Resting Heart Rate for 2022"
          chart-background="#ffeb00"
          border-color="#35524a"
          tension="0.1"
          fill="true"
      >

      </LineChartGenerator>
      <LineChartGenerator
          identity="/activities/heart/date/2021-01-01/2021-06-30.json"
          method-name="heartLine"
          chart-label="Resting Heart Rate for 2022"
          chart-background="#dc3545c2"
          border-color="#230dfd"
          tension="0.3"
          fill="true"
      >

      </LineChartGenerator>



    </div>


    <!--    http://localhost/#access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUyMzE2NjM3LCJpYXQiOjE2NTE3MTE4Mzd9.3InbmYlJ4DkiV1ZVjUkyuciQDDw0lHVAyf9qQ_4ZATY&user_id=943HNF&scope=nutrition+weight+activity+social+location+settings+profile+sleep+heartrate&token_type=Bearer&expires_in=604800-->
  </div>

</template>


<script>


import LineChartGenerator from "@/components/LineChart";
// import InputForm from "@/components/InputForm";
import RadarChart from "@/components/Radar";
export default {
  name: 'App',
  components: {

    RadarChart,
    // BarChart,
    LineChartGenerator,
    // InputForm,
    // PolarChart,
    //
    // Doughnut,
    // Scatter,
    // BarChart
  },
  methods: {
    popup: function (date1, date2) {
      console.log(date1, date2)
      this.v = "https://api.fitbit.com/1/user/943HNF/activities/heart/date/2022-01-01/today.json"

    }
  },
  data() {
    return {
      v: '',
      d1: '',
      d2: '',
    }
  },


  async mounted() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  /*margin-top: 60px;*/
}
</style>
