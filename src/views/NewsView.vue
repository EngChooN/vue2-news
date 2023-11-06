<template>
    <section>
        <ul class="news-list">
            <li class="post" v-for="(news, index) in this.news" :key="index">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ news.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a :href="news.url">{{ news.title }}</a>
                    </p>
                    <small class="link-text">
                        by
                        <router-link :to="`/user/${news.user}`"
                            ><b>{{ news.user }}</b></router-link
                        >
                    </small>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["news"]),
    },
    created() {
        this.$store.dispatch("FETCH_NEWS");
    },
};
</script>

<style scoped>
.news-list {
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
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
