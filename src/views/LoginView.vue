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
                label="Email"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="email"
            />
            <v-text-field
                dense
                color="#ffe59a"
                label="Password"
                type="password"
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
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "LoginView",
  components:{
    loginBar
  },
  data: () => ({
    email : "",
    password: "",
    accessToken: ""
  }),
  computed:{
    ...mapGetters({
      setAccessToken: 'login/getAccessToken',
    })
  },
  methods:{
    ...mapActions({
      setAccessToken:'login/setAccessToken',
    }),
    login(){
      const data = {
        email : this.email,
        password : this.password
      };
      axios.post('https://reqres.in/api/login', data)
          .then((response) => {
            console.log({user: response.data})
            this.setAccessToken = response.data.token
            this.$router.push({path: '/'})
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>