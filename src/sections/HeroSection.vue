<template>
  <v-container class="hero-section mb-md-15">
    <v-row class="flex-column flex-md-row">
      <v-col
        sm
        color="primary"
        class="d-flex flex-column align-center align-md-center align-lg-start justify-center"
      >
        <div class="pb-5">
          <p
            class="text-h5 text-md-h2 font-weight-bold text-center text-sm-start"
          >
            Let's get
          </p>
          <p
            class="primary--text text-h3 text-md-h1 font-weight-black text-center"
          >
            Trippy!
          </p>
        </div>
        <v-btn
          class="text-capitalize rounded-lg mt-2 d-md-none"
          color="primary"
          min-width="70%"
          @click.stop="popup = !popup"
          >explore</v-btn
        >
      </v-col>
      <v-col fill-height>
        <div class="mt-8">
          <GridCard
            :image1="image1"
            :image2="image2"
            :image3="image3"
            :image4="image4"
          />
        </div>
      </v-col>
    </v-row>

    <div class="send-front d-none d-md-block">
      <v-card-text class="text-md-subtitle mb-3">
        Start paying for your trips in installments Today!
      </v-card-text>
      <BookingCard />
    </div>

    <v-navigation-drawer v-model="popup" width="100%" absolute>
      <v-list-item>
        <div class="d-flex align-center" @click="popup = !popup" v-ripple>
          <Icon class="primary--text" height="30px" icon="la:undo" />
          <p class="primary--text text-center text-caption mt-4 ml-3">
            Go back
          </p>
        </div>
      </v-list-item>
      <v-card flat>
        <v-tabs v-model="tab" centered icons-and-text>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
            Stays
            <Icon icon="emojione:hotel" height="30px" />
          </v-tab>
          <v-tab href="#tab-2">
            Packages
            <Icon icon="emojione:briefcase" height="30px" />
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'">
            <v-card
              flat
              class="d-flex flex-column align-center mt-4 justify-center"
            >
              <v-text-field
                outlined
                label="Location"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>
              <div>
                <v-menu
                  :close-on-content-click="false"
                  transition="scale-transition"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      outlined
                      v-model="checkinDate"
                      label="Check In Date"
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    no-title
                    :max="today()"
                    min="1950-01-01"
                  ></v-date-picker>
                </v-menu>
              </div>

              <div>
                <v-menu
                  :close-on-content-click="false"
                  transition="scale-transition"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      outlined
                      readonly
                      v-model="checkoutDate"
                      label="Check Out Date"
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    no-title
                    :max="today()"
                    min="1950-01-01"
                  ></v-date-picker>
                </v-menu>
              </div>
              <v-btn
                class="text-capitalize rounded-lg mt-2 d-md-none"
                color="primary"
                min-width="70%"
                >explore</v-btn
              >
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-2'">
            <v-card flat>
              <v-card-text class="text-center primary--text"
                >Awesome Packages Coming soon ...</v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import BookingCard from "@/components/BookingCard.vue";
import GridCard from "@/components/GridCard.vue";
import { Icon } from "@iconify/vue2";
export default {
  name: "HeroSection",
  data: () => ({
    popup: false,
    tab: null,
    activePicker: null,
    checkinDate: null,
    checkoutDate: null,
    image1:
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    image2:
      "https://images.unsplash.com/photo-1470755148323-3b7582338b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    image3:
      "https://images.unsplash.com/photo-1534719156993-f3c9448673bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f089cfa06eb1cd7c0f654b39d8fdfd07&auto=format&fit=crop&w=1350&q=80",
    image4:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  }),
  components: { GridCard, BookingCard, Icon },
  methods: {
    today() {
      return new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      ).toISOString();
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  position: relative;
}

.send-front {
  position: absolute;
  left: 0;
  bottom: 20%;
}
</style>
