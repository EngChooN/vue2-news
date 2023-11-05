<template>
    <div>
        <p v-for="(job, index) in this.$store.state.jobs" :key="index">
            {{ job.title }}
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_JOBS");
    },
};
</script>

<style scoped></style>
