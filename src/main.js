import { createApp } from "vue";
import "./index.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStore,
  faShoppingCart,
  faStar,
  faPlay,
  faPhone,
  faEnvelope,
  faClock,
  faTruck,
  faPlus,
  faMinus,
  faTrash,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  // free solid
  faStore,
  faShoppingCart,
  faStar,
  faPlay,
  faPhone,
  faEnvelope,
  faClock,
  faTruck,
  faPlus,
  faMinus,
  faTrash,
  faTimes,
  faArrowRight,

  // free brands
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
