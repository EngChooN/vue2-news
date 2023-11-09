<template>
    <section>
        <ul class="list">
            <li class="post" v-for="(item, index) in listItems" :key="index">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="title">
                        <template v-if="item.domain">
                            <a :href="item.url">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <!-- 타이틀 아래 시간 및 등등의 영역(?) -->
                    <small class="link-text">
                        {{ item.time_ago }}
                        <router-link
                            v-if="item.user"
                            class="link-text"
                            :to="`/user/${item.user}`"
                        >
                            by <b>{{ item.user }} </b>
                        </router-link>
                        <template v-else>
                            <a
                                v-if="item.domain"
                                class="link-text"
                                :href="item.url"
                                >by <b>{{ item.domain }}</b></a
                            >
                        </template>
                    </small>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        },
    },
};
</script>

<style scoped>
.list {
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
.title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
