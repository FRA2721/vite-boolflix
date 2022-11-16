<!-- script-section -->
<script>
export default {
    // anme
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            langFlag: ['en', 'it'] //avaible- languages(flags)
        }
    },
    computed: {

        // get-title
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
            // to get the title on the description
        },

        // get-original-title
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
            // to get the original title on the description
        }
    },

    // get-flag-imgs
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/imgs/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>
<!-- /script-section -->

<!-- tempalte-section -->
<template>

    <!-- container-for-cards-description -->
    <div id="card-description-container">

        <!-- title-description-section -->
        <h3>Title: {{ getTitle }}</h3>
        <p>Original Title: {{ getOriginalTitle }}</p>
        <!-- title-description-section -->

        <!-- flag-description-section -->
        <div id="flag">
            <img v-if="langFlag.includes(item.original_language)" :src="getImgUrl(item.original_language)">
            <p v-else>Original language: {{ item.original_language }}</p>
        </div>
        <!-- /flag-description-section -->

        <!-- vote-description-section -->
        <div id="vote">
            <p>Vote: {{ item.vote_average }}</p>

            <!-- star-icon -->
            <i class="fa-solid fa-star"></i>
            <span v-for="number in 5">0</span>
        </div>
        <!-- /vote-description-section -->

    </div>
    <!-- /container-for-cards-description -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->