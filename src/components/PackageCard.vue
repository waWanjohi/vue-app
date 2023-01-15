<template>
  <div class="mr-8">
    <v-card
      class="mx-auto image-lock cursor rounded-lg"
      max-width="300"
      color="secondary"
    >
      <v-img class="card-bg" :src="imageOne" height="250" width="300"></v-img>
    </v-card>
    <v-card
      class="mt-n12 mx-auto rounded-lg pa-3 cursor"
      elevation="12"
      max-width="270"
      rounded
    >
      <div>
        <div class="mb-2">
          <v-chip-group active-class="white--text font-weight-medium" column>
            <v-chip small color="#f9f9f9" text-color="#787878">2 Guests</v-chip>
            <v-chip small color="#f9f9f9" text-color="#787878">6 Nights</v-chip>
          </v-chip-group>
        </div>

        <div class="mb-4">
          <h3>A Staycation at Nairobi</h3>
          <v-list-item-subtitle>Nairobi</v-list-item-subtitle>
        </div>
        <div>
          <div class="small-height hide">
            <p><strong>From:</strong> 02 Dec 2022</p>
            <p>All Inclusive</p>
          </div>

          <div class="d-flex justify-space-between mt-6">
            <v-btn class="primary hide">Book</v-btn>
            <v-btn class="disabled" plain>
              <h3 style="color: #000">$250</h3></v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
    <p class="mt-4 show-hidden">show</p>
    <p class="mt-4 hide">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PackageCard",
  props: ["name", "photoUrl"],
  methods: {
    setBackground(url: string) {
      return {
        "background-image": `url(${url})`,
      };
    },
  },

  data: () => ({
    imageOne:
      "https://storage.googleapis.com/leizen-frontend.appspot.com/hotel/32e39df5-38fe-42a5-8c45-d0751f448ccc.webp?GoogleAccessId=firebase-adminsdk-pe7p9%40leizen-frontend.iam.gserviceaccount.com&Expires=16749763200&Signature=UNlLZScxqSzuH7%2B8DxSoRdzgEGADRQHbadrKmdvBop6NaW1fDcxRzVrXh2W7FIoVMsBqUSFcFM5kkl44vpEU%2Bl7xMui0UV9jR1piJraMrytcc22WRmfzJQd180SFRQMQccqhkjBNHEvkimHNoRnDcCVOEUwGH4ldV5jRvvUjCuPF84m0bxT6RqUFecSSbii4h1s1hqQPMEQ5DoyaToOLeM%2FRaFQDUq9zp14yZ2uizvXOU6YN%2B4jJYddObJmIIMzaTc5CZuLjW3dEl0yF0jP8zIJvDGeXmt9oMB7GsDTdZSP4OIZSPQXRdUsDqE1r29hkKS2qFdGKyb6HNzdnTD%2F8PA%3D%3D",
  }),
});
</script>

<style scoped>
.small-height {
  line-height: 8px;
}
.growing-card {
  overflow: hidden;
  height: 250px;
}

.hide {
  display: none;
}
.show-hidden:hover + .hide {
  display: flex;
}

.card-bg {
  background-size: cover;
}
.card-bg :hover {
  background-size: cover;
  animation: zoom-in-zoom-out 10s ease;
}
@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1.5, 1.5);
  }
  50% {
    transform: scale(2, 2);
  }
  100% {
    transform: scale(1.5, 1.5);
  }
}

.cursor:hover {
  cursor: pointer;
}
.image-lock {
  overflow: hidden;
}
</style>
