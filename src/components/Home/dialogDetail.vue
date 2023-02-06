<template>
  <div>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab
               plain
               v-bind="attrs"
               v-on="on"
               @mouseover="showInfoBox = true"
               @mouseleave="showInfoBox = false"
        >
          <img :src="character.avatar" width="250" height="290"
               />
          <v-tooltip v-if="showInfoBox">
            <template v-slot:activator="{ on }">
              <div v-on="on">Click Me</div>
            </template>
            <span>Click Me</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-card color="#455A64">
      <v-card-text>
        <v-row class="pt-16">
          <v-col cols="5">
            <div>
              <img
                  width="500px"
                  class="rounded-lg"
                  :src="character.avatar"
              />
            </div>
          </v-col>
          <v-col cols="7">
            <div class="mb-8 pa-0" style="font-size: 50px; color: #ffe59a; line-height: 45px;">
              <span class="ma-0 pa-0"
                    style="position: relative; bottom: -10px;">
                {{ character.first_name + ' '+ character.last_name }}
              </span>
            </div>
            <div style="line-height: 35px;">
              <div class="white--text pa-2" style="font-size: 30px"> Contact: {{ character.email }}</div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="mb-5 mr-5"
            color="#ffe59a"
            @click="dialog = false"
        >
          <Icon icon="mdi:close-outline" />
          Close
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    showInfoBox: false
  }),
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>