<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '../../components/Header/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="page">
    <RouterView />
  </main>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 65px);
  background: #FAFAFA;
	padding-top: 65px;
}
</style>
