<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import PokemonSelector from "./components/PokemonSelector.vue";
import PokemonCard from "./components/PokemonCard.vue";
import { useGetPokemon } from "./hooks/api/useGetPokemon";
const pokemonName = ref("");

const { getPokemon, loading, pokemonData, error } = useGetPokemon();

const selectedPokemon = ref(0);

const changeSelectedPokemon = (idx: number) => {
    selectedPokemon.value = idx;
};

const onSubmit = async (event: Event) => {
    event.preventDefault();
    selectedPokemon.value = 0;
    await getPokemon(pokemonName.value);
};
</script>

<template>
    <Header />
    <main>
        <h1 class="title">Poke Finder - Busca de Pokemons por "nome"!</h1>

        <form @submit="onSubmit">
            <div class="input-wrapper">
                <input
                    type="text"
                    placeholder="Buscar Pokemon..."
                    v-model="pokemonName"
                />
            </div>
            <Button>
                Buscar
                <ion-icon name="search"></ion-icon>
            </Button>
        </form>

        <div class="container">
            <div class="wrapper" v-if="!pokemonData || !!error">
                <h1>Nenhum Pokemon Econtrado!</h1>
                <ion-icon name="sad-outline"></ion-icon>
            </div>
            <div v-else class="container__col">
                <PokemonSelector
                    :evolutions="pokemonData"
                    :selected-idx="selectedPokemon"
                    :select-action="changeSelectedPokemon"
                ></PokemonSelector>
                <PokemonCard :pokemon="pokemonData[selectedPokemon]" />
                <!-- {{ pokemonData.map((pokemon) => pokemon.name) }} -->
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@import "./styles/reset";
@import "./styles/globals";

main {
    @include full-screen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 90%;
    padding-top: 70px;
    margin-inline: auto;
    gap: 20px;
    .container {
        width: 100%;
        /* background: red; */
        /* @include flex(center, start, column); */
        display: flex;
        flex-direction: column;
    }

    h1.title {
        @include font;
        font-weight: 700;
        text-align: center;
        font-size: 26px;
        color: $main-green;
        margin-block: 35px;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .wrapper {
        & > h1,
        & > ion-icon {
            text-align: center;
            font-size: 26px;
            color: $soft-gray;
            @include flex-center;
            margin-top: 10px;
            margin-inline: auto;
        }
    }
}

.input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    @include input-default();
    input {
        @include font();
        color: $dark-gray;
        width: 100%;
        background: transparent;
        flex: 1;
        outline: none;
        border: none;
        color: rgb(17, 17, 17);
        padding-inline: 20px;
        padding-block: 12px;
        font-size: 19px;
        line-height: 0px;
    }
}
</style>
