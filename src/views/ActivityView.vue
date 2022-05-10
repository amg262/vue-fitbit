<template>
  <div>
    <div class="activity">
      <div class="fb-user-bio offset-2 col-md-8">
        <h1 class="fb-heading">Activity</h1>
        <p>
          The Activity endpoints are used to query and/or modify a Fitbit user's daily activity data. The information
          returned is the step count, distance, elevation, floors, calories burned, active minutes, activity goals, exercise
          details, etc
        </p>
      </div>
      <div class="row">
        <div class="col">
          <RadarChart
              identity="https://api.fitbit.com/1.2/user/943HNF/activities/steps/date/2022-01-01/today.json"
              chart-label="25 Day Sleep Analysis"
              chart-background="#008CFFFF"
              method-name="activityRadar1"

          >
          </RadarChart>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

// import NavBar from "@/components/NavBar";
// import BarChart from "@/components/BarChart";
// import LineChartGenerator from "@/components/LineChart";
// // import LineChartGenerator from "@/components/LineChart";
// // import Doughnut from "@/components/Doughnut";
// import PolarChart from "@/components/PolarChart";
// import RadarChart from "@/components/Radar";
import RadarChart from "@/components/Radar";
// import Scatter from "@/components/Scatter";


export default {
  name: 'App',
  components: {
    RadarChart,
    // BarChart,
    // LineChartGenerator,
    // PolarChart,
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
