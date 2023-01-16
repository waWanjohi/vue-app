<template>
  <div>
    <div class="absolute-div"></div>
    <div class="hero d-lg-flex">
      <v-container class="center">
        <div class="d-flex flex-column mt-12 mb-3">
          <div class="d-flex align-center flex-column">
            <div class="white--text">
              <p
                style="font-family: Futura-Bold"
                class="font-weight-black text-center text-lg-h1 text-h4 title"
              >
                LET'S GET TRIPPY
              </p>
            </div>
            <div class="white--text text-sm text-lg-h5 text-center">
              <p>Start paying for your trips in installments Today!</p>
            </div>
          </div>

          <div
            class="d-none d-lg-flex align-start justify-center mt-8 ml-13 text-h6"
          >
            <div class="d-flex flex-column justify-start align-start">
              <v-card
                class="mt-7 mb-7 rounded-lg hero-shadow"
                width="268"
                height="50"
              >
                <v-tabs
                  style="color: secondary"
                  class="d-flex justify-space-between transparent"
                  fixed-tabs
                >
                  <div class="rounded-lg">
                    <TabButton :src="keyImage" :title="`STAYS`" />
                  </div>
                  <div class="rounded-lg">
                    <TabButton :src="packageImage" :title="`Packages`" />
                  </div>
                </v-tabs>
              </v-card>
              <v-spacer></v-spacer>
              <v-card
                class="d-flex justify-space-evenly align-center rounded-lg hero-shadow mt-7 show-border-line"
                height="50"
                width="90%"
              >
                <HeroInput
                  :trailingIcon="leadingIcon"
                  :leadingIcon="trailingIcon"
                  :placeHolder="`Location`"
                />
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="checkIn"
                        append-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        color="#cccccc"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      flat
                      no-title
                      scrollable
                      :placeholder="checkIn"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <HeroInput :placeHolder="`Nights`" />
                <HeroInput
                  :placeHolder="`Number of guests`"
                  :trailingIcon="leadingIcon"
                />
                <div class="transparent mx-3">
                  <v-icon>mdi-search-web</v-icon>
                </div>
              </v-card>
            </div>
          </div>
        </div>

        <v-container
          class="d-none d-sm-flex d-md-flex d-lg-none flex-column align-center justify-center"
        >
          <CustomSearchBar :text="`STAYS`" />
          <CustomSearchBar :text="`PACKAGES`" />
        </v-container>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import CustomSearchBar from "./CustomSearchBar.vue";
import HeroInput from "./HeroInput.vue";
import TabButton from "./TabButton.vue";

export default {
  name: "HeroSection",
  components: { HeroInput, TabButton, CustomSearchBar },
  data: () => ({
    keyImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAAAHlBMVEVMaXEAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmxG0OHdAAAACnRSTlMA/+OaOxZYesWzTi+BaQAAAJFJREFUGNNtkFsShSAMQ5vQF/vf8G1FRZ2br3LIpAGRS0FwmLyVaPGNA4xReDyYKhEus/CGTgOC1il3hFYaK1PxpKkinelN5+2teyMyjhprX6fVpHBi40SdwjLMPceJHfSa6avN6Z5Ii+F2Fe/OOCrl5P2mI0TWhl1I4i9Vd5Vnna25qL+p/vvX0/yxSn8M44N+YOAClf3rslcAAAAASUVORK5CYII=",
    packageImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUBAMAAACQZWsAAAAAG1BMVEVMaXEAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmwvqFedAAAACHRSTlMAEC8/U3iu2UljNGgAAABiSURBVHjaY2BABWIdHYkwdkRoaCuEZSycbmxcZmwMZKp3eHSAQREDQwWM3c7A0AFjd4DY6gh2ixOCXdiSAWcXMGBnNxtXIMzp6CDEroAxgW6wgLGbGRgYPdpdgKCiRQDFfwCNPk3MGKplPQAAAABJRU5ErkJggg==",
    trailingIcon: "mdi-map-marker",
    leadingIcon: "mdi-menu-down",
    checkIn: "Check-In Date",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
  }),
};
</script>

<style scoped>
.a-tab :hover {
  background-color: #000 !important;
  color: white !important;
  height: 100%;
}
.hero-shadow {
  border: 1px solid #f7f7f7;
  box-shadow: 0px 0px 0px 10px #ffffff4b !important;
}
.transparent {
  background: transparent;
}

.absolute-div {
  position: absolute;
  animation: zoom-in-zoom-out 50s ease infinite;
  background-image: url("https://www.tripitaca.com/_nuxt/img/LandingImage4.43cce79.jpg") !important;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
.hero {
  height: 100vh;
  position: relative;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(2.5, 2.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
