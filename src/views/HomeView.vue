<template>
  <div>
    <fixed-bar/>
    <v-container class="v-main mt-5" fluid style="max-width: 90%">
      <v-row>
        <v-col cols="4" v-for="(user, i) in users" :key="user.id">
          <v-card class="mx-auto mt-5" width="300" height="400" color="blue-grey lighten-3">
            <v-row>
              <v-col cols="12"></v-col>
              <v-col cols="12"></v-col>
              <v-col cols="12"></v-col>
              <v-col cols="12"></v-col>
              <v-col cols="12"></v-col>
              <v-col cols="12"></v-col>
              <v-col class=" text-center">
                <dialog-detail
                    :character ="users[i]"/>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="#BDBDBD">
      <v-spacer/>
      <v-pagination
          :length="pages.total_pages"
          :total-visible="2"
          @input="changePage"
          v-model="currentPage"
          circle
          dark
          color="#616161"
      />
      <v-spacer/>
    </v-footer>
  </div>
</template>

<script>
import axios from "axios";
import fixedBar from "@/components/bars/fixedBar.vue";
import DialogDetail from "@/components/Home/dialogDetail.vue";

export default {
  name: 'HomeView',
  data: () => ({
    users: [],
    pages: {
      info: {
        pages: 1
      }
    },
    currentPage: 1,
  }),
  components: {
    DialogDetail,
    fixedBar
  },
  created() {
    axios.get('https://reqres.in/api/users')
        .then((response) => {
          this.users = response.data.data;
          this.pages =response.data
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods:{
    changePage(){
      axios.get(`https://reqres.in/api/users?page=${this.currentPage}`)
          .then((response)=>{
            this.users = response.data.data;
            this.pages = response.data
          })
    }
  }
}
</script>
