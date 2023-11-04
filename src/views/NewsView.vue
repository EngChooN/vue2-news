<template>
    <div>
        <p v-for="(news, index) in this.$store.state.news" :key="index">
            {{ news.title }}
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_NEWS");
    },
};
</script>

<style scoped></style>
