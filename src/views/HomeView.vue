<template>
  <div>
    <fixed-bar/>
    <v-container class="v-main mt-5" fluid style="max-width: 90%">
      <v-row>
        <v-col cols="4" v-for="(user, i) in getUserData" :key="user.id">
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
                    :character ="getUserData[i]"
                />
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
import {mapActions, mapGetters} from "vuex";

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
  computed: {
    ...mapGetters({
      getAccessToken: 'login/getAccessToken',
      getUserData:'users/getUserData'
    })
  },
  methods:{
    ...mapActions({
      setUserData:'users/setUserData',
    }),
    changePage(){
      axios.get(`https://reqres.in/api/users?page=${this.currentPage}`)
          .then((response)=>{
            this.setUserData({ users: response.data.data });
            this.pages = response.data
          })
    },
    beforeRouteEnter() {
      if (this.getAccessToken === null) {
        this.$router.push({path: '/login'})
      }
    },
  },
  created() {
    axios.get('https://reqres.in/api/users')
        .then((response) => {
          this.beforeRouteEnter();
          this.setUserData({ users: response.data.data });
          this.pages =response.data
        })
        .catch((err) => {
          console.log(err)
        })
  },
}
</script>
