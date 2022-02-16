<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 class="text-lg font-semibold text-dark-text">Drafts</h1>
        </div>
        <div
          class="mx-auto flex w-full max-w-7xl flex-col space-y-8 px-4 sm:px-6 md:px-8"
        >
          <!-- Replace with your content -->
          <div
            class="flex flex-col items-center space-y-4 rounded-md bg-white p-3 pt-5 pb-14 text-xs shadow-sm"
          >
            <div class="w-52">
              <img src="@/assets/images/shopify-bg-4.svg" alt="" />
            </div>
            <h4 class="text-lg text-dark-text">
              Manually create orders and invoices
            </h4>
            <p class="w-4/12 text-center text-xs text-light-text">
              Use draft orders to take orders over the phone, email invoices to
              customers, and collect payments.
            </p>
            <div><Button Button="Create draft order" /></div>
          </div>
          <span class="mx-auto flex py-6 text-xxs"
            ><img
              class="mr-1 w-4"
              src="@/assets/images/information.svg"
              alt=""
            />
            Learn more about
            <a class="text-blue-600 underline" href="#"
              >creating draft orders</a
            ></span
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
  name: "Drafts",
  components: {
    Button,
  },
};
</script>
