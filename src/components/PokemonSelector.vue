<script lang="ts" setup>
import { Pokemon } from "../types/pokemons.types";

interface SelectorProps {
    evolutions: Pokemon[];
    selectedIdx?: number;
    selectAction: (pokemonIdx: number) => void;
}

const props = defineProps<SelectorProps>();
</script>

<template>
    <section class="selection">
        <div
            v-for="(pokemon, idx) in evolutions"
            class="pokemon"
            :class="idx == selectedIdx ? 'selected' : ''"
            @click="() => selectAction(idx)"
        >
            <!-- {{ pokemon.name }} - {{ idx }} -->
            <img :src="pokemon.sprites.front_default" alt="teste" />

            <!-- <ion-icon name="chevron-forward-outline"></ion-icon> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

section {
    width: 100%;
    height: 75px;
    /* background: yellow; */

    @include flex(center, space-around, row);
    padding-inline: 20%;

    .pokemon {
        height: 75px;
        width: 75px;
        @include flex-center;
        background: $divisor-color;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &.selected {
            background: $main-green;
        }

        img {
            height: 65px;
        }
    }
}
</style>
