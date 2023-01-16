<template>
  <v-hover v-slot="{ hover }">
    <div class="mr-8">
      <v-card
        class="mx-auto image-lock cursor rounded-lg"
        max-width="300"
        color="secondary"
      >
        <v-img
          class="card-bg"
          :src="photoUrl ?? imageOne"
          height="250"
          width="300"
          alt="image"
        ></v-img>
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
              <v-chip small color="#f9f9f9" text-color="#787878"
                >{{ guests }} Guests</v-chip
              >
              <v-chip small color="#f9f9f9" text-color="#787878"
                >{{ nights }} Nights</v-chip
              >
            </v-chip-group>
          </div>
          <div class="mb-4">
            <h3>{{ title }}</h3>
            <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
          </div>
          <div class="d-flex justify-end">
            <div class="">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="small-height transition-fast-in-fast-out"
                >
                  <div>
                    <p><strong>From:</strong> {{ from }}</p>
                    <p>{{ inclusion }}</p>
                  </div>
                  <div class="d-flex justify-space-between mt-6">
                    <v-btn class="primary">{{ btnTitle }}</v-btn>
                  </div>
                </div>
              </v-expand-transition>
            </div>
            <div class="always-right d-flex justify-end align-end">
              <v-btn class="black--text disabled" plain>
                <h3>${{ amount }}</h3>
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-hover>
</template>

<script lang="ts">
export default {
  name: "PackageCard",
  props: [
    "name",
    "photoUrl",
    "amount",
    "btnTitle",
    "inclusion",
    "from",
    "title",
    "subtitle",
    "guests",
    "nights",
  ],
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
};
</script>

<style scoped>
.always-right {
  right: 0;
  bottom: 0;
}
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

.more-details :hover + .hide {
  visibility: visible;
}
</style>
