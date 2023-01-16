<template>
  <v-card flat class="rounded-xl transparent">
    <v-container id="input-usage" fluid>
      <v-text-field
        :append-icon="trailingIcon"
        :prepend-icon="leadingIcon"
        style="color: primary"
        :placeholder="placeHolder"
        class="mt-2"
      >
        This is a text Area
      </v-text-field>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default {
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
};
</script>
