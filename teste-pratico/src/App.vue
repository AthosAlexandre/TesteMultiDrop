<script setup lang="ts">
import { RouterView } from 'vue-router';
import RequestRefundView from './views/request-refund/RequestRefundView.vue';
import HeaderComponent from './components/Header/HeaderComponent.vue';


</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style scoped></style>
