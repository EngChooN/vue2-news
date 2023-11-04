import Vue from "vue";
import Vuex from "vuex";

import { fetchNewsList, fetchAskList } from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
    },
    mutations: {
        SET_NEWS(state, data) {
            state.news = data;
        },
        SET_ASK(state, data) {
            state.ask = data;
        },
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then((res) => {
                    console.log("NEWS", res.data);
                    context.commit("SET_NEWS", res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then((res) => {
                    console.log("ASK", res.data);
                    context.commit("SET_ASK", res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
});
