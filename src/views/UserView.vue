<template>
  <div class="row fb-page body">
    <div class="fb-user-bio offset-2 col-md-8">
    <h1 class="fb-heading">User</h1>
    <p>
      The User endpoints display information about the user's profile information, the regional locale & language settings, and their badges collected.
    </p>
    </div>
    <div class="row">

    </div>
    <div class="row">

        <UserProfile @update-data="popup"></UserProfile>
    </div>
  </div>

</template>


<script>

import UserProfile from "@/components/UserProfile";

export default {
  name: 'UserView',
  components: {
    UserProfile,

  },
  methods: {
    popup() {
      alert('hey');
    }
  },
  data() {
    return {}
  },



  async mounted() {

  }
}

</script>

<style scoped>

</style>