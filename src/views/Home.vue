<template>
  <div class="flex flex-1 flex-col md:pl-64">
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto max-w-3xl space-y-5 px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div
            :class="[
              close ? 'hidden' : 'flex',
              ' space-x-2 rounded-md bg-gray-900 p-3 text-xs text-white',
            ]"
          >
            <div
              class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            >
              <p>
                Give your business time to grow. Get Shopify monthly or select a
                one-year, two-year, or three-year plan for savings of up to 25%.
              </p>
              <Button class="w-max" Button="Select a plan" />
            </div>
            <div>
              <button @click="close = true" class="z-10 h-4 w-4">
                <XIcon class="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <InfoCard
            v-for="item in infoCard"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :buttonText="item.buttonText"
          />
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import Button from "../components/Button.vue";
import InfoCard from "../components/InfoCard.vue";

const infoCard = [
  {
    title: "Join The Future of Commerce Live Digital Event",
    description:
      "Hear research from our global survey of 12,000 consumers and get practical tips for succeeding in 2022. Sessions for the Americas, Europe, and Asia Pacific coming Feb 15th, 16th, and 24th.",
    buttonText: "Register Now",
  },
  {
    title: "Free Headshots for Entrepreneurs at Shopify NYC",
    description:
      "Come join us at Shopify NYC to get your free headshots in our on-site studio, and meet the Shopify NYC team of Community Managers.",
    buttonText: "Reserve your spot",
  },
  {
    title: "Get to know Shopify with guided video tutorialsC",
    description:
      "Keep learning with new and upcoming videos by subscribing to the Shopify Help Center YouTube Channel.",
    buttonText: "Explore YouTube channel",
  },
  {
    title: "Join The Future of Commerce Live Digital Event",
    description:
      "Hear research from our global survey of 12,000 consumers and get practical tips for succeeding in 2022. Sessions for the Americas, Europe, and Asia Pacific coming Feb 15th, 16th, and 24th.",
    buttonText: "Register Now",
  },
  {
    title: "Free Headshots for Entrepreneurs at Shopify NYC",
    description:
      "Come join us at Shopify NYC to get your free headshots in our on-site studio, and meet the Shopify NYC team of Community Managers.",
    buttonText: "Reserve your spot",
  },
  {
    title: "Get to know Shopify with guided video tutorialsC",
    description:
      "Keep learning with new and upcoming videos by subscribing to the Shopify Help Center YouTube Channel.",
    buttonText: "Explore YouTube channel",
  },
];

export default {
  name: "Home",
  components: {
    XIcon,
    Button,
    InfoCard,
  },
  setup() {
    const close = ref(false);
    return {
      close,
      infoCard,
    };
  },
};
</script>

<style scoped></style>
