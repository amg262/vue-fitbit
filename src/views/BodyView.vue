<template>
  <div class="row fb-page body">
    <h1 class="fb-heading">Body</h1>
    <p>The Body endpoints are used for querying and modifying the user 's body fat and weight data.</p>
    <p>

    </p>



    <PolarChart
        identity="body/log/weight/date/2022-05-11.json"
        chart-label="Weight Statistics"
        chart-background="#008CFFFF"
        method-name="weightPolar"
    >
    </PolarChart>

    <!--    <BarChart-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </BarChart>-->
    <!--    <br/>-->
    <!--    <BarChart-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"-->
    <!--        chart-label="100 Day Sleep Log"-->
    <!--        chart-background="#008CCEF"-->
    <!--    >-->
    <!--    </BarChart>-->
    <!--    <br/>-->
    <!--    <LineChartGenerator-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=10"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </LineChartGenerator>-->
    <!--    <br/>-->
    <!--    <LineChartGenerator-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"-->
    <!--        chart-label="100 Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </LineChartGenerator>-->
    <!--    <br/>-->
    <!--    <b-row>-->

    <!--      <b-col>-->
    <!--        <PolarChart-->
    <!--            identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=5"-->
    <!--            chart-label="Ten Day Sleep Log"-->
    <!--            chart-background="#008CFFFF"-->
    <!--        >-->
    <!--        </PolarChart>-->
    <!--      </b-col>-->
    <!--      <br/>-->
    <!--      <b-col>-->
    <!--        <RadarChart-->
    <!--            identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=25"-->
    <!--            chart-label="Ten Day Sleep Log"-->
    <!--            chart-background="#008CFFFF"-->
    <!--        >-->
    <!--        </RadarChart>-->
    <!--      </b-col>-->
    <!--    </b-row>-->
    <!--    <br/>-->
    <!--    <br/>-->
    <!--    <Scatter-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=5"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </Scatter>-->
    <!--    <br/>-->


    <!--    <Doughnut-->
    <!--        identity="https://api.fitbit.com/1.2/user/943HNF/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=20"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </Doughnut>-->


    <!--    http://localhost/#access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhGSzMiLCJzdWIiOiI5NDNITkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjUyMzE2NjM3LCJpYXQiOjE2NTE3MTE4Mzd9.3InbmYlJ4DkiV1ZVjUkyuciQDDw0lHVAyf9qQ_4ZATY&user_id=943HNF&scope=nutrition+weight+activity+social+location+settings+profile+sleep+heartrate&token_type=Bearer&expires_in=604800-->
  </div>

</template>


<script>

// import NavBar from "@/components/NavBar";
// import BarChart from "@/components/BarChart";
// // import LineChartGenerator from "@/components/LineChart";
// import LineChartGenerator from "@/components/LineChart";
// import Doughnut from "@/components/Doughnut";
import PolarChart from "@/components/PolarChart";
// // import Radar from "@/components/Radar";
// import RadarChart from "@/components/Radar";
// import Scatter from "@/components/Scatter";


export default {
  name: 'App',
  components: {
    // RadarChart,
    // BarChart,
    // LineChartGenerator,
    PolarChart,
    //
    // Doughnut,
    // Scatter,
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
