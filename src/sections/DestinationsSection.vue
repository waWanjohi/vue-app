<template>
  <v-container class="d-flex flex-column">
    <div class="d-flex flex-column justify-center align-center mt-6">
      <p
        class="primary--text text-subtitle font-weight-semibold text-uppercase"
      >
        Check out interesting places
      </p>
      <p class="text--primary text-center font-weight-black text-h3">
        Destinations
      </p>
    </div>
    <div class="mt-7 d-flex align-center justify-center">
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        cycle
        :show-arrows="false"
      >
        <v-carousel-item v-for="slide in items" :key="slide.title">
          <div
            class="d-flex justify-space-between align-center flex-column flex-md-row py-7 px-7 mb-2"
            :style="{ background: slide.bg }"
          >
            <div
              flat
              class="d-flex justify-space-between align-center"
              style="
                 {
                  max-width: 400px;
                }
              "
            >
              <div class="mr-md-3">
                <p class="pacifico-text text-center font-weight-black text-h2">
                  {{ slide.title }}
                </p>
                <p>
                  {{ slide.about }}
                </p>
              </div>
            </div>
            <v-card color="white" elevation="13" class="mt-5 mr-7">
              <v-img
                :src="slide.src"
                max-height="300"
                max-width="500"
                class="tilted-left"
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
        bg: "#94b6cf1c",
        src: "https://www.tripitaca.com/_nuxt/img/Mombasa.baaeaab.jpeg",
        title: "Mombasa",
        about:
          "Mombasa is the number one tourist destination in Kenya. It is situated on the Eastern coastline of Kenya next to the Indian Ocean and it is famous among tourists for its spectacular beaches. Mombasa has an assorted aquatic life, luxurious hotels as well as a very hospitable environment.",
      },
      {
        bg: "#eeedfd52",
        src: "https://www.tripitaca.com/_nuxt/img/Kisumu.ddd473b.jpeg",
        title: "Kisumu",
        about:
          "Kisumu is a Kenyan port city on Lake Victoria (the second largest fresh water lake in the world). It is the third largest city in Kenya, a fact that its locals take great proud in. (The other fact we take great pride in is Barack Obama, considered by all to be a native son).",
      },
      {
        bg: "#743c370d",
        src: "https://www.tripitaca.com/_nuxt/img/Naivasha.9f02dc7.jpeg",
        title: "Naivasha",
        about:
          "Lake Naivasha derives its name from the Maasai word for ???rough water??? due to the sudden storms that are known to arise in the area. The lake is a refreshing day trip or weekend break from Kenya???s busy capital. Lake Naivasha is famous for its strong populations of hippos and flamingos.",
      },
      {
        bg: "#66575214",
        src: "https://www.tripitaca.com/_nuxt/img/Nanyuki.d09177c.jpeg",
        title: "Nanyuki",
        about:
          "Nanyuki (meaning 'place of red water' in the Masai language) is a town in Laikipia County of Kenya lying northwest of Mount Kenya (the second highest mountain in Africa). It was founded in 1907 by British settlers, some of whose descendants still live in and around the town. Nanyuki has several wild more...",
      },
      {
        bg: "#cfa53917",
        src: "https://www.tripitaca.com/_nuxt/img/Nairobi.073643e.jpeg",
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
    transform: rotate(0.008turn);
  }
}

.pacifico-text {
  font-family: Pacifico !important;
}
</style>
