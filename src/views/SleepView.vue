<template>
  <div class="row fb-page body">
    <h1 class="fb-heading">Sleep</h1>
    <p>The Sleep endpoints are used for querying and modifying the sleep data.</p>

    <LineChartGenerator
        identity="sleep/list.json?beforeDate=2024-01-01&sort=desc&offset=0&limit=100"
        chart-label="100 Day Sleep Log"
        chart-background="#ff7c00"
        method-name="sleepLine"
        border-color="#4BC0C0FF"
        tension="0.5"
    />
    <BarChart
        identity="sleep/list.json?beforeDate=2023-05-10&sort=desc&offset=0&limit=50"
        chart-label="50 Day Sleep Log"
        chart-background="#198754"
        method-name="sleepBar"
    />
    <LineChartGenerator
        identity="sleep/list.json?beforeDate=2023-05-10&sort=desc&offset=0&limit=25"
        chart-label="25 Day Sleep Log"
        chart-background="#ff7c00"
        method-name="sleepLine"
        border-color="#4BC0C0FF"
        tension="0.5"
    />
    <b-row>
      <br/>
      <b-col>
        <RadarChart
            identity="sleep/list.json?beforeDate=2023-05-10&sort=desc&offset=0&limit=25"
            chart-label="25 Day Sleep Analysis"
            chart-background="#00E1FFFF"
            method-name="sleepRadar"
        >
        </RadarChart>
      </b-col>
      <RadarChart
          identity="sleep/list.json?beforeDate=2023-05-04&sort=desc&offset=0&limit=25"
          chart-label="Ten Day Sleep Log"
          chart-background="#008CFFFF"
          method-name="sleepRadar"
      >
      </RadarChart>
    </b-row>
  </div>
</template>

<script>

import BarChart from '@/components/BarChart';
import LineChartGenerator from '@/components/LineChart';
import RadarChart from '@/components/Radar';

export default {
  name: 'App',
  components: {
    RadarChart,
    BarChart,
    LineChartGenerator,
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
}
</style>
