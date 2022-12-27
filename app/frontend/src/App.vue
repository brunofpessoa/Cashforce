<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <img src='' alt='cashforce logo' />

        <nav>
          <RouterLink to="/">Notas Fiscais</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

</style>
