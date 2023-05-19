<template>
  <router-view />
</template>

<script setup>
import "./assets/main.css"
import MainPage from "./view/MainPage.vue"

defineExpose({
  MainPage,
});
</script>
