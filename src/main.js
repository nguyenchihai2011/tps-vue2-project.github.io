import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
