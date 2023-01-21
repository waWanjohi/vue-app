<template>
  <v-card class="mx-auto d-none d-sm-flex" flat>
    <v-navigation-drawer
      class="d-flex flex-column align-center justify-center show-border-line"
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "PackagesDrawer",
  props: ["items"],
};
</script>
