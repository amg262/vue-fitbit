<template>
  <div>

  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
// import "chartjs-plugin-colorschemes";

export default {
  name: "ChartBase",
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    options: {
      legend: {
        position: "bottom",
        align: "start",
      },
      plugins: {
        colorschemes: {
         // scheme: RdPu4,
        },
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style scoped>

</style>