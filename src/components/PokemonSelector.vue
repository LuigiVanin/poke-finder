<script lang="ts" setup>
import { Pokemon } from "../types/pokemons.types";

interface SelectorProps {
    evolutions: Pokemon[];
    selectedIdx: number;
    selectAction: (pokemonIdx: number) => void;
}

const props = defineProps<SelectorProps>();
</script>

<template>
    <section class="selection">
        <template v-for="(pokemon, idx) in evolutions">
            <div
                class="pokemon"
                :class="idx == selectedIdx ? 'selected' : ''"
                @click="() => selectAction(idx)"
            >
                <!-- {{ pokemon.name }} - {{ idx }} -->
                <img :src="pokemon.sprites.front_default" alt="teste" />

                <!-- <ion-icon name="chevron-forward-outline"></ion-icon> -->
            </div>
            <ion-icon
                v-show="idx < evolutions.length - 1"
                name="chevron-forward-outline"
            ></ion-icon>
        </template>
    </section>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

section {
    width: 100%;
    height: 75px;
    /* background: yellow; */

    @include flex(center, center, row, 10px);
    /* padding-inline: 20%; */
    margin-bottom: 20px;

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

    ion-icon {
        font-size: 29px;
        color: $main-green;
    }
}

@media (max-width: 380px) {
    section {
        gap: 5px;
    }
}
</style>
