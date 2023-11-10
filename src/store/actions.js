import {
    // fetchNewsList,
    // fetchAskList,
    // fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchAskItem,
} from "../api/index";

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then((res) => {
    //             console.log("NEWS", res.data);
    //             context.commit("SET_NEWS", res.data);
    //             return res;
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
    // FETCH_ASK({ commit }) {
    //     fetchAskList()
    //         .then((res) => {
    //             console.log("ASK", res.data);
    //             commit("SET_ASK", res.data);
    //             return res;
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then((res) => {
    //             console.log("JOBS", res.data);
    //             commit("SET_JOBS", res.data);
    //             return res;
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
    async FETCH_LIST({ commit }, pageName) {
        // no async then
        // return fetchList(pageName)
        //     .then((res) => {
        //         console.log("HOC: " + pageName, res.data);
        //         commit("SET_LIST", res.data);
        //         return res;
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });

        // no then async
        try {
            const res = await fetchList(pageName);
            commit("SET_LIST", res.data);
            return res;
        } catch (err) {
            console.error(err);
        }
    },
    async FETCH_USER({ commit }, userId) {
        // fetchUserInfo(userId)
        //     .then((res) => {
        //         console.log("USERINFO", res.data);
        //         commit("SET_USER", res.data);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });

        try {
            const res = await fetchUserInfo(userId);
            commit("SET_USER", res.data);
        } catch (err) {
            console.error(err);
        }
    },
    async FETCH_ITEM({ commit }, itemId) {
        // fetchAskItem(itemId)
        //     .then((res) => {
        //         console.log("ASKITEM", res.data);
        //         commit("SET_ITEM", res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        try {
            const res = await fetchAskItem(itemId);
            commit("SET_ITEM", res.data);
        } catch (err) {
            console.error(err);
        }
    },
};
