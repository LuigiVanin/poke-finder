<script lang="ts" setup>
import { defineProps } from "vue";
import { Sprites } from "../types/pokemons.types";

interface Props {
    sprites: Sprites;
    color: "normal" | "shiny";
}

const { sprites, color } = defineProps<Props>();

const defineColor = (sprites: Sprites, color: "normal" | "shiny") => {
    if (color === "normal") {
        return sprites.front_default;
    } else if (color === "shiny") {
        return sprites.front_shiny;
    }
};
</script>

<template>
    <div class="card__image">
        <div class="card__image__background"></div>
        <img :src="defineColor(sprites, color)" alt="" />
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

.card__image {
    width: 100%;
    height: 150px;
    @include flex-center;
    position: relative;
    margin-bottom: 15px;

    .card__image__background {
        content: 0;
        position: absolute;
        height: 150px;
        width: 150px;
        /* inset: 0; */
        border-radius: 50%;
        background: $main-green;
        z-index: 0;
        animation: fade-in 0.5s ease-in-out;
    }
    img {
        height: 140px;
        z-index: 10;
    }
}
@keyframes fade-in {
    0% {
        height: 0px;
        width: 0px;
    }
    100% {
        height: 150px;
        width: 150px;
    }
}
</style>
