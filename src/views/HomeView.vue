<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PieChart>

    </PieChart>
  </div>
</template>

<script>
// @ is an alias to /src

import PieChart from "@/components/Pie";

export default {
  name: 'HomeView',
  components: {
    PieChart
  }
}
</script>
