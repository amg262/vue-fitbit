<template>
  <div>
    <div class="row fb-page body">
      <h1 class="fb-heading">This is an Devices page</h1>
      <p>The Body endpoints are used for querying and modifying the user 's body fat and weight data.</p>
      <p>
        The Devices endpoints displays information about the devices paired to a user's account.
      </p>

      <div class="col">
        <h4><a target="_blank" class="fb-no-underline" href="https://dev.fitbit.com/build/reference/web-api/body/">Get
          Weight Log</a></h4>
        <p>
          Retrieves a list of all user's weight log entries for a given date.
        </p>
      </div>

      <DeviceAccount></DeviceAccount>


      <div class="row">

        <div class="col-md-6">
          <PieChart
              identity="https://api.fitbit.com/1/user/-/devices.json"
              method-name="deviceDough"
          ></PieChart>
        </div>
        <div class="col-md-6">
          <Doughnut
              identity="https://api.fitbit.com/1/user/-/devices.json"
              method-name="deviceDough"
          >

          </Doughnut>
        </div>
      </div>


    </div>
  </div>
</template>


<script>

// import NavBar from "@/components/NavBar";
// import BarChart from "@/components/BarChart";
// // import LineChartGenerator from "@/components/LineChart";
// import LineChartGenerator from "@/components/LineChart";
// import Doughnut from "@/components/Doughnut";
// import PolarChart from "@/components/PolarChart";
// // import Radar from "@/components/Radar";
// import RadarChart from "@/components/Radar";
import PieChart from "@/components/Pie";
import Doughnut from "@/components/Doughnut";
import DeviceAccount from "@/components/DeviceAccount";

export default {
  name: 'App',
  components: {
    DeviceAccount,
    PieChart,
    // RadarChart,
    // BarChart,
    // LineChartGenerator,
    // PolarChart,
    //
    Doughnut,
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
