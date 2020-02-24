<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add a new article</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <!-- <span class="headline">Add a new Blog</span> -->
        </v-card-title>
        <v-card-text>
          <v-container >

            <v-row >
              <v-col cols="12">
                <v-text-field ref="form" label="Title" v-model="title" :rules="inputruless" prepend-icon="mdi-folder" required></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col> -->
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field> -->
              <!-- </v-col> -->
              <v-col cols="12">
                <v-textarea ref="form" label="Article" :rules="inputrules" v-model="content" prepend-icon="mdi-pencil" required></v-textarea>
              </v-col> 
<!-- <v-col cols="12" lg="6">
        <v-menu
          v-model="menu1"
         
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field ref="form"
             :rules="daterules"
              :value="computedDateFormattedMomentjs"
              clearable
              label="Due date"
              readonly
              v-on="on"
              
            ></v-text-field>
          </template>
          <v-date-picker
           
            v-model="date"
            @change="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col> -->
      <v-col cols="12">
        <v-combobox
          v-model="category"
          :items="items"
          label="Choose a Category"
          prepend-icon="mdi-cast"
          required
        ></v-combobox>
      </v-col>

      
              
             
              <!-- <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col> -->
            
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn color="primary"  v-on:click="submit(); showAlert();" @click="dialog = false">Submit</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const axios = require('axios');

 import moment from 'moment'
//  import db from '@/fb'
// import module from '@/module'
  export default {
    data: () => ({
      dialog: false,
      title: '',
      content: '',
      due: null,
      date: new Date().toISOString().substr(0, 10),
       menu1: false,
     
      inputrules:[
        v => v.length >= 5 || 'minimum length is 5 characters',
        
        
      ],
      daterules: [
         value => value.date >= this.date  || 'Choose a Current Timeframe',
      ],
      
         inputruless:[
        v => v.length >= 5 || 'minimum length is 5 characters',
        //  v => v.length >= 15 || 'Mazimum length is 15 characters',
        
    

      ],
       category: [],
        items: [
          'Sports',
          'Programming',
          'Entertainment',
          'Public Safety',
          'Relationships',
          'Lifestyle',
          'Health',
          'Politics'
        ],
      
    }),

   methods: {
     submit(){

      //  if(this.refs.form.validate()){ 
        
        return axios.post( 'https://my-blog-4961b.firebaseio.com/users.json',  {
        title: this.title,
        content: this.content,
        due: moment(this.due, 'dddd, MMMM Do YYYY'),
        person:'Prince',
        status:'Published',
        category: this.category
        
      })
     
  //  .then(response => {
  //   // console.log(response.data);
  //   alert(response.data)
  //   // this.shortenedurl = 'https://rel.ink/' + response.data.hashid;
  // })
  .catch(function (error) {
   alert(error);
  });
  // }
  // else{
  //   return this.submit = false; 
  // }
  
     },

     showAlert() {
                // Use sweetalert2
                this.$swal({
                  position: 'top-end',
                  icon:'success',
                  title: ' Awesome! You added a new article',
                  showConfirmButton: false,
                  timer: 2500
                });
            },  
   },

   computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },  
    },
    
  }
</script>