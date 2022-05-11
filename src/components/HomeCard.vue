<template>
  <div>
    <div class="col-md-4 mt-3 mb-3">
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <img :src="src" alt="Image" class="rounded-0" height="240" width="240"/>
            </b-col>
            <b-col md="6">
              <b-card-body :title="title">
                <b-card-text>
                  <p>
                    <span :value="pText"></span>
                  </p>
                  <button class="card-btn btn btn-outline-primary">
                    <router-link class="fb-card fb-btn" :to="to">
                      <span :value="title"/>
                    </router-link>
                  </button>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "HomeCard",
  props: {
    // text: {
    //   type: String
    // },
    // img: {
    //   type: String,
    // }
  },
  components: {},

  data() {


    return {

      pText: "",
      image: "",
      title: "",
      routerLink:"",
      to:"",
      src: "",
      user2: {},
      user3: {},
    }
  },
  methods: {

    async doThis1() {


    },

    update(bogus) {
      this.$emit('update-data', bogus)
    }
  },
  async mounted() {
  }
}
</script>

<style scoped>

</style>