<!-- script-section -->
<script>

// import-store-&-other-vue-filles
import { store } from "./store";
import axios from "axios";
import AppSearchBar from "./components/AppSearchBar.vue";
import AppMainCode from "./components/AppMainCode.vue";

export default {
  components: {
    AppSearchBar,
    AppMainCode
  },
  data() {
    return {
      // store-date
      store
    }
  },
  methods: {

    // search-method
    search() {
      const apiParams = {

        // api-query-data
        api_key: this.store.apiKey, //store-my-api-key-data
        query: this.store.searchKey //store-user-input-(query)-data
      }

      this.getMoviesRequest(apiParams);
      this.getSeriesRequest(apiParams);
    },

    // movies-request
    getMoviesRequest(apiParams) {
      axios
        // dynamic-insert
        .get(`${this.store.apiURL}/movie`, {
          params: apiParams //api
          // apiMoviURL: "https://api.themoviedb.org/3/search/movie"
        })

        // store-the-movies-data-obtained
        .then((resp) => {
          this.store.movies = resp.data.results;
        })

        .catch(err => {
          console.log(err);
        })
    },

    // series-request
    getSeriesRequest(apiParams) {
      axios
      // dynamic-insert
        .get(`${this.store.apiURL}/tv`, {
          params: apiParams //api
          // apiSerieURL: "https://api.themoviedb.org/3/search/tv"
        })

        // store-the-series-data-obtained
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

<!-- tempalte-section -->
<template>

  <div class="program" >
    <AppSearchBar @search="search" />
    <!-- main-section -->
    <main>
      <AppMainCode />
    </main>
    <!-- /main-section -->
  </div>

</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss">

// use-variables-&-generals
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;

// main-section-formatting
main {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: $main-background;
  overflow-y: auto;
}
</style>
<!-- /style-section -->