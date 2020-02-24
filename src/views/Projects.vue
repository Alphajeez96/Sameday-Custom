<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text mt-3">Articles</h1>
         
    <v-container class="my-5">
   
  <v-card  hover v-for="blog in  myProjects" :key="blog.id" class="d-inline-block mx-4">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-text >
      <div class = 'mb-4'>Post by {{ blog.person }}</div>
      <p  class="display-1 text--primary" ref="title">
       {{ blog.title }}
      </p>
      <!-- <span>Post by {{ blog.person }}</span> -->
      <div class="text--primary">
       {{ blog.content }}
      </div>
    </v-card-text>
    <!-- <v-card-actions> -->
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read More
      </v-btn>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <v-btn  :class="{'is-blue, v-btn--icon': isLoading, 'is-red': !isLoading }" @click="changeColor(blog.id)"  icon>
                <v-icon color="" >mdi-heart</v-icon>
                 <!-- <v-icon  color="" >mdi-heart</v-icon> -->
              </v-btn>
            </v-col>

            <v-col class="px-0">

              <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
         
        <v-btn icon v-on="on"> <v-icon >mdi-pencil</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <!-- <span class="headline">Add a new Blog</span> -->
        </v-card-title>
        <v-card-text>
          <v-container >

            <v-row >
              <v-col cols="12">
                <v-text-field ref="form"  v-model="title"  label="Title" prepend-icon="mdi-folder" required></v-text-field>
              </v-col>
           
              <v-col cols="12">
                <v-textarea ref="form" label="Article"  hover  v-model="content" prepend-icon="mdi-pencil" required></v-textarea>
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
           
            v-model="blog.date"
            @change="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      -->
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn color="primary" v-on:click='editblog(blog.id); showAlert();'  @click="dialog = false">Submit</v-btn>
          <v-btn color="blue darken-1"  text @click="dialog = false">Cancel</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
              <!-- <v-btn @click='editblog' icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn> -->
            </v-col>

            <v-col class="px-0">
              <v-btn  @click="removeblog(blog.id)" icon>
                <v-icon>mdi-delete</v-icon>
              
              </v-btn>
            </v-col>
         
          </v-row>
        </v-col>
        
      </v-row>
     
    </v-container>
  </v-card>

 

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
 
const axios = require('axios');
// import popup from '../components/popup'

export default {
  components:{
    // popup
  },
  name: 'home',
  data(){
    return {
      dialog: false,
      blogs: [],
       isLoading: true,
      title: '',
      content: '',
      disabled: true
    }
  
   
  },


  methods: {

     changeColor(){
                    this.isLoading = !this.isLoading;
                },
     
      editblog(id) {
      
       axios.put(`https://my-blog-4961b.firebaseio.com/users/${id}.json`, {

         title: this.title,
        content: this.contents,
       person: 'Prince',
        status:'Published',
        category: this.category,
       })

        .then(response => {
            alert(response)
          })
          .catch(function (error) {
         alert(error);
  });
  this.updateblogs()
       },

       showAlert() {
                // Use sweetalert2
                this.$swal({
                  position: 'top-end',
                  icon:'success',
                  title: ' Awesome! You Article has been Updated',
                  showConfirmButton: false,
                  timer: 2500
                });
            },  
  

      removeblog(id){
        // alert(id)
          axios.delete(`https://my-blog-4961b.firebaseio.com/users/${id}.json`)

          .then(response => {
            alert(response.data)
          })
          .catch(function (error) {
         alert(error);
  });
  this.updateblogs()
      },

       updateblogs(){
        axios.get( 'https://my-blog-4961b.firebaseio.com/users.json',  {
     
      })
     .then(response => {
    // console.log(response.data);
    const data = response.data
    // console.log(response.data)
    let users = [];
    for(let key in data){
      const user = data[key];
      user.id = key
      users.push(user)
    }
    this.blogs = users
    // console.log(this.blogs)
    // this.shortenedurl = 'https://rel.ink/' + response.data.hashid;
  })
  .catch(function (error) {
   alert(error);
  // Swal.fire('Oops...', 'Something went wrong!', 'error')
   
  });
      },
  },
     

  computed: {
    myProjects(){
      return this.blogs.filter(blog => {
       return  blog.person === 'Prince'
      })

    }
  },
  
   created() {
    this.updateblogs()
  },
  
}
</script>

<style scoped>
   .is-red.v-btn--icon{
           color:red;
        }
        .is-blue.v-btn--icon{
            color: grey;
        }
</style>