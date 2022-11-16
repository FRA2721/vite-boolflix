<!-- script-section -->
<script>
import { store } from '../store';
import AppMoviesCards from './AppMoviesCards.vue';
import AppSeriesCards from './AppSeriesCards.vue';
export default{
    // name
    name: "AppMoviesSeriesList",
    data(){
        return{
            // store-code
            store
        }
    },
    components: {
        AppMoviesCards,
        AppSeriesCards
    }
}
</script>
<!-- /script-section -->

<!-- tempalte-section -->
<template>

    <!-- movies-&-series-lists -->
    <div class="list">

        <!-- movies -->
        <div class="movies-list">
            <h2>Movies</h2>

            <ul>
                <!-- from-api-result-test -->
                <!-- create a list with FOR loop for movie using results object array (list-items) -->
                <li v-for="movie in store.resultsMovies" :key="movie.id">
                    <AppMoviesCards :movie="movie"/>
                </li>
            </ul>

        </div>
        <!-- /movies -->

        <!-- series -->
        <div class="series-list">
            <h2>Series</h2>

            <ul>
                <!-- from-api-result-test -->
                <!-- create a list with FOR loop for series using results object array (list-items) -->
                <li v-for="serie in store.resultsSeries" :key="serie.id">
                    <AppSeriesCards :serie="serie"/>
                </li>
            </ul>

        </div>
        <!-- /series -->

    </div>
    <!-- /movies-&-series-lists -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->