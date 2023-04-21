<script setup lang="ts">
import AuthorStats from '../components/HeroStats/AuthorStats.vue'
import AuthorsList from '../components/AuthorsList.vue'
</script>

<template>
  <div class="authors">
    <AuthorStats />
    <AuthorsList />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .authors {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
