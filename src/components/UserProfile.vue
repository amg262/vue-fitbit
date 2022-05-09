<template>
  <div>
    <div class="row">

      <p>&nbsp;</p>
      <div class="col-md-4">
        <h4 style="text-align: center" class="mb-4">Avatar</h4>

        <img class="fb-avatar" :src="user2.avatar640" :alt="user2.firstName" height="350" width="350"/>
      </div>

      <div class="col-md-4 fb-left">
        <h4 style="text-align: center" class="mb-4">Bio</h4>

        <strong>Display Name: </strong><span>{{ user2.displayName }}</span><br>
        <strong>Age: </strong><span>{{ user2.age }}</span><br>
        <strong>Average Daily Steps: </strong><span>{{ user2.averageDailySteps }}</span><br>
        <strong>Height: </strong><span>{{ user2.height }}</span><br>
        <strong>Member Since: </strong><span>{{ user2.memberSince }}</span><br>
        <strong>Synced: </strong><span>{{ user3.lastSyncTime }}</span>
      </div>


      <div class="col-md-4">
        <h4 @click="update" style="text-align: center" class="mb-4">Battery Level</h4>
        <Doughnut
            identity="https://api.fitbit.com/1/user/-/devices.json"
            method-name="deviceDough"
        >

        </Doughnut>
      </div>
      <div class="row">
        <h2>Top Badges</h2>
        <div class="col-md-4" v-for="badge in user2.topBadges" :key="badge.name">
          <br/>
          <img :src="badge.image300px" alt="alt"/>
          <br/><br/>
          <p>{{ badge.name }}</p>
          <p><i>{{ badge.earnedMessage }}</i></p>

          <strong>Date: </strong>{{ badge.dateTime }}<br>
          <strong>Times Achieved: </strong>{{ badge.timesAchieved }}<br>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import '../models/ApiRequest'
import {makeGetRequest} from "@/models/ApiRequest";
import Doughnut from "@/components/Doughnut";

export default {
  name: 'UserProfile',
  props: {
    user1: {
      type: Array
    },
    identity: {
      type: String,
    }
  },
  components: {
    Doughnut
  },

  data() {


    return {
      user2: {
        age: '',
        avatar150: '',
        displayName: '',
        height: '',
        memberSince: '',
        topBadges: [],


      },
      user3: {},
      //   loaded: false,
      //   chartData: {
      //     labels: [],
      //     datasets: [
      //       {
      //         label: this.chartLabel,
      //         backgroundColor: this.chartBackground,
      //         data: []
      //       }
      //     ]
      //   },
      //   chartOptions: {
      //     responsive: true,
      //     maintainAspectRatio: false
      //   }
      // }
    }
  },
  methods: {

    async doThis1() {
      let v = await makeGetRequest("https://api.fitbit.com/1/user/-/profile.json");
      let b = await makeGetRequest("https://api.fitbit.com/1/user/-/devices.json");
      // console.log(v.user);
      console.log(b);
      //this.user2.avatar150 = v.user.avatar150;
      this.user2 = v.user;
      this.user3 = b[1];

      var s = this.user3.lastSyncTime;
      // var date = new Date(this.user3.lastSyncTime);
      var sub = s.slice(0, -32);
      console.log(sub);

    },

    update() {
      this.$emit('update-data')
    }
  },
  async mounted() {

    // console.log(json)

    this.doThis1();

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