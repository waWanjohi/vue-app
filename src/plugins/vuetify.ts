import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ff0800",
        secondary: "#a20027",
        accent: "#ff0800",
        error: "#b71c1c",
      },
    },
  },
});
