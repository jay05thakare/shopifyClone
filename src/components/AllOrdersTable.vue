<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden">
    <div class="flex w-full flex-col overflow-x-auto">
      <table class="divide-y divide-gray-200 2xl:max-w-7xl">
        <thead class="text-left text-sm text-dark-text">
          <tr>
            <th scope="col" class="sticky left-0 z-10 bg-white py-2 px-4">
              <div class="flex">
                <input
                  type="checkbox"
                  class="mb-1 mr-4 rounded border-2 border-gray-400"
                />
                <span>Order</span>
              </div>
            </th>
            <th scope="col" class="py-2 px-4">Date</th>
            <th scope="col" class="py-2 px-4">Customer</th>
            <th scope="col" class="py-2 px-4">Total</th>
            <th scope="col" class="whitespace-nowrap py-2 px-4">
              Payment Status
            </th>
            <th scope="col" class="whitespace-nowrap py-2 px-4">
              Fulfillment Status
            </th>
            <th scope="col" class="py-2 px-4">Items</th>
            <th scope="col" class="whitespace-nowrap py-2 px-4">
              Delivery method
            </th>
            <th scope="col" class="py-2 px-4">Tags</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="order in orders" :key="order.id">
            <td class="sticky left-0 z-10 w-24 whitespace-nowrap bg-white">
              <div class="flex items-center">
                <div class="pl-4">
                  <input
                    type="checkbox"
                    class="mb-1 rounded border-2 border-gray-400"
                  />
                </div>
                <div class="py-2 px-4 text-sm font-medium text-gray-900">
                  {{ order.id }}
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <div class="text-sm text-gray-900">{{ order.date }}</div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <div class="text-sm text-gray-900">{{ order.customer }}</div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <div class="text-sm text-gray-900">Rs.{{ order.total }}</div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <span
                class="inline-flex items-center rounded-full bg-opacity-70 px-2 text-xs leading-5"
                :class="[
                  order.payment == 'Payment pending'
                    ? 'bg-orange-200 text-orange-900'
                    : 'bg-gray-300 text-gray-900',
                ]"
              >
                <svg
                  class="mr-1 -ml-0.5"
                  v-if="order.payment == 'Payment pending'"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#b98900"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <path
                      stroke-width="4px"
                      d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"
                    />
                  </g>
                </svg>
                <svg
                  class="mr-1 -ml-0.5"
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#5c5f62"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
                  />
                </svg>
                {{ order.payment }}
              </span>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <span
                class="inline-flex items-center rounded-full bg-opacity-70 px-2 text-xs leading-5"
                :class="[
                  order.fulfillment == 'Unfulfilled'
                    ? 'bg-yellow-200 text-yellow-900'
                    : 'bg-green-200 text-green-900',
                ]"
              >
                <svg
                  class="mr-1 -ml-0.5"
                  v-if="order.fulfillment == 'Unfulfilled'"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#8a6116"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <path
                      stroke-width="4px"
                      d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"
                    />
                  </g>
                </svg>
                <svg
                  class="mr-1 -ml-0.5"
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  height="10px"
                  viewBox="0 0 24 24"
                  width="10px"
                  fill="#15803d"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
                  />
                </svg>
                {{ order.fulfillment }}
              </span>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <div class="text-sm text-gray-900">{{ order.items }} items</div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <div class="text-sm text-gray-900">{{ order.delivery }}</div>
            </td>
            <td class="whitespace-nowrap py-2 px-4">
              <span
                class="inline-flex rounded bg-gray-300 bg-opacity-70 px-2 text-xs leading-5 text-gray-900"
              >
                {{ order.tags }}
              </span>
            </td>
            <!-- <td class=" whitespace-nowrap text-sm text-gray-500">
                  {{ person.role }}
                </td>
                <td class=" whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const orders = [
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe jr John Doe",
    total: "100.00",
    payment: "Paid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Unpaid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Paid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Unpaid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Paid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Unpaid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Paid",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
  },
  {
    id: "#100",
    date: "Wednesday at 2.22pm",
    customer: "John Doe",
    total: "100.00",
    payment: "Payment pending",
    fulfillment: "Unfulfilled",
    items: "3",
    delivery: "",
    tags: "egnition-sample-data",
    redBg: "bg-red-200",
    Graybg: "bg-gray-200",
  },
  // More people...
];

export default {
  setup() {
    return {
      orders,
    };
  },
};
</script>
