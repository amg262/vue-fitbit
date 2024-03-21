<template>
  <div>
    <div class="activity">
      <div class="fb-user-bio offset-2 col-md-8">
        <h1 class="fb-heading">Activity</h1>
        <p>
          The Activity endpoints are used to query and/or modify a Fitbit user's daily activity data. The information
          returned is the step count, distance, elevation, floors, calories burned, active minutes, activity goals,
          exercise
          details, etc
        </p>
      </div>
      <div class="row">
        <BarChart
            identity="activities/steps/date/2024-01-01/today.json"
            chart-label="Steps Per Day This Year"
            chart-background="#008CFFFF"
            method-name="actBar"
        />

        <BarChart
            identity="activities/steps/date/2023-01-01/2023-12-31.json"
            chart-label="Steps Per Day Last Year"
            chart-background="#008CFFFF"
            method-name="actBar"
        />

        <RadarChart
            identity="activities/minutesSedentary/date/2024-01-01/today.json"
            identity2="activities/minutesLightlyActive/date/2024-01-01/today.json"
            identity3="activities/minutesFairlyActive/date/2024-01-01/today.json"
            identity4="activities/minutesVeryActive/date/2024-01-01/today.json"
            chart-label="This Year Daily Activity"
            chart-background="#008CFFFF"
            method-name="activityRadar1"
        />

        <RadarChart
            identity="activities/minutesSedentary/date/2023-03-01/today.json"
            identity2="activities/minutesLightlyActive/date/2023-03-01/today.json"
            identity3="activities/minutesFairlyActive/date/2023-03-01/today.json"
            identity4="activities/minutesVeryActive/date/2023-03-01/today.json"
            chart-label="2.5 Month Daily Activity"
            chart-background="#008CFFFF"
            method-name="activityRadar1"
        />

        <LineChartGenerator
            identity="activities/distance/date/2023-01-01/today.json"
            chart-label="Distance Per Day This Year"
            chart-background="#008CFFFF"
            method-name="actLine"
        >
        </LineChartGenerator>
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
import RadarChart from '@/components/Radar';
import BarChart from '@/components/BarChart';
import LineChartGenerator from '@/components/LineChart'; // import Scatter from "@/components/Scatter";
// import Scatter from "@/components/Scatter";

export default {
  name: 'App',
  components: {

    RadarChart,
    // BarChart,
    LineChartGenerator,
    // PolarChart,
    //
    // Doughnut,
    // Scatter,
    BarChart,
  },
  data() {

    return {};
  },
};
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
