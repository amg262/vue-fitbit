<template>
  <div class="row fb-page body">
    <h1 class="fb-heading">This is an sleep page</h1>
    <p>The Sleep endpoints are used for querying and modifying the sleep data.</p>
    <p>
      The endpoints in this section are:
    </p>

    <div class="col">
      <h4><a target="_blank" class="fb-no-underline" href="https://dev.fitbit.com/build/reference/web-api/body/">Get Weight Log</a></h4>
      <p>
        Retrieves a list of all user's weight log entries for a given date.
      </p>
    </div>

    <BarChart
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-10&sort=desc&offset=0&limit=50"
        chart-label="50 Day Sleep Log"
        chart-background="#008CFFFF"
        method-name="sleepBar"
    >
    </BarChart>
    <!--    <br/>-->
    <!--    <BarChart-->
    <!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"-->
    <!--        chart-label="100 Day Sleep Log"-->
    <!--        chart-background="#008CCEF"-->
    <!--    >-->
    <!--    </BarChart>-->
    <!--    <br/>-->
    <LineChartGenerator
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-10&sort=desc&offset=0&limit=25"
        chart-label="25 Day Sleep Log"
        chart-background="#ff7c00"
        method-name="sleepLine"
    >
    </LineChartGenerator>
    <!--    <br/>-->
    <!--    <LineChartGenerator-->
    <!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"-->
    <!--        chart-label="100 Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </LineChartGenerator>-->
    <!--    <br/>-->
    <b-row>

      <b-col>
        <PolarChart
            identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-10&sort=desc&offset=0&limit=5"
            chart-label="5 Day Sleep Efficiency"
            chart-background="#008CFFFF"
            method-name="sleepPolar"
        >
        </PolarChart>
      </b-col>
      <br/>
      <b-col>
        <RadarChart
            identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-10&sort=desc&offset=0&limit=25"
            chart-label="25 Day Sleep Analysis"
            chart-background="#008CFFFF"
            method-name="sleepRadar"
        >
        </RadarChart>
      </b-col>
    </b-row>

    <!--    <br/>-->
    <!--    <br/>-->
    <!--    <Scatter-->
    <!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=5"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </Scatter>-->
    <!--    <br/>-->


    <!--    <Doughnut-->
    <!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=20"-->
    <!--        chart-label="Ten Day Sleep Log"-->
    <!--        chart-background="#008CFFFF"-->
    <!--    >-->
    <!--    </Doughnut>-->



</div>

</template>


<script>

// import NavBar from "@/components/NavBar";
import BarChart from "@/components/BarChart";
import LineChartGenerator from "@/components/LineChart";
// import LineChartGenerator from "@/components/LineChart";
// import Doughnut from "@/components/Doughnut";
import PolarChart from "@/components/PolarChart";
// // import Radar from "@/components/Radar";
import RadarChart from "@/components/Radar";
// import Scatter from "@/components/Scatter";


export default {
  name: 'App',
  components: {
    RadarChart,
    BarChart,
    LineChartGenerator,
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
