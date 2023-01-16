<template>
  <v-container class="mt-4">
    <h1>Why List With Us</h1>
    <br />
    <div class="cover rounded-xl">
      <div class="ml-md-5 mx-auto ml-lg-5 ml-xl-5">
        <div class="rounded-xl d-flex justify-start">
          <div class="listings d-flex flex-column align-center mb-4">
            <ListingCard
              class="mb-4"
              v-for="(item, i) in listItems"
              :key="i"
              :title="item.title"
              :description="item.description"
              :image="item.image"
            />
            <v-btn
              class="rounded-lg button"
              flat
              height="54px"
              width="350"
              color="#fff"
            >
              List Your Property in 60 Sec</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import ListingCard from "./ListingCard.vue";

export default {
  name: "ListingsSection",
  data: () => ({
    listItems: [
      {
        title: "Special Package",
        description:
          "Create your own packages and sell them directly to travelers, no agents, no middlemen.",
        image: "https://www.tripitaca.com/_nuxt/img/money.1536e0c.png",
      },
      {
        title: "See Incoming Travelers",
        description:
          "We'll notify you when travelers looking for properties like yours are coming to your area increasing your chances of getting booked by 100%.",
        image: "https://www.tripitaca.com/_nuxt/img/money.1536e0c.png",
      },
      {
        title: "Financial Support",
        description:
          "Get immediate access to affordable credit and other financial services to help your business get back on track.",
        image: "https://www.tripitaca.com/_nuxt/img/money.1536e0c.png",
      },
    ],
  }),
  components: { ListingCard },
};
</script>

<style scoped>
.cover {
  background-image: url("https://www.tripitaca.com/_nuxt/img/BecomeAHost3.cd1399e.png");
  background-size: cover;
  background-position: initial;
  height: auto;
  padding: 23px;
}

.button {
  width: min-content !important;
  padding: 2px;
}
@media (max-width: 800px) {
  .cover {
    width: 100%;
    background-position: left;
  }
}
/*
.listings {
  line-height: 24px;
  padding: 12px;
}

@media (max-width: 800px) {
  /* .listings {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 0%;
  } 
}
.listings-button {
  font-size: 15px;
  font-weight: 500;
  margin: 0px 0px 20px;
  padding: 0px 23.1111px;
  text-transform: capitalize !important;
} */
</style>
