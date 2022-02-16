<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div
          class="mx-auto flex max-w-7xl justify-between px-4 text-dark-text sm:px-6 md:px-8"
        >
          <h1 class="text-lg font-semibold">Products</h1>
          <button class="text-xs font-medium">Import</button>
        </div>
        <div
          class="mx-auto flex w-full max-w-7xl flex-col space-y-8 px-4 sm:px-6 md:px-8"
        >
          <!-- Replace with your content -->
          <div
            class="flex flex-col items-center divide-y rounded-md bg-white shadow"
          >
            <h2 class="py-5 px-2 text-2xl text-dark-text">
              First up: decide what you’re selling
            </h2>
            <div class="flex divide-x">
              <div class="h-full">
                <div
                  class="flex flex-col items-center space-y-4 rounded-md p-3 pt-5 pb-14 text-xs shadow-sm"
                >
                  <div class="">
                    <img src="@/assets/images/shopify-bg-2.svg" alt="" />
                  </div>
                  <h4 class="text-lg text-dark-text">Your own products</h4>
                  <p class="w-10/12 text-center text-xs text-light-text">
                    Add photos and descriptions for whatever products or
                    services you plan to sell.
                  </p>
                  <div><Button Button="Add products" /></div>
                </div>
              </div>
              <div class="h-full">
                <div
                  class="flex flex-col items-center space-y-4 rounded-md p-3 pt-5 pb-14 text-xs shadow-sm"
                >
                  <div class="">
                    <img src="@/assets/images/shopify-bg-1.svg" alt="" />
                  </div>
                  <h4 class="text-lg text-dark-text">
                    Dropshipping and wholesale
                  </h4>
                  <p class="w-10/12 text-center text-xs text-light-text">
                    See what products are out there and curate your own unique
                    collection to sell.
                  </p>
                  <div><Button Button="Explore Product" /></div>
                </div>
              </div>
              <div class="h-full">
                <div
                  class="flex flex-col items-center space-y-4 rounded-md p-3 pt-5 pb-14 text-xs shadow-sm"
                >
                  <div class="">
                    <img src="@/assets/images/shopify-bg-5.svg" alt="" />
                  </div>
                  <h4 class="text-lg text-dark-text">Print on demande</h4>
                  <p class="w-10/12 text-center text-xs text-light-text">
                    Whatever you design only gets printed and delivered when a
                    customer places an order.
                  </p>
                  <div><Button Button="Design Product" /></div>
                </div>
              </div>
            </div>
          </div>
          <span class="mx-auto flex py-6 text-xxs"
            ><img
              class="mr-1 w-4"
              src="@/assets/images/information.svg"
              alt=""
            />
            Learn more about
            <a class="text-blue-600 underline" href="#">products</a></span
          >
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Products",
  components: {
    Button,
  },
};
</script>
