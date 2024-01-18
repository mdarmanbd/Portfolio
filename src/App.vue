<script setup>
import MasterLayout from './components/MasterLayout.vue'
</script>

<template>
  <div class="w-full">
    <RouterView></RouterView>
    <MasterLayout />

   

  </div>


</template>

<style scoped>
/* html.dark {
  color-scheme: dark;
}

body{
  @apply dark:bg-slate-200
} */

</style>
