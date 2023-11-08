<template>
    <UserProfile>
        <div slot="name">{{ this.userInfo.id }}</div>
        <span slot="time">
            {{ "Joined " + this.userInfo.created + ", " }}
            {{ this.userInfo.karma }}
        </span>
    </UserProfile>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapState } from "vuex";

export default {
    components: {
        UserProfile,
    },
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
