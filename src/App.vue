<template>


  <div id="app">


    <div class="row">

      <div id="main">
        <h1>Vue Fitbit</h1>

        <img src="./assets/logo.png" height="128" width="128"/><img src="./assets/fitbit.png" height="128" width="128"/>
        <br>
        <br>
        <DateRangeForm @change="add"></DateRangeForm>
        <SidebarMenu>
          asldkfasdf
        </SidebarMenu>
        <!--          <RadarNew></RadarNew>-->
        <!--          <ScatterChart></ScatterChart>-->
        <!--          <RadarChart></RadarChart>-->
        <!--          <PolarAreaChart></PolarAreaChart>-->
        <!--          <PieChart></PieChart>-->
        <!--          <LineChart></LineChart>-->
        <!--          <DoughnutChart></DoughnutChart>-->
        <!--          <BubbleChart></BubbleChart>-->

        <img alt="Vue logo" src="./assets/logo.png">
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--    <SidebarMenu></SidebarMenu>-->


        <UniversalLibrary>hi</UniversalLibrary>
        <AdminDashboard></AdminDashboard>
        <BarChart></BarChart>
        <!--          <RenderChart></RenderChart>-->
        <!--          <line-chart></line-chart>-->
      </div>
    </div>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import AdminDashboard from "@/components/AdminDashboard";
import BarChart from "@/components/BarChart";
import DateRangeForm from "@/components/DateRangeForm";
// import RenderChart from "@/components/RenderChart";
import SidebarMenu from "@/components/SidebarMenu";
import UniversalLibrary from "@/components/c/UniversalLibrary";
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
    DateRangeForm,
    // DoughnutChart,
    SidebarMenu,

    // HelloWorld,
    UniversalLibrary,
    AdminDashboard,
    BarChart,
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
      // library: new LibraryCollection(),
      // libraryBasket: new LibraryBasketCollection()
    }
  },
  methods: {
    add: function () {
      alert('hi')
    },
    // remove: function (item) {
    //   this.libraryBasket.removeBasketItem(item);
    // },
    // display: function () {
    //
    //
    // },
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
  margin-top: 60px;
}
</style>
