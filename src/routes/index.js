import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemsView from "../views/ItemsView.vue";

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
            component: NewsView, // 해당 url에 표시될 컴포넌트
        },
        {
            path: "/ask",
            component: AskView,
        },
        {
            path: "/jobs",
            component: JobsView,
        },
        {
            path: "/user",
            component: UserView,
        },
        {
            path: "/items",
            component: ItemsView,
        },
    ],
});
