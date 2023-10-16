<script setup lang="ts">
  import NavBar from '@/components/Layout/navigationBar.vue'
</script>
<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView ></RouterView>
  </div>
</template>

<style>
@import 'C:\Users\ashutosh.rai\Desktop\Noteball\Composition-api_noteball\node_modules\bulma\css\bulma.min.css';
.container{
  max-width: 90%;
}
</style>