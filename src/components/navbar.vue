<template>
   <nav>
        
       <v-app-bar app text >
            <!-- <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon> -->
           
           <v-toolbar-title class="text grey--text">
             <!-- <span class="font-weight-light">Alpha</span> -->
             <!-- <span>Blog</span> -->
             <v-img src="../../public/desktop logo optimized@2x.png" class="logo"></v-img>
           </v-toolbar-title>
           <v-spacer></v-spacer>

       
     <v-divider inset vertical></v-divider>
     <!-- <v-text-field
        hide-details
        prepend-icon="mdi-search"
        single-line
      ></v-text-field>  -->
      <!-- <v-img src="../../public/magnifying-glass@2x.png" class="searchicon"></v-img> -->
      <v-icon class="mx-3" style="cursor:pointer">mdi-magnify</v-icon>
       <v-divider inset class="mx-3" vertical></v-divider>
        <v-icon class="mx-3" style="cursor:pointer">mdi-email-outline <span>1</span></v-icon>
        <span>Message</span>
         <v-divider class="mx-3" inset vertical></v-divider>
         <v-icon class="mx-3" style="cursor:pointer">mdi-cart-outline</v-icon>
         <span>Market Place</span> <v-icon class="guim"> mdi-guitar-pick</v-icon>
          <v-divider class="mx-3" light inset vertical></v-divider>
           <v-icon class="mx-3"  style="cursor:pointer">mdi-format-list-bulleted</v-icon>
           <span>Notifications</span>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-avatar class="mx-3 mb-3" size="35">
              <img src="/avatar-1.png"> 
              
            </v-avatar>
            <div class="mediv">
            <span>Me<v-icon class="gui"> mdi-guitar-pick</v-icon></span>
            </div>
            
            <!-- </div> -->
         




          
       </v-app-bar>
       <v-navigation-drawer  :mini-variant.sync="mini"
      permanent app dark height="90vh" color="#007BFF" v-model="drawer">
           <!-- <p>test</p> -->
           <v-app-bar-nav-icon v-if="mini"  class="white--text ml-5 mt-5" @click="drawer= !drawer" ></v-app-bar-nav-icon>
            <v-app-bar-nav-icon v-else class="white--text ml-5 mt-5"  @click.stop="mini = !mini"><v-icon >mdi-close</v-icon></v-app-bar-nav-icon>
           
           <v-col>
            
           <v-list dark>
              <!-- <v-app-bar-nav-icon  class="white--text ml-5 mt-5" @click="drawer= !drawer"></v-app-bar-nav-icon>   -->
      <v-list-item-group v-model="item" color="white" >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" router :to="item.route">
        <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list-item-group>
</v-list>
           </v-col>
       </v-navigation-drawer>
         
   </nav>
</template>

<script>
// import popup from './popup'
export default {
  components: {
  
  },
    data() {
        return{
            drawer:false,
            item: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-microsoft', route:'/projects' },
        { text: 'Operations', icon: 'mdi-clock', route:'/' },
        { text: 'Records', icon: 'mdi-file-outline', route:'/team' },
        { text: 'Supply Store', icon: 'mdi-cart-outline', route:'/' },
        { text: 'Market Place', icon: 'mdi-folder', route:'/projects' },
        { text: 'Forums', icon: 'mdi-account', route:'/team' },
      ],
      mini: true,
        }
    }
}
</script>
<style scoped>
.mediv{
  margin-top: 40px;
  /* margin-right: 30px; */
  position:relative;
  right:45px
  /* padding-left: 10px; */

  
}
.guim{
font-size: 1em;
margin-left:10px;
cursor:pointer
}
.gui{
font-size: 1em;
margin-left:6px;
cursor:pointer;
color:#007BFF

}
  body{
    font-size: 12px;
  }
  .logo{
    height: 5vh;
    width: 9vw;
  }
  /* .searchicon{
 height: 4vh;
    width: 8vw;
  } */
</style>
 