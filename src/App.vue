<!-- script-section -->
<script>
// import-codes-section
import { store } from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppSearch,
    AppMain
  },
  data() {
    return {
      // store-data
      store
    }
  },
  methods: {
    search() {

      // api-data-params
      const apiParams = {
        api_key: this.store.apiKey,
        query: this.store.query
      }

      // get-methods
      this.getMoviesResult(apiParams);
      this.getSeriesResult(apiParams);
    },

    getMoviesResult(apiParams) {
      axios
      //dinamic-insert
      .get(`${this.store.apiURL}/movie`, {
          params: apiParams //api
          // apiMoviURL: "https://api.themoviedb.org/3/search/movie"
        })

        // store the movies data obtained
        .then((resp) => {
          this.store.movies = resp.data.results;
        })

        .catch(err => {
          console.log(err);
        })
    },

    getSeriesResult(apiParams) {
      axios
      //dinamic-insert
      .get(`${this.store.apiURL}/tv`, {
        params: apiParams //api
        // apiSerieURL: "https://api.themoviedb.org/3/search/tv"
      })

      // store the series data obtained
      .then((resp) => {
        this.store.series = resp.data.results;
      })

      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

  <!-- container -->
  <div class="container">
    <AppSearch @search="search" />
    <AppMain />
  </div>
  <!-- /container -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss">
@use "./styles/general.scss" as *;
</style>
<!-- /style-section -->