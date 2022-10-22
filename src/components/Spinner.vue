<script setup lang="ts"></script>

<template>
    <div class="loader">
        <span> </span>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

.loader {
    width: 100%;
    @include flex-center;
    height: 200px;
    span {
        width: 45px;
        height: 45px;
        border: solid 5px transparent;
        border-left-color: $main-green;
        border-bottom-color: $soft-green;
        border-radius: 50%;
        animation: 0.5s linear infinite spin;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
