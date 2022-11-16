<!-- script-section -->
<script>

// import-vue-file
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppMainCode",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>
<!-- /script-section -->

<!-- tempalte-section -->
<template>

    <!-- main-container-section -->
    <div class="main-container">

        <!-- movies-section -->
        <section>
            <h2>Movies</h2>
            <div class="main-row">
                <!-- movies-loop -->
                <div class="main-col" v-for="movie in store.movies" :key="movie.id">
                    <AppCard :item="movie" />
                </div>
                <!-- /movies-loop -->
            </div>
        </section>
        <!-- /movies-section -->

        <!-- tv-series-section -->
        <section>
            <h2>TV Series</h2>
            <div class="main-row">
                <!-- series-loop -->
                <div class="main-col" v-for="serie in store.series" :key="serie.id">
                    <AppCard :item="serie" />
                </div>
                <!-- /series-loop -->
            </div>
        </section>
        <!-- /tv-series-section -->

    </div>
    <!-- /main-container-section -->
    
</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss" scoped>
@use "./styles/partials/variables" as *;
section {

    // tipography
    h2 {
        font-size: 2rem;
        margin-bottom: 1em;
        color: $voice-text;
    }
}

// main-row-formatting-section
.main-row {
    display: flex;
    flex-wrap: wrap;

    // columns-formatting-section
    .main-col {
        width: calc(100% / 6 - 10px);
        margin-left: 3px;
        margin-right: 3px;
        margin-bottom: 1rem;
    }
}
</style>
<!-- /style-section -->