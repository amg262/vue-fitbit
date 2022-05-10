<template>

  <div>

    <div class="row">
      <div class="col"></div>
      <div class="col-md-3">
        <b-form>
          <b-form>
            <b-form-datepicker id="dp"></b-form-datepicker>
            <b-form-datepicker id="dp2"></b-form-datepicker>
            <br>
            <b-button>Update</b-button>
          </b-form>
        </b-form>
      </div>
      <div class="col"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "InputForm",

  props: {

  },

  data() {

    return {
      date1: {},
      date2: {},
    }
  },
  methods: {
    update() {

    }
  }
}
</script>

<style scoped>

</style>