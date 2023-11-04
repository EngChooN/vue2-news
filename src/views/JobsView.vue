<template>
    <div>
        <p v-for="(job, index) in jobsData" :key="index">
            {{ job.title }}
        </p>
    </div>
</template>

<script>
import { fetchJobsList } from "../api/index";

export default {
    data() {
        return {
            jobsData: [],
        };
    },
    created() {
        fetchJobsList()
            .then((res) => {
                this.jobsData = res.data;
                console.log(this.jobsData);
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
</script>

<style scoped></style>
