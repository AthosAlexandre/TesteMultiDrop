<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import RequestRefundView from './views/request-refund/RequestRefundView.vue';


</script>

<template>
 <!--  <RouterLink to="/">Home</RouterLink>
  <RouterLink :to="{ name: 'verify' }">Verify</RouterLink> -->
  <router-view />
</template>

<style scoped></style>
