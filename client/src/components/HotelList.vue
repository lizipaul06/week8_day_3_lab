<template lang="html">
  <div class="booking-wrapper">
    <hotel-booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
  </div>
</template>



<script>
import { eventBus } from '@/main.js'
import HotelService from '../services/HotelService.js'
import HotelBooking from './HotelBooking'
export default {
  data(){
    return{
      bookings: []
    }
  },
  mounted(){
    HotelService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
    let index = this.bookings.findIndex(booking => booking._id ===id)
    this.bookings.splice(index, 1)
    })
  },
  components:{
    'hotel-booking':HotelBooking,
    'hotel-service':HotelService
  }
}

</script>

<style lang="css" scoped>
</style>
