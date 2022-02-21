<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 md:py-5">
        <div class="mx-auto max-w-5xl space-y-4 px-4 sm:px-6 md:px-8">
          <div class="relative flex justify-between xs:static">
            <h1
              class="whitespace-nowrap pt-8 text-xl font-semibold text-dark-text xs:pt-0"
            >
              Reports
            </h1>
            <div class="absolute top-0 right-0 xs:static">
              <CreateReportButton />
            </div>
          </div>
          <div class="w-full">
            <label for="search" class="sr-only text-xs">Search</label>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                class="focus:outline-none block w-full rounded border border-gray-300 bg-white py-2 pl-10 pr-3 text-xs font-normal placeholder-gray-500 focus:text-gray-900 sm:text-xs"
                placeholder="Search for reports"
                type="search"
              />
            </div>
          </div>
        </div>
        <div
          class="mx-auto flex w-full max-w-5xl flex-col space-y-4 overflow-hidden xs:px-4 sm:px-6 md:px-8"
        >
          <!-- Replace with your content -->
          <div
            class="flex w-full flex-col items-start space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4"
          >
            <!-- column 1 -->
            <div class="h-auto w-full space-y-4">
              <div
                v-for="card in cardsCol1"
                :key="card.name"
                class="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow"
              >
                <div class="flex justify-between">
                  <h2 class="pr-4 text-base font-medium text-dark-text">
                    {{ card.name }}
                  </h2>
                </div>
                <div class="text-sm text-dark-text">
                  <p>{{ card.description }}</p>
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'block' : 'hidden',
                    ' -mt-8 border-b border-gray-200 pb-4',
                  ]"
                >
                  <span class="text-xs font-medium uppercase">{{
                    card.title
                  }}</span>
                  <h2 class="text-3xl font-medium text-dark-text">
                    {{ card.value }}
                  </h2>
                </div>
                <div>
                  <p class="text-xs font-medium uppercase">Reports</p>
                  <div class="mt-2 text-sm text-indigo-500">
                    <div
                      v-for="link in card.showItemsBefore"
                      :key="link.name"
                      class=""
                    >
                      <div class="border-b border-gray-200 py-2.5">
                        <a :href="link.link" class="hover:text-blue-800">{{
                          link.name
                        }}</a>
                      </div>
                    </div>
                    <div v-if="card.showAll" class="divide-y overflow-hidden">
                      <div v-for="link in card.showItemsAfter" :key="link.name">
                        <div class="py-2.5">
                          <a :href="link.link" class="hover:text-blue-800">{{
                            link.name
                          }}</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center pt-4">
                        <button
                          @click="card.showAll = !card.showAll"
                          class="flex items-center p-1 hover:text-blue-800 hover:underline"
                        >
                          Show all
                          <ChevronDownIcon class="ml-1 mt-0.5 h-4 w-4" />
                        </button>
                      </div>

                      <transition> </transition>
                    </div>
                  </div>
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'hidden' : 'block',
                    'p-4 text-sm text-light-text',
                  ]"
                >
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
            <!-- column 2 -->
            <div class="h-auto w-full space-y-4">
              <div
                v-for="card in cardsCol2"
                :key="card.name"
                class="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow"
              >
                <div class="flex justify-between">
                  <h2 class="pr-4 text-base font-medium text-dark-text">
                    {{ card.name }}
                  </h2>
                </div>
                <div class="text-sm text-dark-text">
                  <p>{{ card.description }}</p>
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'block' : 'hidden',
                    ' -mt-8 border-b border-gray-200 pb-4',
                  ]"
                >
                  <span class="text-xs font-medium uppercase">{{
                    card.title
                  }}</span>
                  <h2 class="text-3xl font-medium text-dark-text">
                    {{ card.value }}
                  </h2>
                </div>
                <div>
                  <p class="text-xs font-medium uppercase">Reports</p>
                  <div class="mt-2 text-sm text-indigo-500">
                    <div
                      v-for="link in card.showItemsBefore"
                      :key="link.name"
                      class=""
                    >
                      <div class="border-b border-gray-200 py-2.5">
                        <a :href="link.link" class="hover:text-blue-800">{{
                          link.name
                        }}</a>
                      </div>
                    </div>
                    <div v-if="card.showAll" class="divide-y overflow-hidden">
                      <div v-for="link in card.showItemsAfter" :key="link.name">
                        <div class="py-2.5">
                          <a :href="link.link" class="hover:text-blue-800">{{
                            link.name
                          }}</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center pt-4">
                        <button
                          @click="card.showAll = !card.showAll"
                          class="flex items-center p-1 hover:text-blue-800 hover:underline"
                        >
                          Show all
                          <ChevronDownIcon class="ml-1 mt-0.5 h-4 w-4" />
                        </button>
                      </div>

                      <transition> </transition>
                    </div>
                  </div>
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'hidden' : 'block',
                    'p-4 text-sm text-light-text',
                  ]"
                >
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import { ref } from "vue";
import { SearchIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import CreateReportButton from "../components/CreateReportButton.vue";


export default {
  name: "AnalyticsReport",
  components: {
    CreateReportButton,
    SearchIcon,
    ChevronDownIcon,
  },
  data() {
    const cardsCol1 = [
      {
        name: "Sales",
        contentStatus: true,
        description:
          "Make business decisions by comparing sales across products, staff, channels, and more.",
        title: "Total sales last 30 days",
        value: "₹0.00",
        showAll: false,
        showItemsBefore: [
          {
            name: "Sales over time",
            href: "#",
          },
          {
            name: "Sales by product",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Sales by product variant SKU",
            href: "#",
          },
          {
            name: "Sales by product vendor",
            href: "#",
          },
          {
            name: "Sales by discount",
            href: "#",
          },
          {
            name: "Sales by traffic referrer",
            href: "#",
          },
          {
            name: "Sales by billing location",
            href: "#",
          },
          {
            name: "Sales by channel",
            href: "#",
          },
          {
            name: "Sales by customer name",
            href: "#",
          },
          {
            name: "Average order value over time",
            href: "#",
          },
        ],
      },
      {
        name: "Orders",
        contentStatus: true,
        description:
          "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
        title: "ORDERS LAST 30 DAYS",
        value: "20",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
      {
        name: "Customers",
        contentStatus: true,
        description:
          "Gain insights into who your customers are and how they interact with your business.",
        title: "CUSTOMERS LAST 30 DAYS",
        value: "9",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
      {
        name: "Orders",
        contentStatus: true,
        description:
          "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
        title: "ORDERS LAST 30 DAYS",
        value: "20",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
      {
        name: "Customers",
        contentStatus: true,
        description:
          "Gain insights into who your customers are and how they interact with your business.",
        title: "CUSTOMERS LAST 30 DAYS",
        value: "9",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
    ];

    const cardsCol2 = [
      {
        name: "Acquisition",
        contentStatus: true,
        description:
          "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
        title: "SESSIONS LAST 30 DAYS",
        value: "0",
        showAll: false,
        showItemsBefore: [
          {
            name: "Sessions over time",
            href: "#",
          },
          {
            name: "Sessions by referrer",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Sessions by location",
            href: "#",
          },
        ],
      },
      {
        name: "Profit margin",
        contentStatus: true,
        description:
          "See how products and locations contribute to the gross profit and margin for your business.",
        title: "PROFIT THIS MONTH TO DATE",
        value: "₹0.00",
        showAll: false,
        showItemsBefore: [
          {
            name: "Profit by product",
            href: "#",
          },
          {
            name: "Profit by product variant SKU",
            href: "#",
          },
        ],
        showItemsAfter: [],
      },
      {
        name: "Customers",
        contentStatus: true,
        description:
          "Gain insights into who your customers are and how they interact with your business.",
        title: "CUSTOMERS LAST 30 DAYS",
        value: "9",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
      {
        name: "Orders",
        contentStatus: true,
        description:
          "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
        title: "ORDERS LAST 30 DAYS",
        value: "20",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
      {
        name: "Customers",
        contentStatus: true,
        description:
          "Gain insights into who your customers are and how they interact with your business.",
        title: "CUSTOMERS LAST 30 DAYS",
        value: "9",
        showAll: false,
        showItemsBefore: [
          {
            name: "Orders over time",
            href: "#",
          },
          {
            name: "Product orders and returns",
            href: "#",
          },
        ],
        showItemsAfter: [
          {
            name: "Fulfillment over time",
            href: "#",
          },
          {
            name: "Fulfillment, shipping, and delivery times",
            href: "#",
          },
        ],
      },
    ];
    
    return {
      cardsCol1,
      cardsCol2,
    };
  },
};
</script>

<style scoped></style>
