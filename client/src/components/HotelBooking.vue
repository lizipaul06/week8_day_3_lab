<template lang="html">
  <div class="hotel-booking">
    <p> {{booking.name}} </p>
    <p> {{booking.email_address}} </p>
    <p> {{booking.check_in_status}} </p>
    <button type="button" v-on:click="updateBooking"> Update</button>
    <button type="button" class="delete-btn" v-on:click="deleteBooking"> DELETE</button>
  </div>
</template>

<script>
import { eventBus} from '../main.js'
import HotelServce from '../services/HotelService.js'
export default {
  name:'hotel-booking',
  props: ['booking'],
  methods: {
    deleteBooking(){
      HotelServce.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
