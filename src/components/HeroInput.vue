<template>
  <v-card flat class="rounded-xl transparent">
    <v-container id="input-usage" fluid>
      <v-text-field
        :append-icon="trailingIcon"
        :prepend-icon="leadingIcon"
        style="color: primary"
        :placeholder="placeHolder"
      >
        This is a text Area
      </v-text-field>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroInput",
  props: ["leadingIcon", "trailingIcon", "placeHolder"],
  computed: {
    commonAttrs() {
      return {
        label: "",
        persistentHint: true,
        outlined: true,
        dense: true,
        hideDetails: false,
        class: {
          "mt-1": this.$props.label,
        },
      };
    },
  },
});
</script>
