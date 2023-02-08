<template>
  <v-app-bar
      color="#BDBDBD"
  >
    <v-container>
      <v-row>
        <v-col cols="4">
          <new-user-dialog-btn/>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-sheet class="text-center" height="50" color="#616161 ">
            <span class="white--text" style="font-size: 35px; font-family: 'Apple LiSung'">Hello ReqRes users!</span>
          </v-sheet>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn @click="login" v-if="!getAccessToken">
            Login
          </v-btn>
          <div v-if="getAccessToken">
            Welcome User!
            <v-btn @click="logout">
              Logout
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import NewUserDialogBtn from "@/components/Home/newUserDialogBtn.vue";
export default {
  name: "fixedBar",
  components: {
    NewUserDialogBtn
  },
  data: () => ({
    users: [],
    accessToken: '',
    user: ''
  }),
  computed: {
    ...mapGetters({
      getAccessToken: 'login/getAccessToken',
    })
  },
  methods: {
    ...mapActions({
      setAccessToken: 'login/setAccessToken',
    }),
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.setAccessToken({accessToken: ''})
      this.$router.push({path: '/login'})
    },
  },
}
</script>

<style scoped>

</style>