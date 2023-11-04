<template>
    <div id="app">
        <ToolBar />
        <router-view class="mainView"></router-view>
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
.mainView {
    padding: 10px 20px 10px 20px;
}
</style>
