<template>
  <div class="dashboard">
      
   
     <v-container class="my-5">
       <v-layout row class="mb-3 mt-3 ml-4">

           <v-btn class="" to="/" text icon color="#007BFF">
        
              <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>
            <span style="color: grey !important">Back</span>
            </v-btn>
               <!-- <v-divider height='2vh' vertical></v-divider> -->
           
             <v-img src="../../public/product (1).png" class="logo ml-5"></v-img>
         
          <h2 class="ml-3 mt-3">Production House</h2>

           <v-spacer></v-spacer>

        
       </v-layout>

       <v-layout column class="ml-4">
           <h5 style="font-type: Bold; font-size: 14px"> Order:#ADJ2322434D</h5>
       </v-layout>

        <v-layout row class="ml-4">
           <h6 style="color:#007BFF;">Account Setup >Delivery Method</h6>
      

       <v-spacer></v-spacer>
        <v-spacer class="ml-5"></v-spacer>
         <v-spacer></v-spacer>

       <v-layout class="ml-5" row>
          <p style="color:#007BFF">Production Status <span style="color:green; font-size: 14px">Running 2 Of 4</span></p>
       </v-layout>
        </v-layout>

        <v-layout row>
            <v-card
    class="mx-auto"
    max-width="344"
    Raised
  >
    <!-- <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item> -->

  
  </v-card>
        </v-layout>

        <v-layout row class="all ml-4">
         
          <div class="mt-4 row">
          <h4 class="mt-5 ml-5" style="cursor: pointer">Product Details</h4>
           <!-- <span class="mx-3 mt-5" style="cursor:pointer">192</span> -->
           
       <v-divider inset class="mx-3" vertical></v-divider>
       <!-- <v-divider inset class="mx-3"></v-divider> -->
         
          <h4 class="mt-5" style="cursor: pointer">History/Notes</h4>
           <!-- <span class="mx-3 mt-5" style="cursor:pointer">19</span> -->
         <v-divider class="mx-3" inset vertical></v-divider>
          
            </div>

            <v-spacer></v-spacer>
             

              <v-layout row class="mb-3 mt-3 ml-4">
                   <v-btn
      text
     height="6vh"
     color="green"
      class="ma-2 dark--text">
    Worksheet
      <v-icon class="guim" right dark>mdi-guitar-pick</v-icon>
    </v-btn>

     <v-btn
      Text
     height="6vh"
     color="grey"
     class="ma-2 dark--text">
      Print
     
    </v-btn>
         
             <!-- <v-img src="../../public/product (1).png" class="logo"></v-img> -->  
      <v-btn
      outlined
     height="6vh"
     
      class="ma-2 dark--text">
       <v-icon class="guim mr-2" right dark>mdi-file-outline</v-icon>
      Add Notes
      
    </v-btn>

      <v-btn
     height="6vh"
      color="#007BFF"
      class="ma-2 white--text">
      Complete Production
      <v-icon class="guim" right dark>mdi-guitar-pick</v-icon>
    </v-btn>
         
       </v-layout>
   
       </v-layout>
        <v-layout row class="all ml-4">
         
          <!-- <div class="row"> -->
          <h4 class="mt-5 ml-5" style="cursor: pointer">Product </h4>
          
        
            <!-- </div> -->

            <v-spacer></v-spacer>
              <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                      <v-spacer></v-spacer>
             

              <v-layout row class="mb-3 mt-3 ml-4">
                   <v-btn
      outlined
     height="6vh"
     color="green"
      class=" ml-5 d dark--text">
   Download Artwork
      <v-icon class="guim" right dark>mdi-guitar-pick</v-icon>
    </v-btn>
              </v-layout>
        </v-layout>



        <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row >
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
             
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
       
     <v-data-table
     
      item-key="name"
    :headers="headers"
    :items="desserts"
    show-select
    hide-default-footer
    :single-select="singleSelect"
    class="elevation-1"
  >
 
    <template v-slot:item.calories="{ item }">

      <v-btn to="" :color="getColor(item.calories)" dark>{{ item.calories }}</v-btn>
    </template>

    <template v-slot:item.carbs="{ item }">

      <v-img style="cursor: pointer" class="carbimg" src="../../public/pocket-img.png" to="" :color="getColor(item.carbs)" dark>{{ item.carbs }}</v-img>
    </template>

     <template v-slot:item.iron="{ item }">

      <v-icon style="cursor: pointer" color="grey"   to=""  dark>{{ item.iron }}  </v-icon>
    </template>

    
     <template v-slot:item.status="{ item }">

      <p style="cursor: pointer; color: #009B2A;" to=""  dark>{{ item.status }}  </p>
    </template>
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


export default {
  
  name: 'home',
  data(){
    return {
  singleSelect: false,
        selected: [],
        
        headers: [
          {
            text: 'Order #',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Item #', value: 'item' },
          { text: 'Details', value: 'carbs' },
          { text: '', value: 'desc' },
          { text: 'Colors', value: 'calories' },
          { text: 'Qty', value: 'qnty' },
          { text: 'Print Type', value: 'printtype' },
          { text: 'Delivery Method', value: 'iron' },
          { text: 'Delivery Time', value: 'time' },
          { text: 'Production Status', value: 'status' },
        ],
        desserts: [
          {
            name: '#232JODJSDKN2',
            calories: 'Royal',
            item: '#232JODJSDKN2',
            carbs:'',
            qnty:'L X  4',
            iron: 'mdi-clock' ,
            desc: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
            printtype: 'DTG Print',
            time: '23 - June - 2019 Time Left: 10:00:00',
            status: 'Running 2 of 5'
          },
          {
            name: '#232JODJSDKN2',
            calories: 'Royal',
            item: '#232JODJSDKN2',
            carbs: '',
            qnty: 'L X 4',
            iron: 'Pickup Order' ,
            desc: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
            printtype: 'DTG Print',
            deliver: '.../../',
            time: '23 - June - 2019 Time Left: 10:00:00',
            status: 'Running 2 of 5'
          
          },
          
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return '#007BFF'
      },
  },

  
}

</script>
<style scoped>
.d{
    margin-left: 200px;
}
.carbimg{
  width:2vw;
  height: 5vh;
}
.tab{
  /* max-width: 1000vw; */
  /* padding-bottom: 90px; */
}
.all{
  /* margin-top: 100px; */
}
.se{
  cursor:pointer;
 width:2vw;
 margin-right: 40px;
}
.logo{
  max-width: 3vw;
  max-height:5vh;
  margin-bottom: 20px;
}
.guim{
font-size: 1em;
margin-left:10px;
cursor:pointer
}
</style>