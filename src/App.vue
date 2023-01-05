<template>
  <v-app>
    <v-row cols="12" sm="12">
      <v-col  cols="12" sm="12" md="12">
      <v-toolbar elevation="3"   class="primary" flat >
        <v-toolbar-items >
          <v-btn><router-link to="/warehouse">Warehouse </router-link></v-btn>
          <v-btn><router-link to="/login">Login</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      </v-col>
    </v-row>
        <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    bar: [
      { class: 'primary', dark: true }
    ]
  }),
  name: 'App',
  components: {
  }

})
</script>
