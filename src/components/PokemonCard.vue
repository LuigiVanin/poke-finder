<script lang="ts" setup>
import type { Pokemon } from "../types/pokemons.types";
import Card from "./Card.vue";

interface CardProps {
    pokemon: Pokemon;
}

const props = defineProps<CardProps>();
</script>

<template>
    <Card>
        <header>
            <h1>
                {{ pokemon.name }}
            </h1>
        </header>
    </Card>
</template>

<style lang="scss" scoped></style>
