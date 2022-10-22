<script lang="ts" setup>
import { StyleValue } from "vue";

interface ButtonProps {
    action?: (event: Event) => void;
    style?: StyleValue | undefined;
    selected?: "selected" | "disable" | undefined;
}

const props = defineProps<ButtonProps>();
</script>

<template>
    <button
        @click="props.action && props.action($event)"
        :style="style"
        :class="selected"
    >
        <slot> Clique Aqui! </slot>
    </button>
</template>

<style lang="scss">
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

    &:hover,
    &.selected {
        background: $main-green;
        color: $background;
    }

    &.disable,
    &.disable:hover {
        box-shadow: 0 0 0 0 black;
        background: $divisor-color;
        color: $dark-gray;
    }

    font-weight: 600;
    cursor: pointer;

    ion-icon {
        font-size: 23px;
        --ionicon-stroke-width: 46px;
    }
}

@media (max-width: 380px) {
    button {
        padding-inline: 9px;
        font-size: 17px;
        ion-icon {
            font-size: 19px;
            --ionicon-stroke-width: 46px;
        }
    }
}
</style>
