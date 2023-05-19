<template>
    <header class="h-40 flex">
        <div class="lg:container px-4 w-full xl:px-0 2xl:px-16 mx-auto flex justify-between mt-10">
            <a href="#" class="logo"><img src="../assets/devjobs.svg" alt="logo"></a>
            <ThemeToggler />
        </div>
    </header>
</template>

<script>
import ThemeToggler from "./ThemeToggler.vue"
  export default {
    components: {
        ThemeToggler
    },
  };
</script>