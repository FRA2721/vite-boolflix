<!-- script-section -->
<script>
// import--vue-codes
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
    // name
    name: "AppMain",
    components: {
        AppCard
    },
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

    <!-- main-section -->
    <main>

        <!-- movies-section -->
        <section id="movies">
            <h2>Movies</h2>

            <!-- loop-dinamic-movie---array -->
            <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
        </section>
        <!-- /movies-section -->

        <!-- series-section -->
        <section id="series">
            <h2>TV series</h2>

            <!-- loop-dinamic-series---array -->
            <AppCard v-for="serie in store.series" :key="serie.id" :item="serie" />
        </section>
        <!-- /series-section -->

    </main>
    <!-- /main-section -->

</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->