<template>


  <div id="app">


    <SidebarMenu >
      asldkfasdf
    </SidebarMenu>
      <div class="row">

        <div id="main">
          <h1>Main Area</h1>

          <BubbleChart></BubbleChart>

<!--          <b-col>-->
<!--            <cards></cards>-->
<!--          <stats-card title="Total traffic"-->
<!--                      type="gradient-red"-->
<!--                      sub-title="350,897"-->
<!--                      icon="ni ni-active-40"-->
<!--                      class="mb-4">-->

<!--            <template slot="footer">-->
<!--              <span class="text-success mr-2">3.48%</span>-->
<!--              <span class="text-nowrap">Since last month</span>-->
<!--            </template>-->
<!--          </stats-card>-->
<!--          </b-col>-->
<!--          <b-col xl="3" md="6">-->
<!--            <stats-card title="Total traffic"-->
<!--                        type="gradient-orange"-->
<!--                        sub-title="2,356"-->
<!--                        icon="ni ni-chart-pie-35"-->
<!--                        class="mb-4">-->

<!--              <template slot="footer">-->
<!--                <span class="text-success mr-2">12.18%</span>-->
<!--                <span class="text-nowrap">Since last month</span>-->
<!--              </template>-->
<!--            </stats-card>-->
<!--          </b-col>-->
          <img alt="Vue logo" src="./assets/logo.png">
          <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
          <!--    <SidebarMenu></SidebarMenu>-->
          <UniversalLibrary>hi</UniversalLibrary>
          <AdminDashboard></AdminDashboard>
          <BarChart></BarChart>
          <RenderChart></RenderChart>
<!--          <line-chart></line-chart>-->
        </div>
      </div>



  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UniversalLibrary from "@/components/UniversalDashboard"
import AdminDashboard from "@/components/AdminDashboard";
import BarChart from "@/components/BarChart";
import RenderChart from "@/components/RenderChart";
import SidebarMenu from "@/components/SidebarMenu";
import BubbleChart from "@/components/BubbleChart";
// import {Cards} from "@/components/";
// import {StatsCard} from "@/components";
// import ChartRenderer from "@/components/ChartRenderer";
// import LineChart from "@/components/Charts/LineChart";

// import SidebarMenu from "@/components/SidebarMenu";
export default {
  name: 'App',
  components: {
    SidebarMenu,

    // HelloWorld,
    UniversalLibrary,
    AdminDashboard,
    BarChart,
    RenderChart,
    BubbleChart
    // Cards,
    // StatsCard,
    // ChartRenderer
    // eslint-disable-next-line vue/no-unused-components
    // LineChart


    // SidebarMenu
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
