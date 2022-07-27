import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import frenchFlag from "@/assets/icons/frenchFlag.vue";
import englishFlag from "@/assets/icons/englishFlag.vue";
import vueIcon from "@/assets/icons/vueIcon";
import symfonyIcon from "@/assets/icons/symfonyIcon";
import figmaIcon from "@/assets/icons/figmaIcon";
import firebaseIcon from "@/assets/icons/firebaseIcon";
import flutterIcon from "@/assets/icons/flutterIcon";
import gimpIcon from "@/assets/icons/gimpIcon";
import apiPlatformIcon from "@/assets/icons/apiPlatformIcon";
import riveIcon from "@/assets/icons/riveIcon";
import laravelIcon from "@/assets/icons/laravelIcon";
import expressjsIcon from "@/assets/icons/expressjsIcon";
import mongoDBIcon from "@/assets/icons/mongoDBIcon";
import wordpressIcon from "@/assets/icons/wordpressIcon";

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        mobileBreakpoint: "sm",
    },
    icons: {
        values: {
            fr: {
                component: frenchFlag,
            },
            en: {
                component: englishFlag,
            },
            vueIcon: {
                component: vueIcon,
            },
            symfonyIcon: {
                component: symfonyIcon,
            },
            figmaIcon: {
                component: figmaIcon,
            },
            firebaseIcon: {
                component: firebaseIcon,
            },
            flutterIcon: {
                component: flutterIcon,
            },
            gimpIcon: {
                component: gimpIcon,
            },
            apiPlatformIcon: {
                component: apiPlatformIcon,
            },
            riveIcon: {
                component: riveIcon,
            },
            laravelIcon: {
                component: laravelIcon,
            },
            expressjsIcon: {
                component: expressjsIcon,
            },
            mongoDBIcon: {
                component: mongoDBIcon,
            },
            wordpressIcon: {
                component: wordpressIcon,
            }
        },
    },
    theme: {
        themes: {
            light: {
                main: "#507c54",
                action: "#622C05",
                error: "#ff6a57",
            },
            dark: {
                main: "#1D2E1F",
                action: "#622C05",
            },
        },
    },
});
