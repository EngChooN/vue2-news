<template>
    <div>
        <!-- 질문 상세 정보 -->
        <section>
            <div class="user-container">
                <div><i class="fa-solid fa-user"></i></div>
                <div class="user-description">
                    <router-link :to="`/user/${this.itemInfo.user}`">{{
                        this.itemInfo.user
                    }}</router-link>
                    <div class="time">{{ this.itemInfo.time_ago }}</div>
                </div>
            </div>
            <h2>{{ this.itemInfo.title }}</h2>
        </section>
        <!-- 질문 댓글 -->
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["itemInfo"]),
    },
    created() {
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch("FETCH_ITEM", itemId);
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}
.fa-user {
    font-size: 2.2rem;
}
.user-description {
    padding: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
