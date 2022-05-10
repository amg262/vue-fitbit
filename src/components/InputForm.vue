<template>

  <div>

    <div class="row">
      <div class="col"></div>
      <div class="col-md-3">
        <b-form>
          <b-form>
            <b-form-datepicker :id="date1.toString()" :key="date1"></b-form-datepicker>
            <b-form-datepicker :id="date2.toString()" :key="date2"></b-form-datepicker>
            <br>
            <b-button @click="update(date1, date2)">Update</b-button>
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
    update: function(date1, date2) {
      console.log(date1, date2)
      this.$emit('date-picked', date1, date2)
    }
  }
}
</script>

<style scoped>

</style>