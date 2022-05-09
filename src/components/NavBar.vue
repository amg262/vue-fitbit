<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="fb fb-navbar">
      <b-navbar-brand href="#" class=""></b-navbar-brand>
      <img src="../assets/logo.png" width="50" height="50" alt="logo"/>
      <img src="../assets/fitbit.png" width="50" height="50" alt="logo"/>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/activity">Activity</router-link>
          </b-nav-item>
<!--          <b-nav-item>-->
<!--            <router-link to="/about">About</router-link>-->
<!--          </b-nav-item>-->

          <b-nav-item>
            <router-link to="/body">Body</router-link>
          </b-nav-item>
<!--          <b-nav-item>-->
<!--            <router-link to="/devices">Devices</router-link>-->
<!--          </b-nav-item>-->
          <b-nav-item>
            <router-link to="/heart-rate">Heart Rate</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/sleep">Sleep</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/user">User</router-link>
          </b-nav-item>


        </b-navbar-nav>
        <!-- Right aligned nav items -->
<!--        <b-navbar-nav class="ml-auto">-->

<!--          <b-nav-item-dropdown text="Lang" right>-->
<!--            <router-view/>-->
<!--            <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

<!--          <b-nav-item-dropdown right>-->
<!--            &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--            <template #button-content>-->
<!--              <em>User</em>-->
<!--            </template>-->
<!--            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
<!--        </b-navbar-nav>-->
      </b-collapse>
      <button class="btn btn-outline-info m-2" style="">Update Data</button>

    </b-navbar>

  </div>
</template>

<script>

export default {
  name: "Nav-Bar",
  components: {}
}
</script>

<style scoped lang="scss">
//$myBlue: #c800ff;
//#nava {
//  color: $myBlue;
//  background-color: $myBlue;
//}
</style>