<template>
  <div class="relative overflow-hidden">
    <div
      class="space-y-3 rounded-md bg-primary px-8 pb-5 pt-2 text-xs text-white shadow"
    >
      <div class="flex justify-between">
        <h4 class="pt-2 text-xl font-normal">{{ title }}</h4>
      </div>
      <p class="mr-6 w-4/5 text-xs tracking-wide">{{ description }}</p>
      <WhiteButton :buttonText="buttonText" />
    </div>
    <div class="absolute inset-y-0 right-0">
      <img class="" :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import WhiteButton from "./WhiteButton.vue";
export default {
  name: "CampaignBanner",
  components: {
    WhiteButton,
  },
  props: ["title", "description", "buttonText", "image"],
};
</script>

<style lang="scss" scoped></style>
