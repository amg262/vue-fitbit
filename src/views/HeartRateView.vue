<template>
  <div class="row fb-page body">
    <h1 class="fb-heading">This is an body page</h1>
    <p>The Body endpoints are used for querying and modifying the user 's body fat and weight data.</p>
    <p>
      The endpoints in this section are:
    </p>

    <div class="col">
      <h4><a target="_blank" class="fb-no-underline" href="https://dev.fitbit.com/build/reference/web-api/body/">Get Weight Log</a></h4>
      <p>
        Retrieves a list of all user's weight log entries for a given date.
      </p>
    </div>
    <div class="row">
      <div class="col"></div>

      <div class="col"></div>
    </div>
    <div class="row">
<!--      <InputForm @date-picked="popup"></InputForm>-->

      <LineChartGenerator identity="https://api.fitbit.com/1/user/943HNF/activities/heart/date/2022-01-01/today.json" method-name="heartLine"></LineChartGenerator>
    </div>




    <!--    http://localhost/#access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUyMzE2NjM3LCJpYXQiOjE2NTE3MTE4Mzd9.3InbmYlJ4DkiV1ZVjUkyuciQDDw0lHVAyf9qQ_4ZATY&user_id=943HNF&scope=nutrition+weight+activity+social+location+settings+profile+sleep+heartrate&token_type=Bearer&expires_in=604800-->
  </div>

</template>


<script>


import LineChartGenerator from "@/components/LineChart";
// import InputForm from "@/components/InputForm";

export default {
  name: 'App',
  components: {

    // RadarChart,
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
    popup: function(date1, date2) {
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
