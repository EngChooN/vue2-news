import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemsView from "../views/ItemView.vue";
import createListView from "@/views/CreateListView";

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
            component: createListView("NewsView"), // HOC
        },
        {
            path: "/ask",
            name: "ask",
            component: createListView("AskView"),
        },
        {
            path: "/jobs",
            name: "jobs",
            component: createListView("JobsView"),
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
