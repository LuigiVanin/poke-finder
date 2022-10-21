<template>
    <header>
        <div class="wrapper"></div>
    </header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
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
    /* padding-inline: 25%; */
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
    .back {
        width: 125px;
    }
    .icon {
        width: 40px;
        height: 35px;
        fill: $main-green;
        border-radius: 5px;
        padding-inline: 5px;
        padding-block: 2px;
        transition: 0.2s ease-in-out;
        &:hover {
            background: rgb(238, 238, 238);
            cursor: pointer;
        }
    }
    button.menu {
        display: none;
    }
    button {
        @include flex-center($gap: 0px);
        @include reset();
        border-radius: 5px;
        background: $soft-green;
        /* width: 125px; */
        padding-left: 10px;
        /* padding-block: 6px; */
        font-size: 19px;
        font-weight: bold;
        color: $dark-gray;
        gap: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
            background: $main-green;
            color: white;
            .icon {
                fill: white;
                background: transparent;
            }
        }
        .icon {
            height: 35px;
            width: 35px;
            fill: $dark-gray;
        }
        /* ion-icon {
            transition: 0.2s ease-in-out;
            font-size: 26px;
            padding: 0px;
            color: $dark-gray;
            &:hover {
                background: transparent;
            }
        } */
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
