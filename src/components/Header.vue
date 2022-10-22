<script lang="ts" setup></script>

<template>
    <header>
        <div class="wrapper">
            <h1>Poke Finder</h1>

            <slot> random </slot>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "../styles/theme";
@import "../styles/mixins";

header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background: white;
    box-shadow: 0 -1px 6px 0px rgba(0, 0, 0, 0.205);
    .wrapper {
        @include flex($justify: space-between);
        padding-inline: 15px;
        height: 100%;

        h1 {
            @include title-font();
            font-weight: bold;
            font-size: 19px;
            color: $main-green;
        }
    }
}
@media (max-width: 600px) {
    header {
        button,
        .back {
            width: 40px;
        }
        button {
            padding-left: 0;
            h2 {
                display: none;
            }
        }
        .back {
            display: none;
        }
        button.menu {
            width: 40px;
            @include flex-center();
        }
    }
}
@media (min-width: 980px) {
    header {
        .wrapper {
            width: 980px;
            margin-inline: auto;
        }
    }
}
</style>
