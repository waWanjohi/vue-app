<template>
  <div class="footer">
    <v-container class="bg-image" fluid>
      <v-container>
        <v-row class="transparent">
          <v-col cols="12" md="3" sm="6">
            <v-card
              class="mx-auto transparent"
              style="border: none"
              elevation="0"
            >
              <v-card-text>
                <img
                  src="https://www.tripitaca.com/_nuxt/img/tripitacalogo2.2b5908a.png"
                  alt="Logo"
                  height="40px"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            v-for="(menu, index) in footerMenus"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <FooterCard :title="menu.title" :links="menu.links" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <div class="copyright-section">
      <strong class="pr-4"
        >&copy; Tripitaca {{ new Date().getFullYear() }}</strong
      >
      <div>
        <v-btn v-for="icon in icons" :key="icon" icon>
          <v-icon color="white" size="20px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import FooterCard from "@/components/FooterCard.vue";

export default {
  name: "BottomFooter",
  components: { FooterCard },
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-twitter"],
    footerMenus: [
      {
        title: "Contact",
        links: [
          {
            hasIcon: true,
            title: "support@tripitaca.com",
            icon: "mdi-gmail",
          },
          {
            hasIcon: true,
            title: "+254729784455",
            icon: "mdi-phone-classic",
          },
          {
            hasIcon: true,
            title: "Jewel Complex, 5th Floor",
            icon: "mdi-google-maps",
          },
        ],
      },
      {
        title: "Links",
        links: [
          {
            hasIcon: false,
            title: "Places to Stay",
          },
          {
            hasIcon: false,
            title: "Insyder",
          },
          {
            hasIcon: false,
            title: "List Your Property",
          },
          {
            hasIcon: false,
            title: "Notifications",
          },
          {
            hasIcon: false,
            title: "My Offers",
          },
        ],
      },
      {
        title: "Help Center",
        links: [
          {
            hasIcon: false,
            title: "Profile",
          },
          {
            hasIcon: false,
            title: "About Us",
          },
          {
            hasIcon: false,
            title: "Service Fees Policy",
          },
          {
            hasIcon: false,
            title: "Term & Conditions",
          },
          {
            hasIcon: false,
            title: "Refund & Cancellation Policy",
          },
        ],
      },
    ],
  }),
};
</script>
<style scoped>
.copyright-section {
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #000;
  color: #fff;
}

.transparent {
  background: transparent;
}
.bg-image {
  background-image: url("https://www.tripitaca.com/_nuxt/img/Footer.01c96f7.png") !important;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 410px;
  background-position: bottom;
}
.footer {
  width: 100vw;
  height: auto;
  border-top: 1px solid #ddd;
  background-color: #f7f7f7;
}
</style>
