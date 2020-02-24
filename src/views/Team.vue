<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
              <v-card flat class="text-xs-center ma-3">

                  <v-responsive class="pt-4 pl-4">
                      <v-avatar size="100" class="grey lighten-2">
                          <img :src="person.avatar">
                      </v-avatar>
                  </v-responsive>

                  <v-card-text>
                      <div class="subheading">{{ person.name }}</div>
                      <div class="grey--text">{{ person.role }}</div>
                  </v-card-text>

                  <v-card-action>
                      <v-btn flat color="grey">
                          <v-icon small left>mdi-message</v-icon>
                          <span>MESSAGE</span>
                      </v-btn>
                  </v-card-action>
              </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>

  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
      return {
         team: [
             { name: 'Managi Iwuoha', role: 'Content Developer', avatar:'/avatar-1.png'},
             { name: 'Fiyin Adewunmi', role: 'Human Resource Manager', avatar:'/avatar-2.png'},
             { name: 'Patrick Inyang', role: 'Hub Manager', avatar:'/avatar-3.png'},
             { name: "God's Time",     role: 'Back-end Developer', avatar:'/avatar-4.png'},
             { name: 'John Doe',       role: 'Undefined', avatar:'./avatar-5.png'}
         ] , 
      }
  }
  
}
</script>
