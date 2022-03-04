<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto max-w-5xl space-y-5 px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="space-y-4">
            <div class="flex justify-between border-b border-gray-300 pb-4">
              <div class="flex items-center">
                <h1 class="text-lg font-semibold text-dark-text">Apps</h1>
              </div>
              <div class="space-x-6">
                <a href="#" class="text-sm font-medium text-dark-text"
                  >Develop apps</a
                >
                <a
                  href="https://apps.shopify.com/?st_campaign=app-index&st_source=admin&utm_content=contextual&utm_medium=shopify&utm_source=admin"
                  class="focus:outline-none inline-flex items-center whitespace-nowrap rounded border border-transparent bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-dark-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Customize your store
                </a>
              </div>
            </div>
            <div
              class="w-full space-y-4 rounded-lg border border-gray-200 bg-white pt-4 shadow"
            >
              <div>
                <h2 class="px-4 font-medium">Installed apps</h2>
              </div>
              <div class="flex items-center justify-between px-4 text-sm">
                <p>Showing 3 apps</p>
                <div>
                  <select
                    id="range"
                    name="range"
                    class="block w-full rounded-md border-gray-300 text-sm"
                  >
                    <option selected="">App name (A–Z)</option>
                    <option>App name (Z–A)</option>
                    <option>Date installed (oldest first)</option>
                    <option>Date installed (newest first)</option>
                  </select>
                </div>
              </div>
              <div>
                <AppsTable />
              </div>
            </div>
            <div>
              <AppsCards />
            </div>

            <div
              class="flex w-full justify-between space-y-4 rounded-lg border border-gray-200 bg-white py-4 px-4 text-sm shadow"
            >
              <div class="space-y-5">
                <h2 class="font-medium">
                  Build custom apps for your unique needs
                </h2>
                <p>
                  Develop custom apps to integrate data or build a custom
                  storefront.
                </p>
                <div class="space-x-4">
                  <WhiteButton buttonText="Develop apps for your store" />
                  <a href="#" class="text-blue-700 hover:underline"
                    >Learn more</a
                  >
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/shopifycloud/web/assets/v1/657c3981045bdff7445ec4556f23d0e0.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="flex w-full items-center justify-center">
            <div class="flex py-6 text-center text-xxs">
              <img
                class="mr-1 w-4"
                src="@/assets/images/information.svg"
                alt=""
              />
              Learn more about &#160;
              <a class="text-blue-600 underline" href="#"> apps</a>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AppsTable from "@/components/AppsTable.vue";
import AppsCards from "@/components/AppsCards.vue";
import WhiteButton from "@/components/WhiteButton.vue";

export default {
  name: "Apps",
  components: {
    AppsTable,
    AppsCards,
    WhiteButton,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
