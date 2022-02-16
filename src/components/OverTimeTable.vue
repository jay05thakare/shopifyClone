<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden">
    <div class="flex w-full flex-col overflow-x-auto">
      <table class="w-full">
        <thead
          class="w-full border-b-2 border-gray-300 text-left text-sm text-dark-text"
        >
          <tr>
            <th
              scope="col"
              class="sticky left-0 z-10 w-4/12 bg-white py-3 px-4 font-normal"
            >
              <div class="flex">
                <span>Day</span>
              </div>
            </th>
            <th scope="col" class="py-3 px-4 font-normal">Orders</th>
            <th scope="col" class="whitespace-nowrap py-3 px-4 font-normal">
              Gross sales
            </th>
            <th scope="col" class="py-3 px-4 font-normal">Discounts</th>
            <th scope="col" class="whitespace-nowrap py-3 px-4 font-normal">
              Returns
            </th>
            <th scope="col" class="whitespace-nowrap py-3 px-4 font-normal">
              Net slaes
            </th>
            <th scope="col" class="py-3 px-4 font-normal">Shipping</th>
            <th scope="col" class="py-3 px-4 font-normal">Tax</th>
            <th scope="col" class="whitespace-nowrap py-3 px-4 font-normal">
              Total sales
            </th>
          </tr>
        </thead>
        <tbody class="w-full border-b border-gray-200 text-sm">
          <tr>
            <td
              class="sticky left-0 z-10 w-24 whitespace-nowrap bg-white px-4 font-medium"
            >
              Summary
            </td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">
              <div class="text-sm text-gray-900">20</div>
            </td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">
              <div class="text-sm text-gray-900">₹0.00</div>
            </td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">
              <div class="text-sm text-gray-900">₹0.00</div>
            </td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">₹0.00</td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">₹0.00</td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">
              <div class="text-sm text-gray-900">₹0.00</div>
            </td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">₹0.00</td>
            <td class="whitespace-nowrap py-3 px-4 font-medium">₹0.00</td>
          </tr>
        </tbody>
        <tbody
          class="w-full divide-y divide-y divide-gray-100 text-sm font-normal"
        >
          <tr v-for="row in rows" :key="row.id">
            <td
              class="sticky left-0 z-10 w-24 whitespace-nowrap bg-white py-3 px-4"
            >
              {{ row.date }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.orders }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.grossSales }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.discounts }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.returns }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.netSales }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.shipping }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.tax }}
            </td>
            <td class="whitespace-nowrap py-3 px-4">
              {{ row.totalSales }}
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
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#200",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#300",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#100",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#200",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#300",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#100",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#200",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#300",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#100",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#200",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#300",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#100",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#200",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  {
    id: "#300",
    date: "Jan 22, 2022",
    orders: "20",
    grossSales: "₹0.00",
    discounts: "₹0.00",
    returns: "₹0.00",
    netSales: "₹0.00",
    shipping: "₹0.00",
    tax: "₹0.00",
    totalSales: "₹0.00",
  },
  // More people...
];

export default {
  setup() {
    return {
      rows,
    };
  },
};
</script>
