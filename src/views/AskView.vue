<template>
    <ListItem></ListItem>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import bus from "@/utils/bus";

export default {
    components: {
        ListItem,
    },
    created() {
        bus.$emit("start:spinner");
        this.$store
            .dispatch("FETCH_ASK")
            .then(() => {
                console.log("fetched");
                bus.$emit("end:spinner");
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
</script>
