<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <UniversalLibrary>hi</UniversalLibrary>
    <AdminDashboard></AdminDashboard>
    <BarChart></BarChart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UniversalLibrary from "@/components/UniversalDashboard"
import AdminDashboard from "@/components/AdminDashboard";
import BarChart from "@/components/BarChart";
export default {
  name: 'App',
  components: {

    // HelloWorld,
    UniversalLibrary,
    AdminDashboard,
    BarChart,
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
