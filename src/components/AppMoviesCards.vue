<!-- script-section -->
<script>
export default{
    name:"AppMoviesCards",
    props: {
        movie: Object
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- movies-container -->
    <div class="movies-container">

        <!-- cards-description -->
        <h2>Title: {{ movie.name }}</h2>
        <h3>Original title: {{ movie.original_name }}</h3>
        <p>Rank: {{ movie.vote_average }}</p>
        <p>Language: {{ movie.original_language }}</p>
        <p>Overview: {{ movie.overview }}</p>
        <h4>Release data: {{ movie.release_date }}</h4>
        <!-- /cards-description -->

    </div>
    <!-- /movies-container -->

</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->