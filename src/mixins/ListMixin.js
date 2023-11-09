import bus from "@/utils/bus";

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        bus.$emit("end:spinner");
    },
    // created() {
    //     bus.$emit("start:spinner");
    //     this.$store
    //         .dispatch("FETCH_LIST", this.$route.name)
    //         .then(() => {
    //             console.log("fetched", this.$route.name);
    //             bus.$emit("end:spinner");
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
};
