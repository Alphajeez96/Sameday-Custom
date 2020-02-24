<template>
    <v-footer
    dark
    padless
  >
    <v-layout row>
    <v-card
      class="flex"
      flat
      tile
    >
  

      <v-card-title class="teal">
        <strong class="subheading">Download App</strong>
           
        <!-- <v-spacer></v-spacer> -->

       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br>
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At<br>
             vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br>
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit <br>
               amet, consetetur</p>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>