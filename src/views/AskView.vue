<template>
    <section>
        <p v-for="(ask, index) in this.$store.state.ask" :key="index">
            <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["ask"]),
    },
    methods: {
        ...mapActions(["FETCH_ASK"]),
    },
    created() {
        this.FETCH_ASK();
    },
};
</script>

<style scoped></style>
