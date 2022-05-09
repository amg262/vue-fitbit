<template>

  <div>

    <b-form>
      <b-form>
        <b-form-datepicker id="dp"></b-form-datepicker>
        <b-form-datepicker id="dp2"></b-form-datepicker>
      </b-form>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "InputForm",

  data() {

    return {
      date1: {},
      date2: {},
    }
  }
}
</script>

<style scoped>

</style>