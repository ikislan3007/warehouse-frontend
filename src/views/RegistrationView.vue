<template justify-center>
  <v-app>

    <v-container fluid="true">

      <br>
      <v-card align="center" justify="center">
        <h2 color="blue"> Registration form</h2>
        <v-col justify="center">
          <v-col cols="12" sm="4">
            <v-text-field
              label="Username"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              label="Password"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              label="Email"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              label="Phone"
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn justify="justify-center"
                   color="primary"
                   large
                   class="mb-3">
              Submit
            </v-btn>
          </v-col>
        </v-col>
      </v-card>
    </v-container>

  </v-app>

</template>

<script lang="ts">
import MainVue from 'vue'

export default MainVue.extend({
  data: () => ({}),
  name: 'RegistrationView',
  components: {}
})
</script>
