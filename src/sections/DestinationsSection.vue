<template>
  <div>
    <v-card-text>
      <div>
        <br /><br />
        <h2 class="text--primary text-center font-weight-black text-h3 mb-3">
          Enjoy our awesome Destinations
        </h2>
      </div>
    </v-card-text>
    <v-container
      class="mx-auto hero-card d-flex flex-column flex-md-row justify-space-between align-center rounded-xl p-4"
      max-height="600px"
      min-height="400px"
    >
      <v-container
        class="blur d-flex justify-center align-center flex-column"
        elevation="12"
      >
        <v-card-title
          class="text-h3 font-weight-bold flex-sm-column justify-sm-center align-sm-center"
          >Enjoy Your Vacation</v-card-title
        >
        <v-card-text class="text-subtitle text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis
          optio!
        </v-card-text>
      </v-container>
      <v-container>
        <v-img :src="image" class="rounded-xl tilted-left" />
      </v-container>
    </v-container>
  </div>
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
        title: "Mombasa",
        about:
          "Mombasa is the number one tourist destination in Kenya. It is situated on the Eastern coastline of Kenya next to the Indian Ocean and it is famous among tourists for its spectacular beaches. Mombasa has an assorted aquatic life, luxurious hotels as well as a very hospitable environment. Mombasa has more...",
      },
    ],
  }),
};
</script>

<style scoped>
.hero-card {
  background-color: #f6d9d891;
  overflow: hidden;
}

@media (min-width: 900px) {
  .tilted-left {
    transform: rotate(-0.009turn);
  }
}
</style>
