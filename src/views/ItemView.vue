<template>
    <div>
        <!-- 사용자 정보 -->
        <UserProfile>
            <div slot="name">
                <router-link :to="`/user/${this.itemInfo.user}`">{{
                    this.itemInfo.user
                }}</router-link>
            </div>
            <template slot="time">{{ this.itemInfo.time_ago }}</template>
        </UserProfile>
        <h2>{{ this.itemInfo.title }}</h2>
        <!-- 질문 댓글 -->
        <div v-html="this.itemInfo.content"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "@/components/UserProfile.vue";

export default {
    components: {
        UserProfile,
    },
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
