<template>
  <v-container>
    <h1 class="text--primary font-weight-black">Destinations</h1>
    <br />
    <v-carousel
      :show-arrows="false"
      :hide-delimiters="true"
      :continuous="true"
      class="rounded-xl"
      height="600"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-container class="d-flex justify-space-around">
          <div>
            <v-card
              flat
              max-width="600px"
              class="transparent center-vertically"
            >
              <h1 class="white--text">{{ item.title.toUpperCase() }}</h1>
              <br />
              <p class="white--text">
                {{ item.about }}
              </p>
              <v-btn>Explore ></v-btn>
            </v-card>
          </div>
          <v-card max-width="300px">
            <CustomCarousel />
          </v-card>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import CustomCarousel from "@/components/CustomCarousel.vue";

export default {
  name: "DestinationsSection",
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "Mombasa",
        about:
          "Mombasa is the number one tourist destination in Kenya. It is situated on the Eastern coastline of Kenya next to the Indian Ocean and it is famous among tourists for its spectacular beaches. Mombasa has an assorted aquatic life, luxurious hotels as well as a very hospitable environment. Mombasa has more...",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        title: "Kisumu",
        about:
          "Kisumu is a Kenyan port city on Lake Victoria (the second largest fresh water lake in the world). It is the third largest city in Kenya, a fact that its locals take great proud in. (The other fact we take great pride in is Barack Obama, considered by all to be a native son). Kisumu is w more...",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        title: "Naivasha",
        about:
          "Lake Naivasha derives its name from the Maasai word for ‘rough water’ due to the sudden storms that are known to arise in the area. The lake is a refreshing day trip or weekend break from Kenya’s busy capital. Lake Naivasha is famous for its strong populations of hippos and flamingos. Th more...",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        title: "Nanyuki",
        about:
          "Nanyuki (meaning 'place of red water' in the Masai language) is a town in Laikipia County of Kenya lying northwest of Mount Kenya (the second highest mountain in Africa). It was founded in 1907 by British settlers, some of whose descendants still live in and around the town. Nanyuki has several wild more...",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "Mombasa",
        about:
          "Mombasa is the number one tourist destination in Kenya. It is situated on the Eastern coastline of Kenya next to the Indian Ocean and it is famous among tourists for its spectacular beaches. Mombasa has an assorted aquatic life, luxurious hotels as well as a very hospitable environment. Mombasa has more...",
      },
    ],
  }),
  methods: {
    changeBackground(item: string) {
      return { "background-image": `url(${item})` };
    },
  },
  components: { CustomCarousel },
};
</script>

<style scoped>
.transparent {
  background: transparent !important;
}
.center-icon {
  top: 15%;
  left: 17%;
}
.circle-border {
  background: #fff;
  border-radius: 100%;
  height: 36px;
  width: 36px;
}
.white {
  color: white;
}
.center-vertically {
  position: absolute;
  top: 30%;
  left: 3%;
}
</style>
