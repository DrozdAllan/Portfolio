import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import frenchFlag from "@/assets/icons/frenchFlag.vue";
import englishFlag from "@/assets/icons/englishFlag.vue";
import htmlIcon from "@/assets/icons/htmlIcon.vue";
import cssIcon from "@/assets/icons/cssIcon.vue";
import vueIcon from "@/assets/icons/vueIcon";
import symfonyIcon from "@/assets/icons/symfonyIcon";
import figmaIcon from "@/assets/icons/figmaIcon";
import photoshopIcon from "@/assets/icons/photoshopIcon";
import firebaseIcon from "@/assets/icons/firebaseIcon";
import flutterIcon from "@/assets/icons/flutterIcon";
import gimpIcon from "@/assets/icons/gimpIcon";
import apiPlatformIcon from "@/assets/icons/apiPlatformIcon";
import riveIcon from "@/assets/icons/riveIcon";
import laravelIcon from "@/assets/icons/laravelIcon";

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
            htmlIcon: {
                component: htmlIcon,
            },
            cssIcon: {
                component: cssIcon,
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
            photoshopIcon: {
                component: photoshopIcon,
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
