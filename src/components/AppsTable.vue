<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden">
    <div class="flex w-full flex-col overflow-x-auto">
      <table class="w-full">
        <thead
          class="w-full text-left text-sm text-dark-text"
        >
          <tr>
            <th
              scope="col"
              class="z-10 w-9/12 px-4"
            >
              <div class="flex">
                <span></span>
              </div>
            </th>
            <th scope="col" class="w-1/12 px-4"></th>
            <th scope="col" class="w-1/12 px-4">
            </th>
            <th scope="col" class="w-1/12 px-4"></th>
          </tr>
        </thead>
        <tbody
          class=" text-sm text-blue-700"
        >
          <tr v-for="row in rows" :key="row.id" class=" border-t border-gray-300">
            <td
              class="flex items-center font-medium z-10 whitespace-nowrap bg-white py-3 px-4 capitalize space-x-4"
            >
            <span class=" w-10 h-10"><img :src="row.image" alt=""></span>
              <a :href="row.appLink">{{ row.app }}</a>
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              <a :href="row.supportLink">Get support</a>
            </td>
            <td class="whitespace-nowrap py-3 px-4 text-right">
              <a :href="row.aboutLink">About</a>
            </td>
            <td class="whitespace-nowrap py-3 px-4 text-red-500 text-right">
              <a :href="row.deleteLink">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const rows = [
  {
    id: "#100",
    app: "Simple sample data",
    image: "https://cdn.shopify.com/s/files/applications/c36a05e11a47d18ef61cf8dcd3985fe0_200x200.png?1507806032",
    appLink: "#",
    supportLink: "#",
    aboutLink: "#",
    deleteLink: "#",
  },
  {
    id: "#200",
    app: "Shopify email",
    image: "https://cdn.shopify.com/s/files/applications/14711ad7477a3d0211488990623ad24c_200x200.png?1572629690",
    appLink: "#",
    supportLink: "#",
    aboutLink: "#",
    deleteLink: "#",
  },
  {
    id: "#300",
    app: "Advanced cash on delivery",
    image: "https://cdn.shopify.com/s/files/applications/ceb1a596e2b039d02dfb5772303f6273_200x200.png?1470954919",
    appLink: "#",
    supportLink: "#",
    aboutLink: "#",
    deleteLink: "#",
  },
  // More apps...
];

export default {
  setup() {
    return {
      rows,
    };
  },
};
</script>
