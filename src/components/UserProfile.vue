<template>
    <section class="user-container">
        <div><i class="fa-solid fa-user"></i></div>
        <div class="user-description">
            <slot name="name"></slot>
            <div class="time">
                <slot name="time"></slot>
            </div>
            <slot name="karma"></slot>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}
.fa-user {
    font-size: 2.2rem;
}
.user-description {
    padding: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
