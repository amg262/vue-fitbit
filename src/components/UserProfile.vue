<template>
  <div>
    <div class="row">
      <h2>User Profile</h2>
      <div class="col-md-4 offset-2">
        <img class="fb-avatar" :src="user2.avatar640" :alt="user2.firstName" height="350" width="350"/>
      </div>

      <div  class="col-md-4 fb-left">
        <strong>Display Name: </strong><span>{{ user2.displayName }}</span><br>
        <strong>Age: </strong><span >{{ user2.age }}</span><br>
        <strong>Average Daily Steps: </strong><span >{{ user2.averageDailySteps }}</span><br>
        <strong>Height: </strong><span>{{ user2.height }}</span><br>
        <strong>Member Since: </strong><span >{{ user2.memberSince }}</span>
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

          <!--          <div class="col-md-3">-->
          <!--            <img :src="user2.topBadges[0].image300px" alt="alt"/>-->

          <!--            <p>{{ user2.topBadges[0].name }}</p>-->
          <!--            <strong>Name: </strong>{{ user2.topBadges[0].dateTime }}<br>-->

          <!--            <strong>Date: </strong>{{ user2.topBadges[0].dateTime }}<br>-->
          <!--            <strong>Times Achieved: </strong>{{ user2.topBadges[0].timeAchieved }}<br>-->
          <!--          </div>-->
          <!--          <div class="col-md-3">-->

          <!--          </div>-->
          <!--          <div class="col-md-3">-->

          <!--          </div>-->
          <!--          <div class="col-md-3">-->

          <!--          </div>-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import '../models/ApiRequest'
import {makeGetRequest} from "@/models/ApiRequest";

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
  components: {},
  methods: {

    doThis1() {
      return 'hey fucked'
    }
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