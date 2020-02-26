<template>
  <div id="app">
  <hotel-form/>
  <hotel-list/>
  </div>
</template>

<script>
import HotelForm from './components/HotelForm.vue'
import HotelList from './components/HotelList.vue'


export default {
  name: 'App',
  components: {
    'hotel-form':HotelForm,
    'hotel-list': HotelList
  }
}
</script>

<style>

</style>
