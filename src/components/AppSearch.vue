<!-- script-section -->
<script>
import { store } from "../store";

export default {
    // name
    name: "AppSearch",
    data() {
        return {
            // store-code
            store
        }
    }
}
</script>
<!-- /script-section -->

<!-- template-section -->
<template>

    <!-- search-container -->
    <div id="search">
        <input type="search" v-model="store.query">
        <button @click="$emit('search')">Search</button>
    </div>
    <!-- /search-container -->
    
</template>
<!-- /tempalte-section -->

<!-- style-section -->
<style lang="scss" scoped>
</style>
<!-- /style-section -->