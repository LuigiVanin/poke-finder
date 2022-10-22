<script lang="ts" setup>
import { ref } from "vue";
import type { Pokemon } from "../types/pokemons.types";
import Card from "./Card.vue";
import Button from "./Button.vue";
import PokemonImage from "./PokemonImage.vue";
import PokemonStatsTable from "./PokemonStatsTable.vue";

interface CardProps {
    pokemon: Pokemon;
}

const { pokemon } = defineProps<CardProps>();
const buttonStyle = {
    height: "100%",
};

const pokemonColor = ref<"normal" | "shiny">("normal");
const toggleStats = ref(false);

const change = (type: "normal" | "shiny") => {
    pokemonColor.value = type;
    console.log(pokemonColor.value);
};
</script>

<template>
    <Card>
        <header>
            <h1>
                {{ pokemon.name }}
                <span
                    >({{
                        pokemon.types.map((type) => type.type.name).join(" | ")
                    }})</span
                >
            </h1>

            <ul>
                <Button
                    :style="buttonStyle"
                    @click="change('normal')"
                    :selected="
                        pokemonColor === 'normal' ? 'selected' : 'disable'
                    "
                    >normal
                </Button>
                <Button
                    :style="buttonStyle"
                    @click="change('shiny')"
                    :selected="
                        pokemonColor === 'shiny' ? 'selected' : 'disable'
                    "
                    >shiny</Button
                >
            </ul>
        </header>
        <PokemonImage :color="pokemonColor" :sprites="pokemon.sprites" />
        <main>
            <h1
                @click="
                    () => {
                        toggleStats = !toggleStats;
                    }
                "
            >
                Stats
                <ion-icon
                    name="chevron-down-outline"
                    :class="toggleStats === true ? 'rotate' : 'normal'"
                ></ion-icon>
            </h1>
            <PokemonStatsTable :stats="pokemon.stats" :toggle="toggleStats" />
        </main>
    </Card>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

header {
    h1 {
        color: $dark-gray;
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 600;
        /* margin-bottom: 10px; */

        & > span {
            color: $soft-gray;
            font-size: large;
            font-weight: 800;
        }
    }

    ul {
        height: 50px;
        margin-block: 15px;
        @include flex(center, center, row, 15px);
    }
}

main {
    @include flex-center(column, 15px);
    & > h1 {
        background: $divisor-color;
        height: 40px;
        width: 125px;
        @include flex-center;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;
        font-size: 19px;
        ion-icon {
            font-size: 29px;
            visibility: visible;
            transition: all 0.5s ease-in-out;
            &.normal {
                transform: rotateZ(0deg);
            }
            &.rotate {
                transform: rotateZ(180deg);
            }
        }
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
