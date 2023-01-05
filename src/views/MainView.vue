<template>
  <v-app>
    <v-row cols="12" sm="12">
      <v-toolbar elevation="3">
        <v-toolbar-items>
          <v-btn flat><router-link to="/login">Home</router-link></v-btn>
          <v-btn><router-link to="/login">Login</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-row>
    <v-spacer></v-spacer>
    <v-container fluid="true">
      <v-row>
        <v-col cols="12" sm="4">
          <v-select
            :items="items"
            label="Category"
            solo
          ></v-select>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            label="Name"
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            label="Code"
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn justify-space-between
                 color="primary"
                 large
                 class="mb-3">
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <WarehouseTable/>
  </v-app>
</template>

<script lang="ts">
import MainVue from 'vue'
import WarehouseTable from '@/components/WarehouseTable.vue'

export default MainVue.extend({
  data: () => ({
    items: ['ALL', 'OFFICE', 'FOOD', 'BUILDING']
  }),
  name: 'App',
  components: {
    WarehouseTable: WarehouseTable

  }
})
</script>
