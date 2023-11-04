import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";

Vue.config.productionTip = false;

new Vue({
    router, // vue instance에 router 적용
    store, // vue instance에 vuex 적용
    render: (h) => h(App),
}).$mount("#app");
