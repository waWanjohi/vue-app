<template>
  <div>
    <v-card
      v-ripple
      class="rounded-lg"
      :img="photoUrl"
      min-width="246"
      min-height="267"
      elevation="1"
    >
      <div class="d-flex justify-end">
        <v-btn class="rounded-xl primary--text font-weight-black mr-5 mt-5">
          ${{ amount }}
        </v-btn>
      </div>
    </v-card>
    <p class="font-weight-bold text-left text-subtitle py-3">
      Enjoy the beauty of {{ title }}
    </p>

    <p class="text--secondary">
      <Icon icon="la:map-marker" /> {{ subtitle }}, {{ subtitle }}
    </p>
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue2";
export default {
  name: "PackageCard",
  components: { Icon },
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
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },

  data: () => ({
    selection: 1,
    loading: false,
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
