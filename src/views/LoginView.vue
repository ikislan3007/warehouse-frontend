<template>
  <v-app>
  <v-container>
    <br>
    <h2 class="text-center">Login</h2>
    <br>
    <v-row  justify="center">

      <v-col cols="12" sm="6" >
        <v-text-field
          v-model="username"
          label="Username"
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row  justify="center">
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="password"
          label="Password"
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row  justify="center">
    <v-col cols="12" sm="4">
      <v-btn
             color="primary"
             x-large
            sm="6">
        Login
      </v-btn>
    </v-col>
      <v-col cols="12" sm="2">
       <h2  color="primary"
               x-large
               sm="6"  class="text-center"><router-link to="/sign-up">Sign up </router-link> </h2>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>
<script lang="ts">
export default {
  name: 'LoginView',
  data: () => ({
    username: 'John',
    password: 'Doe'
  })
}
</script>
