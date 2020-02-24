<template>
  <div class="dashboard">
   
    
    
  
     <v-container class="my-5">
       <v-layout row class="mb-3 mt-3 ml-4">
         
             <v-img src="../../public/product (1).png" class="logo"></v-img>
         
          <h2 class="ml-4 mt-3">Production House</h2>

           <v-spacer></v-spacer>

        <v-layout row class="mb-3 mt-3 ml-4">
         
             <!-- <v-img src="../../public/product (1).png" class="logo"></v-img> -->  
      <v-btn
     height="6vh"
      color="#007BFF"
      class="ma-2 white--text">
      Categories
      <v-icon class="guim" right dark>mdi-guitar-pick</v-icon>
    </v-btn>
         <v-text-field
          class="se mt-2"
           filled
            solo
            prepend-inner-icon="mdi-magnify"
            dense
            clearable
            counter="15"
            height="6vh"
         
           
          ></v-text-field>
          <!-- <h2 class="ml-4 mt-3">Production House</h2> -->
       </v-layout>
       </v-layout>










        <v-layout row class="all ml-4">
         
          <div class="mt-4 row">
          <h4 class="mt-5 ml-5">All productions</h4>
           <span class="mx-3 mt-5" style="cursor:pointer">192</span>
           
       <v-divider inset class="mx-3" vertical></v-divider>
       <!-- <v-divider inset class="mx-3"></v-divider> -->
         
          <h4 class="mt-5">Awaiting production</h4>
           <span class="mx-3 mt-5" style="cursor:pointer">19</span>
         <v-divider class="mx-3" inset vertical></v-divider>
          
          <h4 class="mt-5">Completed</h4>
           <span class="mx-3 mt-5" style="cursor:pointer">192</span>
            </div>

            <v-spacer></v-spacer>

              <v-layout row class="mb-3 mt-3 ml-4">
         
             <!-- <v-img src="../../public/product (1).png" class="logo"></v-img> -->  
      <v-btn
      outlined
     height="6vh"
     
      class="ma-2 dark--text">
      Print Worksheet
      
    </v-btn>

     <v-btn
      text
     height="6vh"
      class="ma-2 dark--text">
    Mark as Complete
      <v-icon class="guim" right dark>mdi-guitar-pick</v-icon>
    </v-btn>

    <v-btn
      Text
     height="6vh"
     color="grey"
     class="ma-2 dark--text">
      Save
     
    </v-btn>
         
       </v-layout>

      
           
       </v-layout>


         <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    hide-default-footer
   
    class="elevation tab"
  >
    <!-- <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template> -->
  </v-data-table>


       












       
      

     
         <v-card flat class="pa-3" v-for="blog in blogs" :key="blog.id" >
           <v-layout row wrap :class="`pa-3 project ${blog.status}`">
             <v-flex xs6 sm4 md6>
               
               <div class="caption grey--text pl-2 s "> Title</div>
               <div class="pl-2"> {{ blog.title }} </div>
               
             </v-flex>
             <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Author</div>
                <div>{{ blog.person }}</div>
             </v-flex>
             <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Category</div>
                <div> {{ blog.category}}</div>
             </v-flex>
             

              <v-flex xs6 sm4 md2>
                <div class="right"> 
                 
                 <v-btn text flat color="primary">Read more</v-btn>
               </div>
            
             </v-flex>

           </v-layout>
           <v-divider></v-divider>
         </v-card>
     
    </v-container>
    <!-- <sfoot></sfoot> -->
  </div>
 
</template>

<script>
// @ is an alias to /src
// import sfoot from '../components/footer'
const axios = require('axios');

export default {
  
  name: 'home',
  data(){
    return {
  singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Orders #',
            align: 'left',
            sortable: false,
            value: 'name',
           
          },
          { text: 'Item #', value: 'calories' },
          { text: 'Details', value: 'fat' },
          { text: 'desc', value: 'carbs' },
          { text: 'Colors', value: 'protein' },
          { text: 'Qty', value: 'iron' },
          { text: 'Print Type', value: 'type' },
          { text: 'Delivery Method', value: 'method' },
          { text: 'Delivery Time', value: 'time' },
          { text: 'Production Status', value: 'status' },
        ],
        desserts: [
          {
            name: '#232JDDJSDKN2',
            calories: '#232JDDJSDKN2',
            fat: '../../public/product (1).png',
            carbs: 'No Minimum - more Color Available - Gidan unisex ultra cotton T-shirt {NY1}',
            protein: 'Royal',
            iron: 'L X 4',
            type: 'DTG Print',
            method: 'Rush Shipping',
            time: '23-June-2019 Time left 10:00:00',
            status:'Running 2 of 5'
            

          },
          {
            name: '#232JDDJSDKN2',
            calories: '#232JDDJSDKN2',
            fat: '../../public/product (1).png',
            carbs:  'No Minimum - more Color Available - Gidan unisex ultra cotton T-shirt {NY1}',
            protein:'Royal',
            iron: 'L X 4',
            type: 'DTG Print',
            method: 'Pickup Order',
            time: '23-June-2019 Time left 10:00:00',
            status:'Running 2 of 5'

          },
          
        ],
      }
   
  },


 
  methods:{
    sortBy(prop){
      this.blogs.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
        updateblogs(){
        axios.get( 'https://my-blog-4961b.firebaseio.com/users.json',  {
     
      })

      },
  },
  
}

</script>
<style scoped>
.tab{
  /* max-width: 1000vw; */
  /* padding-bottom: 90px; */
}
.all{
  margin-top: 100px;
}
.se{
  cursor:pointer;
 width:2vw;
 margin-right: 40px;
}
.logo{
  max-width: 4vw;
  max-height:8vh;
  margin-bottom: 20px;
}
.guim{
font-size: 1em;
margin-left:10px;
cursor:pointer
}
</style>