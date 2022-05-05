<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BarChart
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"
        chart-label="Ten Day Sleep Log"
        chart-background="#008CFFFF"
    >
    </BarChart>
    <br />
    <LineChartGenerator
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"
        chart-label="Ten Day Sleep Log"
        chart-background="#008CFFFF"
    >
    </LineChartGenerator>

    <br />

    <PolarChart
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"
        chart-label="Ten Day Sleep Log"
        chart-background="#008CFFFF"
    >
    </PolarChart>
    <br />

    <Doughnut
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"
        chart-label="Ten Day Sleep Log"
        chart-background="#008CFFFF"
    >
    </Doughnut>


<!--    http://localhost/#access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUyMzE2NjM3LCJpYXQiOjE2NTE3MTE4Mzd9.3InbmYlJ4DkiV1ZVjUkyuciQDDw0lHVAyf9qQ_4ZATY&user_id=943HNF&scope=nutrition+weight+activity+social+location+settings+profile+sleep+heartrate&token_type=Bearer&expires_in=604800-->
  </div>

</template>


<script>

// import NavBar from "@/components/NavBar";
import BarChart from "@/components/BarChart";
// import LineChartGenerator from "@/components/LineChart";
import LineChartGenerator from "@/components/LineChart";
import Doughnut from "@/components/Doughnut";
import PolarChart from "@/components/PolarChart";


export default {
  name: 'App',
  components: {
    BarChart,
    LineChartGenerator,
    Doughnut,
    PolarChart
    // BarChart
  },
  data() {

    return {}
  },
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
