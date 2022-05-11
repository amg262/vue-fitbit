<template>
  <div>

    <div class="row home m-5">
      <div class="align-items-md-center">
        <img alt="Vue logo" src="../assets/logo.png" width="200" height="200">
        <img src="../assets/fitbit.png" alt="fitbit" width="200" height="200"/>


      </div>
      <!--    <PieChart-->
      <!--        identity="https://api.fitbit.com/1/user/943HNF/devices.json"-->
      <!--        method-name="deviceDough"-->
      <!--    >-->

      <!--    </PieChart>-->
    </div>
    <div class="row">

      <div class="col"></div>
      <div class="col-md-6" style="text-align: justify;">
        <h1 style="text-align: center;">Vue Fitbit</h1>
        <p>
          Web application built on Vue.js v2, Bootstrap, Bootstrap-vue, AJAX, Chart.js and the Fitbit SDK & API.
        </p>
        <p>
          The core functionality
          of this application is to retrieve health related data from a Fitbit users smartwatch, tracker, and/or scale
          and chart that data into intuitive and interactive charts and graphs in real time.
        </p>
      </div>
      <div class="col"></div>
    </div>

    <div class="row m-5">


      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/soccer.png" alt="Image" class="rounded-0" height="240" width="240"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Activity">
                  <b-card-text>
                    <p>
                      The Activity endpoints are used to query and/or modify a Fitbit user's daily activity data.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/body">
                        Activity
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>


      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/body.gif" alt="Image" class="rounded-0" height="240" width="240"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Body">
                  <b-card-text>
                    <p>
                      The Body endpoints are used for querying and modifying the user's body fat and weight data.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/body">
                        Body
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/device2.jpg" alt="Image" class="rounded-0" height="250" width="250"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Devices">
                  <b-card-text>
                    <p>
                      The Devices endpoints displays information about the devices paired to a user's account.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/devices">
                        Devices
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/heart.jpg" alt="Image" class="rounded-0" height="250"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Heart Rate">
                  <b-card-text>
                    <p>
                      The Heart Rate Time Series endpoints are used for querying the user's heart rate data.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/devices">
                        Heart Rate
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/sleep.jpg" alt="Image" class="rounded-0" height="260" width="260"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Sleep">
                  <b-card-text>
                    <p>
                      The Sleep endpoints are used for querying and modifying the sleep data.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/sleep">
                        Sleep
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="col-md-4 mt-3 mb-3">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/user.png" alt="Image" class="rounded-0" height="240" width="240"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="User">
                  <b-card-text>
                    <p>
                      The User endpoints display information about the user's profile information and their badges
                      collected.
                    </p>
                    <button class="card-btn btn btn-outline-primary">
                      <router-link class="fb-card fb-btn" to="/user">
                        User
                      </router-link>
                    </button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <HomeCard
          src='../assets/user.png'
          title="User"
          to="/user"

          pText="The User endpoints display information about the user's profile information and their badges

                      collected."></HomeCard>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src

// import PieChart from "@/components/Pie";
import HomeCard from "@/components/HomeCard";

export default {
  name: 'HomeView',
  components: {
    HomeCard
  }
}
</script>
