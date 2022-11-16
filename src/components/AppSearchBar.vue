<!-- script-section -->
<script>

// import-store-code
import { store } from '../store';

export default{
    // name
    name: "AppSearchBar",
    data(){
        return {
            // store
            store
        }
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- container -->
    <div class="search-container">
        <label for="user-input">
            <input type="text" v-model="store.paramsApi.query" id="user-input" placeholder="Search film or tv series">
        </label>

        <button @click="$emit('search')" class="btn">Search</button>
    </div>
    <!-- /container -->

</template>
<!-- /template-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->