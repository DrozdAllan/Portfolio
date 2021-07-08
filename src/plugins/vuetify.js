import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import frenchFlag from "@/assets/icons/frenchFlag.vue";
import englishFlag from "@/assets/icons/englishFlag.vue";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "xs",
  },
  icons: {
    values: {
      fr: {
        component: frenchFlag,
      },
      en: {
        component: englishFlag,
      },
    },
  },
  theme: {
    themes: {
      light: {
        bleu: "#0724CC",
        completion: "#CC9D06",
        noir: "#272E45",
      },
    },
  },
});
