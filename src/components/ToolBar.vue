<template>
    <header>
        <router-link to="/news">News</router-link>
        <span class="divideLine">|</span>
        <router-link to="/ask">Ask</router-link>
        <span class="divideLine">|</span>
        <router-link to="/jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
    background-color: #42b883;
    color: white;
    font-size: 20px;
    display: flex;
    padding: 20px;
}

header span {
    margin-left: 10px;
    margin-right: 10px;
}

header a {
    color: white;
    text-decoration: unset;
}

header .router-link-exact-active {
    color: #35495e;
    text-decoration: underline;
}
</style>
