<template>
  <HomeHeader />
  <HomeSidebar />
  <div class="min-h-screen bg-gray-100"><router-view></router-view></div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSidebar from "./components/HomeSidebar.vue";
import "./assets/tailwind.css";

export default {
  name: "App",
  components: {
    HomeHeader,
    HomeSidebar,
  },
};
</script>
