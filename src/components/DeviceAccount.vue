<template>
  <div class="row">
    <Doughnut
    >

    </Doughnut>
  </div>
</template>

<script>
import Doughnut from "@/components/Doughnut";
import '../models/ApiRequest'
import {makeGetRequest} from "@/models/ApiRequest";


export default {
  name: "DeviceAccount",
  props: {
    user1: {
      type: Array
    },
    identity: {
      type: String,
    }
  },
  components: {Doughnut},
  methods: {

    doThis1() {
      return 'hey fucked'
    }
  },
  data() {


    return {
      user2: {},
    }
  },
  async mounted() {

    // console.log(json)

    let v = await makeGetRequest("https://api.fitbit.com/1/user/-/profile.json");
    console.log(v.user);
    //this.user2.avatar150 = v.user.avatar150;
    this.user2 = v.user;
    //this.user2.age =

    //   v.forEach(sleep => {
    //
    //     this.user2.push(sleep.avatar640)
    //   })
    //
    // }
  }
}
</script>

<style scoped>

</style>