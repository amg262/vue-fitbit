<template>


  <div id="app" class="container-fluid">

    <NavBar class="sticky-top"></NavBar>

    <router-view/>

  </div>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import NavBar from "@/components/NavBar";
// import BarChart from "@/components/BarChart";
import {themeColors} from '@/models/Colors.js'
import VueRouter from "vue-router";

// import BubbleChart from "@/components/BubbleChart";
// // import Doughnut from "@/components/Doughnut";
// import DoughnutChart from "@/components/Doughnut";
// import LineChart from "@/components/LineChart";
// import PieChart from "@/components/Pie"
// import PolarAreaChart from "@/components/PolarChart"
// import RadarChart from "@/components/Radar"
// import ScatterChart from "@/components/Scatter";
// import RadarNew from "@/components/RadarNew";
// import {Cards} from "@/components/";
// import {StatsCard} from "@/components";
// import ChartRenderer from "@/components/ChartRenderer";
// import LineChart from "@/components/Charts/LineChart";

// import SidebarMenu from "@/components/SidebarMenu";
export default {
  name: 'App',
  components: {

    // eslint-disable-next-line vue/no-unused-components
    VueRouter,
    // BarChart,
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    themeColors
    // RenderChart,
    // BubbleChart,
    // DoughnutChart,
    // LineChart,
    // PieChart,
    // PolarAreaChart,
    // RadarChart,
    // ScatterChart,
    // RadarNew
    // Cards,
    // StatsCard,
    // ChartRenderer
    // eslint-disable-next-line vue/no-unused-components
    // LineChart


    // SidebarMenu
  },
  data() {


    return {

    }
  },
  methods: {
    add: function () {
      let themeColors = themeColors.primary;
      console.log(themeColors)
      alert('hi')
    },
  },
  // async function refreshAccessToken() {
  //   const refreshToken = process.env.VUE_APP_FITBIT_REFRESH_TOKEN;
  //
  //   const config = {
  //     method: 'post',
  //     url: 'https://api.fitbit.com/oauth2/token',
  //     headers: {
  //       'Authorization': 'Basic ' + btoa('client_id:client_secret'),
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     data: {
  //       grant_type: 'refresh_token',
  //       refresh_token: refreshToken
  //     }
  //   };
  //
  //   try {
  //     const response = await axios(config);
  //     const newAccessToken = response.data.access_token;
  //     // Update the access token in your application
  //     process.env.VUE_APP_FITBIT_API_KEY = newAccessToken;
  //     console.log('Access token refreshed successfully');
  //   } catch (error) {
  //     console.error('Error refreshing access token:', error);
  //   }
  // }
  //
  // // Call this function whenever you need to refresh the access token
  // // For example, before making a request to Fitbit API
  //
  // // Check if access token is expired and refresh if needed
  // if (/* logic to check if access token is expired */) {
  //   refreshAccessToken();
  // }

    // remove: function (item) {
    //   this.libraryBasket.removeBasketItem(item);
    // },
    // display: function () {
    //
    //
    // },
  // }
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
