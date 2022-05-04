<template>


  <div id="app" class="container-fluid">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <NavBar class="sticky-top"></NavBar>
    <div class="row">
      <BarChart></BarChart>


      <!--          <RenderChart></RenderChart>-->
      <!--          <line-chart></line-chart>-->
    </div>
  </div>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import NavBar from "@/components/NavBar";
import BarChart from "@/components/BarChart";
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
    BarChart,
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
      // library: new LibraryCollection(),
      // libraryBasket: new LibraryBasketCollection()
    }
  },
  methods: {
    add: function () {
      let themeColors = themeColors.primary;
      console.log(themeColors)
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
  padding: 0;
  /*margin-top: 60px;*/
}
</style>
