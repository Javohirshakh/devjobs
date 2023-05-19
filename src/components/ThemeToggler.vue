<template>
    <div class="h-6 flex items-center">
      <img src="../assets/sun.svg" alt="sun icon" class="w-6 h-6 mr-2 select-none" />
      <label class="switch-label inline-block cursor-pointer w-10 h-6 relative" for="darkModeToggle">
        <input
          class="switch-checkbox opacity-0 w-0 h-0"
          type="checkbox"
          id="darkModeToggle"
          v-model="isDarkMode"
          @change="toggleDarkMode"
        />
        <div class="switch-slider absolute w-5 h-5"></div>
      </label>
      <img src="../assets/moon.svg" alt="moon icon" class="w-6 h-6 mr-2 select-none" />
    </div>
  </template>


<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.isDarkMode) {
        // Enable dark mode
        this.enableDarkMode();
      } else {
        // Enable light mode
        this.enableLightMode();
      }
    },
    enableDarkMode() {
      // Save theme to localStorage
      localStorage.setItem("theme", "dark");
      // Add dark mode class to the body element
      document.body.classList.add("dark");
    },
    enableLightMode() {
      // Save theme to localStorage
      localStorage.setItem("theme", "light");
      // Remove dark mode class from the body element
      document.body.classList.remove("dark");
    },
  },
  mounted() {
    // Get default theme from localStorage, or default to light if not found
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDarkMode = true;
      this.enableDarkMode();
    } else {
      this.isDarkMode = false;
      this.enableLightMode();
    }
  },
};
</script>