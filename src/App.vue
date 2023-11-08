<template>
    <div id="app">
        <ToolBar />
        <SpinnerComponent :loading="loadingStatus" />
        <transition name="page">
            <router-view class="main-container"></router-view>
        </transition>
    </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import bus from "@/utils/bus";

export default {
    name: "App",
    components: {
        ToolBar,
        SpinnerComponent,
    },
    data() {
        return {
            loadingStatus: false,
        };
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        },
    },
    created() {
        bus.$on("start:spinner", this.startSpinner);
        bus.$on("end:spinner", this.endSpinner);
    },
    beforeDestroy() {
        bus.$off("start:spinner", this.startSpinner);
        bus.$off("end:spinner", this.endSpinner);
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
a {
    color: #34495e;
    text-decoration: unset;
}
a:hover {
    color: #42b883;
    text-decoration: underline;
}

/* page-transition-animation */
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
