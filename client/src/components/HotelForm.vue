<template lang="html">
<form class="" v-on:submit="addBooking" method="post">
  <label for="name">name:</label>
  <input type="text" name="name" v-model="name" required>
  <label for="email_address"> email_address: </label>
  <input type="text" name="email_address" v-model="email_address" required>
  <label for="check_in_status:">check_in_status:</label>
<input type="checkbox" id="check_in_status" @click="check()" name="check_in_status"  v-model="check_in_status">
<input type="submit" name="check_in" value="check_in">
</form>
</template>

<script>
import {eventBus} from '../main.js'
import HotelService from '../services/HotelService.js'
export default {
  name: "hotel-form",
  data(){
    return{
      name: "",
      email_address: "",
      check_in_status: null
    }
  },
  methods: {
    check: function(){
      console.log('click');
      this.check_in_status = true
    },
    addBooking(e){
      e.preventDefault()

      const booking = {
        name: this.name,
        email_address: this.email_address,
        check_in_status: this.check_in_status
      }
      HotelService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>

</style>
