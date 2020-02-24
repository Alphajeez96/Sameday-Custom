<template>
  <v-app>
    <Navbar/>
   
    <v-content class="mx-4 mb-4">
     <router-view> </router-view>
    </v-content>
    <!-- <sfoot></sfoot> -->
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar'


export default {
  name: 'App',
  components:{ Navbar, },

  data: () => ({
    
  }),
};
</script>

<style >
body{
  font-size: 12px;
}
.text-start{
font-size: 10px !important;
}
.v-btn__content{
  font-size: 12px;
  text-transform: capitalize !important;
}

.v-btn--contained{
  /* width: 2vw !important; */
}
</style>