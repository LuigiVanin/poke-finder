<script setup lang="ts">
import { defineProps } from "vue";
import { Stats } from "../types/pokemons.types";

interface Props {
    stats: Stats[];
    toggle: boolean;
}

const { stats } = defineProps<Props>();

const defineIcon = (name: string) => {
    switch (name) {
        case "hp":
            return "heart";
        case "attack":
            return "hammer";
        case "special-attack":
            return "flash";
        case "defense":
            return "shield-half";
        case "speed":
            return "speedometer";
        case "special-defense":
            return "shield";
        default:
            return "shield";
    }
};
</script>

<template>
    <div :class="['content', !toggle ? 'collapse' : '']">
        <ul ref="table">
            <li v-for="(item, idx) in stats">
                <div class="left">
                    {{ item.stat.name }}
                    <ion-icon :name="defineIcon(item.stat.name)"></ion-icon>
                </div>
                <div class="right">
                    {{ item.base_stat }}
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

.content {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    background: rgb(219, 219, 219);
    position: relative;
    overflow-y: hidden;
    transition: all 0.5s ease-in-out;
    padding: 10px;

    &.collapse {
        height: 0px;
        padding-block: 0;
    }

    ul {
        position: absolute;
        inset: 0;
        padding: 10px;
        @include flex(center, space-between, column, 0);
        li {
            width: 100%;
            font-size: 19px;
            display: flex;
            border-bottom: 1px $dark-gray solid;
            flex: 1;

            &:last-child {
                border-bottom: none;
            }

            .right,
            .left {
                /* flex: 1; */
                @include flex(center, start, row, 2px);
                text-transform: capitalize;
                height: 100%;
                padding-inline: 3%;
                &:first-child {
                    flex: 0.8;
                }
                &:last-child {
                    flex: 0.2;
                }
            }

            .right {
                text-align: center;
                font-weight: 800;
                font-size: 23px;
                border-left: 1px black solid;
            }
        }
    }
}
</style>
