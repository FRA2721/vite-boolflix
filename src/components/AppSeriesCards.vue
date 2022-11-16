<!-- script-section -->
<script>
export default{
    name: "AppSeriesCards",
    props: {
        serie: Object
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- series-container -->
    <div class="series-container">

        <!-- cards-description -->
        <h2>Title: {{ serie.name }}</h2>
        <h3>Original title: {{ serie.original_name }}</h3>
        <p>Rank: {{ serie.vote_average }}</p>
        <p>Language: {{ serie.original_language }}</p>
        <p>Overview: {{ serie.overview }}</p>
        <h4>Release data: {{ serie.release_date }}</h4>
        <!-- /cards-description -->

    </div>
    <!-- /series-container -->

</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->