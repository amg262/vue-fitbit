<!--<template>-->
<!--  <div class="row fb-page body">-->
<!--    <h1 class="fb-heading">This is an sleep page</h1>-->
<!--    <p>The Sleep endpoints are used for querying and modifying the sleep data.</p>-->
<!--    <p>-->
<!--      The endpoints in this section are:-->
<!--    </p>-->

<!--    <div class="col">-->
<!--      <h4><a target="_blank" class="fb-no-underline" href="https://dev.fitbit.com/build/reference/web-api/body/">Get Weight Log</a></h4>-->
<!--      <p>-->
<!--        Retrieves a list of all user's weight log entries for a given date.-->
<!--      </p>-->
<!--    </div>-->

<!--    <BarChart-->
<!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=25"-->
<!--        chart-label="Ten Day Sleep Log"-->
<!--        chart-background="#008CFFFF"-->
<!--        method-name="sleepBar"-->
<!--    >-->
<!--    </BarChart>-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <BarChart&ndash;&gt;-->
<!--    &lt;!&ndash;        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-label="100 Day Sleep Log"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-background="#008CCEF"&ndash;&gt;-->
<!--    &lt;!&ndash;    >&ndash;&gt;-->
<!--    &lt;!&ndash;    </BarChart>&ndash;&gt;-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    <LineChartGenerator-->
<!--        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=25"-->
<!--        chart-label="Ten Day Sleep Log"-->
<!--        chart-background="#ff7c00"-->
<!--        method-name="sleepLine"-->
<!--    >-->
<!--    </LineChartGenerator>-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <LineChartGenerator&ndash;&gt;-->
<!--    &lt;!&ndash;        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=100"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-label="100 Day Sleep Log"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-background="#008CFFFF"&ndash;&gt;-->
<!--    &lt;!&ndash;    >&ndash;&gt;-->
<!--    &lt;!&ndash;    </LineChartGenerator>&ndash;&gt;-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    <b-row>-->

<!--      <b-col>-->
<!--        <PolarChart-->
<!--            identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=5"-->
<!--            chart-label="Ten Day Sleep Log"-->
<!--            chart-background="#008CFFFF"-->
<!--            method-name="sleepPolar"-->
<!--        >-->
<!--        </PolarChart>-->
<!--      </b-col>-->
<!--      <br/>-->
<!--      <b-col>-->
<!--        <RadarChart-->
<!--            identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=25"-->
<!--            chart-label="Ten Day Sleep Log"-->
<!--            chart-background="#008CFFFF"-->
<!--            method-name="sleepRadar"-->
<!--        >-->
<!--        </RadarChart>-->
<!--      </b-col>-->
<!--    </b-row>-->

<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <Scatter&ndash;&gt;-->
<!--    &lt;!&ndash;        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=5"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-label="Ten Day Sleep Log"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-background="#008CFFFF"&ndash;&gt;-->
<!--    &lt;!&ndash;    >&ndash;&gt;-->
<!--    &lt;!&ndash;    </Scatter>&ndash;&gt;-->
<!--    &lt;!&ndash;    <br/>&ndash;&gt;-->


<!--    &lt;!&ndash;    <Doughnut&ndash;&gt;-->
<!--    &lt;!&ndash;        identity="https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2022-05-04&sort=desc&offset=0&limit=20"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-label="Ten Day Sleep Log"&ndash;&gt;-->
<!--    &lt;!&ndash;        chart-background="#008CFFFF"&ndash;&gt;-->
<!--    &lt;!&ndash;    >&ndash;&gt;-->
<!--    &lt;!&ndash;    </Doughnut>&ndash;&gt;-->

<!--    <div class="row">-->
<!--      <div class="col-md-4">alskdfjaskjdf</div>-->
<!--      <div class="col-md-4">alskdfjaskjdf</div>-->
<!--      <div class="col-md-4">alskdfjaskjdf</div>-->
<!--    </div>-->
<!--    <br/><br/>-->
<!--    <div class="row">-->
<!--      <div class="col-md-6">alskdfjaskjdf</div>-->
<!--      <div class="col-md-6">alskdfjaskjdf</div>-->
<!--    </div>-->

<!--</div>-->

<!--</template>-->


<!--<script>-->

<!--// import NavBar from "@/components/NavBar";-->
<!--import BarChart from "@/components/BarChart";-->
<!--import LineChartGenerator from "@/components/LineChart";-->
<!--// import LineChartGenerator from "@/components/LineChart";-->
<!--// import Doughnut from "@/components/Doughnut";-->
<!--import PolarChart from "@/components/PolarChart";-->
<!--// // import Radar from "@/components/Radar";-->
<!--import RadarChart from "@/components/Radar";-->
<!--// import Scatter from "@/components/Scatter";-->


<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    RadarChart,-->
<!--    BarChart,-->
<!--    LineChartGenerator,-->
<!--    PolarChart,-->
<!--    //-->
<!--    // Doughnut,-->
<!--    // Scatter,-->
<!--    // BarChart-->
<!--  },-->
<!--  data() {-->

<!--    return {}-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  padding: 0;-->
<!--  /*margin-top: 60px;*/-->
<!--}-->
<!--</style>-->
