<template>
    <section>
        <ul class="jobs-list">
            <li class="post" v-for="(job, index) in this.jobs" :key="index">
                <!-- 포인트 영역 -->
                <div class="points">{{ job.points || 0 }}</div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="jobs-title">
                        <a :href="job.url">{{ job.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ job.time_ago }}
                        <span v-if="job.domain">by </span>
                        <a :href="job.url">{{ job.domain }}</a></small
                    >
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["jobs"]),
    },
    created() {
        this.$store.dispatch("FETCH_JOBS");
    },
};
</script>

<style scoped>
.jobs-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: unset;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.jobs-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
