import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemsView from "../views/ItemView.vue";
// import createListView from "@/views/CreateListView";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import bus from "@/utils/bus";
import { store } from "@/store/index";

// Vue 애플리케이션이 Vue Router를 전역으로 사용할 수 있도록 설치
Vue.use(VueRouter);

// router 세팅(?)
export const router = new VueRouter({
    mode: "history", // 표시되는 url => root/#/ 형식을 없애줌
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        {
            path: "/news", // 주소
            name: "news",
            // component: createListView("NewsView"), // HOC
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched", to.name);
                        // bus.$emit("end:spinner");
                        next(); // page를 이동시키는 함수 (이것이 없으면 절대로 이동이 안됨)
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            },
        },
        {
            path: "/ask",
            name: "ask",
            // component: createListView("AskView"),
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched", to.name);
                        // bus.$emit("end:spinner");
                        next(); // page를 이동시키는 함수 (이것이 없으면 절대로 이동이 안됨)
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            },
        },
        {
            path: "/jobs",
            name: "jobs",
            // component: createListView("JobsView"),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched", to.name);
                        // bus.$emit("end:spinner");
                        next(); // page를 이동시키는 함수 (이것이 없으면 절대로 이동이 안됨)
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            },
        },
        {
            path: "/user/:id",
            component: UserView,
        },
        {
            path: "/item/:id",
            component: ItemsView,
        },
    ],
});
