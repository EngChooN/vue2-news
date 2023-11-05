<template>
    <div>
        <p v-for="(ask, index) in this.ask" :key="index">
            {{ ask.title }}
        </p>
    </div>
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
