<template>
    <section>
        <p v-for="(news, index) in this.$store.state.news" :key="index">
            <a :href="news.url">{{ news.title }}</a>
            <small>
                {{ news.time_ago }} by
                <router-link :to="`/user/${news.user}`">{{
                    news.user
                }}</router-link></small
            >
        </p>
    </section>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_NEWS");
    },
};
</script>

<style scoped></style>
