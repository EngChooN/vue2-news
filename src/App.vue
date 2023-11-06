<template>
    <div id="app">
        <ToolBar />
        <transition name="page">
            <router-view class="main-container"></router-view>
        </transition>
    </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
    name: "App",
    components: {
        ToolBar,
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
