<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BarChart
        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-04-27&sort=desc&offset=0&limit=100"></BarChart>
  </div>

</template>


<script>

// import NavBar from "@/components/NavBar";
import BarChart from "@/components/BarChart";

export default {
  name: 'App',
  components: {
    BarChart
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
