<script lang="ts" setup>
interface ButtonProps {
    action?: (event: Event) => void;
}

const props = defineProps<ButtonProps>();
</script>

<template>
    <button @click="props.action && props.action($event)">
        <slot> Clique Aqui! </slot>
    </button>
</template>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/theme";

button {
    @include reset;
    @include font;
    @include flex-center;
    padding-inline: 15px;
    font-size: 19px;
    @include input-default();

    background: $soft-green;
    color: $dark-gray;

    &:hover {
        /* border-radius: 27px; */
        background: $main-green;
        color: $background;
    }

    /* color: $background; */
    font-weight: 600;
    cursor: pointer;

    ion-icon {
        /* color: black; */
        font-size: 23px;
        --ionicon-stroke-width: 46px;
    }
}
</style>
