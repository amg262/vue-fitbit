<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h1 class="" id="sidebar-no-header-title">Vue-Fitbit</h1>
          <p>
            <img src="../assets/logo.png" alt="logo"  width="128" height="128"/>
            <img src="../assets/fitbit.png" alt="logo" width="128" height="128"/>
          </p>
          <p>
            An AJAX web application built on Vue.js, Bootstrap, C3.js, SASS to interface for a user’s fitbit device(s)
            that have a dashboard-like view of metrics like: heart rate, steps, calories, zone minutes, floors, sleep
            data, food, weight and also provide an input to that dataset via API.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item class="fa fa-dashboard" active @click="hide">Dashboard</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Bar Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Bubble Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Doughnut Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Line Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Pie Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Polar Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Radar Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Render Chart</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Scatter Chart</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>

            </b-nav>
          </nav>
          <p>
            <b-button class="btn bg-light btn-outline-primary" variant="" block @click="hide">Connect</b-button>
            &nbsp;

            <b-button class="btn bg-light btn-outline-secondary" variant="" block @click="hide">Refresh</b-button>

          </p>
          <b-button variant="primary" block @click="hide">Somethin</b-button>
          &nbsp;
          <b-button variant="secondary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>


export default {
  data() {
    return {
      variant: 'dark',
      variants: [
        'transparent',
        'white',
        'light',
        'dark',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ]
    }
  }
}
</script>
<style scoped>
.b-sidebar, #sidebar2 {
  width: 200px !important;
}
</style>