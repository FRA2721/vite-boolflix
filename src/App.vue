<!-- script-section -->
<script>

import axios from "axios";
import { store } from "./store";
import AppSearchBar from "./components/AppSearchBar.vue";
import AppMoviesSeriesLists from "./components/AppMoviesSeriesLists.vue";

export default{
  data(){
    return {
      // store-code
      store
    }
  },
  components: {
    AppSearchBar,
    AppMoviesSeriesLists
  },
  methods: {
    search(){
      // start-user-call
      console.log("Start call")
      this.store.loader = true;
      console.log(this.store.loader);
     
      // movies-user-search-call
      axios
        .get(this.store.apiMovieURL, { params: this.store.paramsApi })

        .then( (resp) => {
          this.store.resultMovies = resp.data.results;
          console.log(this.store.resultMovies, "Movie");
        })

        // error-movie
        .catch( (err) => {
          console.log( err);
        })

        // end-call
        .finally( () => {
          console.log("End movie call");
          // search
          console.log("Start serie call");
          
          // series-user-search-call
          axios
            .get(this.store.apiSeriesURL, { params: this.store.paramsApi })

            .then( (resp) => {
              this.store.resultSeries = resp.data.results;
              console.log(this.store.resultSeries, "Serie");
            })

            // error-serie
            .catch( (err) => {
              console.log( err);
            })

            // end-call
            .finally( () => {
              console.log("End serie call");
              this.store.loader = false;
              console.log(this.store.loader);
            })
        })
  
    }
  }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>
  <h1>Search</h1>
  <!-- header-section -->
  <header>
    <AppSearchBar @search="search"/>
  </header>
  <!-- /header-section -->

  <!-- main-section -->
  <main>
    <AppMoviesSeriesLists />
  </main>
  <!-- /main-section -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss">
</style>
<!-- /style-section -->