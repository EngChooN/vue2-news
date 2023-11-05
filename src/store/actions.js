import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index";

export default {
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
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then((res) => {
                console.log("ASK", res.data);
                commit("SET_ASK", res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then((res) => {
                console.log("JOBS", res.data);
                context.commit("SET_JOBS", res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
