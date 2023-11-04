<template>
    <div>
        <p v-for="(ask, index) in this.$store.state.ask" :key="index">
            {{ ask.title }}
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_ASK");
    },
};
</script>

<style scoped></style>
