<template>
    <div id="main-app">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/child-app-1">Child App 1</RouterLink>
        <RouterLink to="/child-app-2">Child App 2</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name: 'App',
    components: { RouterLink, RouterView },
};
</script>

<style scoped>
a {
    margin: 0 1em;
}

#child-container {
    min-width: 100px;
    min-height: 100px;
    border: 1px solid red;
}
</style>
