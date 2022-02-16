<template>
  <div>
    <div
      class="flex flex-col items-center space-y-4 rounded-md bg-white p-3 pt-5 pb-14 text-xs shadow-sm"
    >
      <div class="w-52">
        <img src="@/assets/images/shopify-bg-3.svg" alt="" />
      </div>
      <h4 class="text-lg text-dark-text">Your orders will show here</h4>
      <p class="w-4/12 text-center text-xs text-light-text">
        To get orders and accept payments from customers, you need to select a
        plan. You’ll only be charged for your plan after your free trial ends.
      </p>
      <div><Button Button="Select a plan" /></div>
    </div>
    <span class="mx-auto flex py-6 text-xxs"
      ><img class="mr-1 w-4" src="@/assets/images/information.svg" alt="" />
      Learn more about
      <a class="text-blue-600 underline" href="#">orders</a></span
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
