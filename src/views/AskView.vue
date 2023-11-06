<template>
    <section>
        <ul class="ask-list">
            <li
                class="post"
                v-for="(ask, index) in this.$store.state.ask"
                :key="index"
            >
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ ask.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="ask-title">
                        <router-link :to="`item/${ask.id}`"
                            >{{ ask.title }}
                        </router-link>
                    </p>
                    <small class="link-text"
                        >{{ ask.time_ago }} by
                        <router-link :to="`/user/${ask.user}`"
                            ><b>{{ ask.user }}</b></router-link
                        ></small
                    >
                </div>
            </li>
        </ul>
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

<style scoped>
.ask-list {
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
.ask-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
