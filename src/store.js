import { reactive } from "vue";

export const store = reactive({
    // apiMoviURL: "https://api.themoviedb.org/3/search/movie",
    // apiSerieURL: "https://api.themoviedb.org/3/search/tv",

    // api-data
    apiURL: "https://api.themoviedb.org/3/search",
    apiKey: "99bc2a76f74b68cf2daecd49f771ef6e", //my-private-key
    searchKey: "", //user-input
    loading: false,

    // movies-series-arrays
    movies: [],
    series: [],
});

