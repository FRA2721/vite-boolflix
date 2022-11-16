<!-- script-section -->
<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            flags: ['en', 'it']
        }
    },
    computed: {

        // card-title-request
        getTitleRequest() {
            return this.item.title ? this.item.title : this.item.name;
        },

        // card-original-title-request
        getOriginalTitleRequest() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },

        // card-image-path-request
        getImagePathRequest() {
            return this.item.poster_path ? `http://image.tmdb.org/t/p/w342/${this.item.poster_path}` : this.getImgUrlRequest('no-image.jpg');
        },

        // card-star-request
        getStarsNumberRequest() {
            return Math.ceil(this.item.vote_average / 2);
        },

        // card-original-title-request
        getOriginalTitleRequest() {
            return this.item.overview ? this.item.overview : this.item.overview;
        },

        // card-overview-request
        getOverviewRequest(imgName) {
            return this.item.overview ? this.item.overview : this.item.overview;
        }
    },
    methods: {

        // card-image-request
        getImgUrlRequest(imgName) {
            return new URL(`../assets/images/${imgName}`, import.meta.url).href;
        }
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- card-container -->
    <div class="main-card">
        <div class="main-card__inner">

            <!-- front-card -->
            <div class="main-card__front">
                <img :src="getImagePathRequest" alt="film picture">
            </div>
            <!-- /front-card -->

            <!-- back-card -->
            <div class="main-card__back">

                <!-- description-section -->
                <h3>Title: {{ getTitleRequest }}</h3>
                <p>Original title: {{ getOriginalTitleRequest }}</p>
                <p>Overview: {{ getOverviewRequest }}</p>
                <!-- /description-section -->

                <!-- flags-section -->
                <div class="flags">
                    <img v-if="flags.includes(item.original_language)"
                        :src="getImgUrlRequest(`${item.original_language}.png`)">
                    <p v-else>Original anguage: {{ item.original_language }}</p>
                </div>
                <!-- /flags-section -->

                <!-- card-vote -->
                <div>
                    <i v-for="n in 5" :key="n" :class="n <= getStarsNumberRequest ? 'fa-solid' : 'fa-regular'" class="fa-star" style="color: yellow;"></i>
                </div>
                <!-- /card-vote -->

            </div>
            <!-- /back-card -->
        </div>
    </div>
    <!-- /card-container -->
</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss" scoped>
@use "./styles/partials/variables" as *;

// main-card-3d-effect
.main-card {
    height: 100%;
    perspective: 1000px;

    &__inner {
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1s;
        border: 3px solid white;
        border-radius: 10px;
    }

    &:hover &__inner {
        transform: rotateY(180deg);
        border: 3px solid $border;
        border-radius: 10px;
    }

    &__front, &__back {
        backface-visibility: hidden;
    }

    &__front {
        height: 100%;

        img {
            height: 100%;
        }
    }

    &__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: $header-background;
        color: $text;
        padding: 1rem;
        transform: rotateY(180deg);

        .flags {
            width: 50px;
        }

        >* {
            margin-bottom: .5rem;
        }
    }
}
</style>
<!-- /style-section -->