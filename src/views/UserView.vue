<template>
    <section>
        <p>name: {{ this.userInfo.id }}</p>
        <p>karma: {{ this.userInfo.karma }}</p>
        <p>created: {{ this.userInfo.created }}</p>
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["userInfo"]),
    },
    created() {
        // router 정보 가져오기
        const userId = this.$route.params.id;
        console.log(userId);
        this.$store.dispatch("FETCH_USER", userId);
    },
};
</script>

<style scoped></style>
