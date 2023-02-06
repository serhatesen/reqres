<template>
  <div>
    <login-bar/>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mt-12 mx-auto rounded-xl pa-8"
                  color="blue-grey lighten-3"
                  elevation="7"
                  style="max-width: 100%">
            <v-text-field
                dense
                autofocus
                color="#ffe59a"
                label="UserName"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="username"
            />
            <v-text-field
                dense
                color="#ffe59a"
                label="Password"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="password"
            />
            <v-card-actions>
              <v-container class="text-right">
                <v-btn
                    class="black--text"
                    color="#ffe59a"
                    elevation="3"
                    @click="login"
                >
                  Login
                </v-btn>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import loginBar from "@/components/bars/loginBar.vue";
export default {
  name: "LoginView",
  components:{
    loginBar
  }
}
</script>

<style scoped>

</style>