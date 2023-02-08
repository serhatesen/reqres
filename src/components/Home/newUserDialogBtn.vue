<template>
  <div>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
      <template v-slot:activator="{ on }">
        <v-btn
            v-on  ="on"
        >
          New User
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">New User</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
                v-model="name"
                label="Name"
                required
            />
            <v-text-field
                v-model="job"
                label="Job"
                required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="createUser"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "newUserDialogBtn",
  data: () => ({
    dialog: false,
    name: "",
    job: ""
  }),
  methods: {
    ...mapActions({
      setUserData: "users/setUserData"
    }),
    createUser() {
      const data = {
        name: this.name,
        job: this.job
      };
      axios.post("https://reqres.in/api/users", data)
          .then(response => {
            console.log(response);
        this.dialog = false;
      });
    }
  },

}
</script>

<style scoped>

</style>