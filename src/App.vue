<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import { useGetPokemon } from "./hooks/api/useGetPokemon";
const pokemonName = ref("");

// const { action, loading } = useGetPokemon(false);

const { getPokemon, loading } = useGetPokemon();

const onSubmit = (event: Event) => {
    event.preventDefault();
    getPokemon(pokemonName.value);
};
</script>

<template>
    <Header />
    <main>
        <form @submit="onSubmit">
            <div class="input-wrapper">
                <input
                    type="text"
                    placeholder="Pesquisar Pokemon"
                    v-model="pokemonName"
                />
            </div>
            <button>Buscar</button>
        </form>
        {{ pokemonName }} - {{ loading }}
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
    justify-content: center;
    background: red;
    width: 80%;
    margin-inline: auto;

    form {
        width: 100%;
        display: flex;
        flex-direction: row;
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
        padding-block: 15px;
        font-size: 21px;
        line-height: 0px;
    }
}
</style>
