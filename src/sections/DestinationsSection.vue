<template>
  <v-container class="py-7">
    <div class="d-flex flex-column justify-start align-start mt-6">
      <p
        class="primary--text text-subtitle font-weight-semibold text-uppercase"
      >
        Check out interesting places
      </p>
      <p class="text--primary text-center font-weight-black text-h3">
        Destinations
      </p>
    </div>
    <div class="mt-7 show-border-line d-flex slign-center justify-center">
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        cycle
        :show-arrows="false"
      >
        <v-carousel-item v-for="slide in items" :key="slide.title">
          <div class="d-flex justify-space-around align-center">
            <v-card
              flat
              class="d-flex justify-space-between align-center"
              max-width="400"
            >
              <div>
                <p class="pacifico-text text-center font-weight-black text-h2">
                  {{ slide.title }}
                </p>
                <p>
                  {{ slide.about }}
                </p>
              </div>
            </v-card>
            <v-card color="white" elevation="10" class="mt-5 mr-7">
              <v-img
                :src="slide.src"
                max-height="300"
                max-width="500"
                class="tilted-left"
                elevation="12"
              />
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "HeroSection",
  data: () => ({
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
        title: "Nairobi",
        about:
          "Nairobi is the second famous tourist destination in Kenya. It is situated on the Eastern coastline of Kenya next to the Indian Ocean and it is famous among tourists for its spectacular beaches. Mombasa has an assorted aquatic life, luxurious hotels as well as a very hospitable environment. Mombasa has more...",
      },
    ],
  }),
};
</script>

<style scoped>
@media (min-width: 900px) {
  .tilted-left {
    transform: rotate(0.02turn);
  }
}

.pacifico-text {
  font-family: Pacifico !important;
}
</style>
