<script lang="ts" setup></script>

<template>
    <div class="card">
        <slot> </slot>
    </div>
</template>

<style lang="scss">
@import "../styles/mixins";
@import "../styles/theme";

.card {
    width: 100%;
    box-shadow: 0px 0px 10px -2px #00000065;
    padding: 20px;
    border-radius: 7px;
}
</style>
