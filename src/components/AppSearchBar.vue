<!-- script-section -->
<script>

// import-store
import { store } from "../store";
export default {
    // naem
    name: "AppSearchBar",
    data() {
        return {
            // store-data
            store
        }
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- header-section -->
    <header class="search-bar">

        <!-- container -->
        <div class="main-container flex justify-between search-bar__inner">

            <!-- logo-section -->
            <div class="search-bar__logo">Movies & Series</div>
            <!-- /logo-section -->

            <!-- search-bar-section -->
            <div class="search-bar__search">
                <input type="search" v-model="store.searchKey" placeholder="Search movies and tv series">
                <button @click="$emit('search')">Search</button>
            </div>
            <!-- /search-bar-section -->

        </div>
        <!-- /container -->
    </header>
    <!-- /header-section -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.search-bar {
    height: 80px;
    background-color: $header-background;
    &__inner {
        height: 100%;
    }

    &__logo {
        font-size: 2rem;
        color: $voice-text;
    }

    &__search {
        display: flex;
        align-items: center;
    }

    button{
        border-radius: 50px;
        padding: .5em;
        cursor: pointer;
        color: $voice-text;
        transition-duration: 1s;

        &:hover{
            color: black;
            transform: scale(.9);
            border: 3px solid $border;
        }
    }

    input{
        width: 200px;
        color: $voice-text;
        border-style: none;
        border: 3px solid $border;
        border-radius: 50px;
        padding: .5em;
        transition-duration: 1s;

        &:hover{
            width: 250px;
        }
    }
}
</style>
<!-- /style-section -->