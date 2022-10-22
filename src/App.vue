<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import PokemonSelector from "./components/PokemonSelector.vue";
import PokemonCard from "./components/PokemonCard.vue";
import Spinner from "./components/Spinner.vue";
import { useGetPokemon } from "./hooks/api/useGetPokemon";

const { getPokemon, loading, pokemonData, error } = useGetPokemon();

const pokemonName = ref("");
const selectedPokemon = ref(0);

const changeSelectedPokemon = (idx: number) => {
    selectedPokemon.value = idx;
};

const searchPokemon = async (pokemon: string) => {
    selectedPokemon.value = 0;
    await getPokemon(pokemon);
    pokemonData.value?.forEach((pokemon, idx) => {
        if (
            pokemon.name === pokemonName.value ||
            pokemon.id === parseInt(pokemonName.value)
        ) {
            selectedPokemon.value = idx;
        }
    });
};

const searchRandomPokemon = async () => {
    const randomId = String(Math.ceil(Math.random() * 885));
    await searchPokemon(randomId);
    pokemonName.value = randomId;
};

const onSubmit = async (event: Event) => {
    event.preventDefault();
    searchPokemon(pokemonName.value.toLowerCase());
};
</script>

<template>
    <Header>
        <div class="btn" @click="searchRandomPokemon">Random</div>
    </Header>
    <main>
        <h1 class="title">Search Pokemons By its *name*</h1>

        <form @submit="onSubmit">
            <div class="input-wrapper">
                <input
                    type="text"
                    placeholder="Pokemon name..."
                    v-model="pokemonName"
                />
            </div>
            <Button>
                Search
                <ion-icon name="search"></ion-icon>
            </Button>
        </form>

        <div class="container">
            <Spinner v-if="loading" />
            <div class="wrapper" v-else-if="!pokemonData || !!error">
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
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "./styles/main.scss";

header .btn {
    background: rgb(231, 231, 231);
    font-size: 16px;
    padding-inline: 10px;
    padding-block: 10px;
    border-radius: 7px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 14px -1px #0000008e;
        background: $main-green;
        color: $background;
    }
}

@media (min-width: 720px) {
    main {
        width: calc(0.9 * 720px);
    }
}

@media (max-width: 380px) {
    main {
        width: 95%;

        form {
            gap: 7px;
        }
    }
}
</style>
