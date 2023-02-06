<template>
  <v-app-bar
      color="#BDBDBD"
  >
    <v-container>
      <v-row>
        <v-col cols="4"></v-col>
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
            Welcome {{getUser.firstName}} {{getUser.lastName}}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "fixedBar",
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>

</style>