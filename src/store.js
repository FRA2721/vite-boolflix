import { reactive } from "vue";

// store-code
export const store = reactive({
    // api-data(try on postman)
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",

    paramsApi:{
        language: "en-EN", 
        api_key: "99bc2a76f74b68cf2daecd49f771ef6e", //import-my-apy-key
        query: "",
    },

    loader: false,
    movies: [],
    series: [],
})