<template>
  <div class="flex flex-1 flex-col md:pl-52">
    <main class="flex-1">
      <div class="space-y-4 py-6">
        <div class="flex flex-col space-y-6 px-4 sm:px-6 md:px-8">
          <h1 class="text-lg font-semibold text-dark-text">Analytics</h1>
          <div class="flex items-center space-x-2">
            <!-- Today drop -->
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? '' : '', 'group    hover:bg-gray-100  inline-flex max-w-max items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-text shadow-sm ']">
              <span><CalendarIcon class="mr-1 h-5 w-5 text-gray-600" /></span>
                <span>Today</span>
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 left-0 mt-1 px-2 w-screen max-w-xl sm:px-0">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">

                    <AnalyticsTodayDrop />

                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <!-- Today drop end -->
            <span class="text-sm text-light-text"
              >compared to <span>Feb 11, 2022</span></span
            >
          </div>
        </div>
        <div
          class="mx-auto flex w-full flex-col space-y-5 px-4 sm:px-6 md:px-8"
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
                class="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-5 shadow"
              >
                <div class="flex justify-between">
                  <h2
                    class="box-border pr-4 text-base font-medium text-dark-text"
                  >
                    {{ card.name }}
                  </h2>
                  <a
                    :href="card.href"
                    class="whitespace-nowrap text-sm text-blue-500"
                    >View report</a
                  >
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'block' : 'hidden',
                    '-mt-8 flex justify-between',
                  ]"
                >
                  <h2 class="text-3xl font-medium text-dark-text">
                    {{ card.value }}
                  </h2>
                  <button class="text-2xl">{{ card.aria }}</button>
                </div>
                <div
                  :class="[
                    card.visitorStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                    'flex flex-col',
                  ]"
                >
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="hidden w-full text-sm xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{ card.visitors }}</td>
                        <td>-</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td>Visitor</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td class="w-full">{{ card.visitors }}</td>
                        <td>{{ card.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  :class="[
                    card.graphStatus && card.contentStatus ? 'block' : 'hidden',
                    'space-y-2',
                  ]"
                >
                  <p
                    class="max-w-max border-b-2 border-dotted border-gray-300 text-xs font-medium uppercase"
                  >
                    {{ card.overTime }} over time
                  </p>
                  <div class="h-52 rounded bg-gray-100 text-sm text-gray-600">
                    graph*
                  </div>
                  <div class="space-x-2 text-right">
                    <span class="align-middle text-xs text-light-text">
                      <span
                        class="mr-1 inline-block h-3 w-3 rounded-sm bg-gray-400"
                      ></span>
                      {{ card.graphStart }}
                    </span>
                    <span class="align-middle text-xs text-light-text">
                      <span
                        class="mr-1 inline-block h-3 w-3 rounded-sm bg-teal-500"
                      ></span>
                      {{ card.graphEnd }}
                    </span>
                  </div>
                </div>
                <div
                  :class="[
                    card.conversionStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                  ]"
                >
                  <p
                    class="max-w-max text-xs font-medium uppercase text-dark-text"
                  >
                    conversion funnel
                  </p>
                  <table
                    v-for="conversion in card.conversions"
                    :key="conversion.name"
                    class="w-full text-sm text-dark-text"
                  >
                    <tbody class="w-full">
                      <tr class="hidden w-full md:table-row">
                        <td class="pt-2">
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                        <td class="text-right">{{ conversion.percent }}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{
                              conversion.aria
                            }}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="table-row w-full md:hidden">
                        <td>
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                      </tr>
                      <tr class="table-row md:hidden">
                        <td>{{ conversion.percent }}</td>
                        <td class="text-right">{{ conversion.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
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
                class="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-5 shadow"
              >
                <div class="flex justify-between">
                  <h2
                    class="box-border pr-4 text-base font-medium text-dark-text"
                  >
                    {{ card.name }}
                  </h2>
                  <a
                    :href="card.href"
                    class="whitespace-nowrap text-sm text-blue-500"
                    >View report</a
                  >
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'block' : 'hidden',
                    '-mt-8 flex justify-between',
                  ]"
                >
                  <h2 class="text-3xl font-medium text-dark-text">
                    {{ card.value }}
                  </h2>
                  <button class="text-2xl">{{ card.aria }}</button>
                </div>
                <div
                  :class="[
                    card.visitorStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                    'flex flex-col',
                  ]"
                >
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="hidden w-full text-sm xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{ card.visitors }}</td>
                        <td>-</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td>Visitor</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td class="w-full">{{ card.visitors }}</td>
                        <td>{{ card.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  :class="[
                    card.graphStatus && card.contentStatus ? 'block' : 'hidden',
                    'space-y-2',
                  ]"
                >
                  <p
                    class="max-w-max border-b-2 border-dotted border-gray-300 text-xs font-medium uppercase"
                  >
                    {{ card.overTime }} over time
                  </p>
                  <div class="h-52 rounded bg-gray-100 text-sm text-gray-600">
                    graph*
                  </div>
                  <div class="space-x-2 text-right">
                    <span class="align-middle text-xs text-light-text">
                      <span
                        class="mr-1 inline-block h-3 w-3 rounded-sm bg-gray-400"
                      ></span>
                      {{ card.graphStart }}
                    </span>
                    <span class="align-middle text-xs text-light-text">
                      <span
                        class="mr-1 inline-block h-3 w-3 rounded-sm bg-teal-500"
                      ></span>
                      {{ card.graphEnd }}
                    </span>
                  </div>
                </div>
                <div
                  :class="[
                    card.conversionStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                  ]"
                >
                  <p
                    class="max-w-max text-xs font-medium uppercase text-dark-text"
                  >
                    conversion funnel
                  </p>
                  <table
                    v-for="conversion in card.conversions"
                    :key="conversion.name"
                    class="w-full text-sm text-dark-text"
                  >
                    <tbody class="w-full">
                      <tr class="hidden w-full md:table-row">
                        <td class="pt-2">
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                        <td class="text-right">{{ conversion.percent }}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{
                              conversion.aria
                            }}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="table-row w-full md:hidden">
                        <td>
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                      </tr>
                      <tr class="table-row md:hidden">
                        <td>{{ conversion.percent }}</td>
                        <td class="text-right">{{ conversion.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
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
            <!-- column 3 -->
            <div class="h-auto w-full space-y-4">
              <div
                v-for="card in cardsCol3"
                :key="card.name"
                class="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-5 shadow"
              >
                <div class="flex justify-between">
                  <h2
                    class="box-border pr-4 text-base font-medium text-dark-text"
                  >
                    {{ card.name }}
                  </h2>
                  <a
                    :href="card.href"
                    class="whitespace-nowrap text-sm text-blue-500"
                    >View report</a
                  >
                </div>
                <div
                  :class="[
                    card.contentStatus ? 'block' : 'hidden',
                    '-mt-8 flex justify-between',
                  ]"
                >
                  <h2 class="text-3xl font-medium text-dark-text">
                    {{ card.value }}
                  </h2>
                  <button class="text-2xl">{{ card.aria }}</button>
                </div>
                <div
                  :class="[
                    card.visitorStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                    'flex flex-col',
                  ]"
                >
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="hidden w-full text-sm xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{ card.visitors }}</td>
                        <td>-</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td>Visitor</td>
                      </tr>
                      <tr class="block w-full xl:hidden">
                        <td class="w-full">{{ card.visitors }}</td>
                        <td>{{ card.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  :class="[
                    card.graphStatus && card.contentStatus ? 'block' : 'hidden',
                    'space-y-2',
                  ]"
                >
                  <p
                    class="max-w-max border-b-2 border-dotted border-gray-300 text-xs font-medium uppercase"
                  >
                    {{ card.overTime }} over time
                  </p>
                  <div class="h-52 rounded bg-gray-100 text-sm text-gray-600">
                    graph*
                  </div>
                  <div class="space-x-2 text-right">
                    <span class="align-middle text-xs text-light-text">
                      <span
                        :class="[
                          (graphStart = 'First-time'
                            ? 'bg-teal-500'
                            : 'bg-gray-400'),
                          'mr-1 inline-block h-3 w-3  rounded-sm',
                        ]"
                      ></span>
                      {{ card.graphStart }}
                    </span>
                    <span class="align-middle text-xs text-light-text">
                      <span
                        :class="[
                          (graphStart = 'Returning'
                            ? 'bg-teal-900'
                            : 'bg-teal-500'),
                          'mr-1 inline-block h-3 w-3  rounded-sm',
                        ]"
                      ></span>
                      {{ card.graphEnd }}
                    </span>
                  </div>
                </div>
                <div
                  :class="[
                    card.conversionStatus && card.contentStatus
                      ? 'block'
                      : 'hidden',
                  ]"
                >
                  <p
                    class="max-w-max text-xs font-medium uppercase text-dark-text"
                  >
                    conversion funnel
                  </p>
                  <table
                    v-for="conversion in card.conversions"
                    :key="conversion.name"
                    class="w-full text-sm text-dark-text"
                  >
                    <tbody class="w-full">
                      <tr class="hidden w-full md:table-row">
                        <td class="pt-2">
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                        <td class="text-right">{{ conversion.percent }}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{
                              conversion.aria
                            }}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="table-row w-full md:hidden">
                        <td>
                          <p>{{ conversion.name }}</p>
                          <p class="text-light-text">
                            <span>{{ conversion.sessions }} sessions</span>
                          </p>
                        </td>
                      </tr>
                      <tr class="table-row md:hidden">
                        <td>{{ conversion.percent }}</td>
                        <td class="text-right">{{ conversion.aria }}</td>
                      </tr>
                    </tbody>
                  </table>
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
import { CalendarIcon } from "@heroicons/vue/outline";
import AnalyticsTodayDrop from '@/components/AnalyticsTodayDrop.vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { BookmarkAltIcon, ShieldCheckIcon, SupportIcon } from '@heroicons/vue/outline'

const cardsCol1 = [
  {
    name: "Total sales",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: true,
    conversionStatus: false,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Online store conversion rate",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "0%",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Top products by units sold",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Online store sessions by traffic source",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Sales by social source",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Top referres by sessions",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },
];

const cardsCol2 = [
  {
    name: "Online store sessions",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: true,
    graphStatus: true,
    conversionStatus: false,
    value: "0",
    aria: "-",
    visitors: "0",
    overTime: "sessions",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Average order value",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "order value",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Online store sessions by location",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Sales by traffic source",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Top landing pages by sessions",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },
];

const cardsCol3 = [
  {
    name: "Returning customer rate",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: true,
    conversionStatus: false,
    value: "0%",
    aria: "-",
    visitors: "0",
    overTime: "customers",
    graphStart: "First-time",
    graphEnd: "Returning",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Total orders",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "0",
    aria: "-",
    visitors: "0",
    overTime: "orders",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Online store sessions by device type",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Online store sessions by social source",
    href: "/OverTime",
    contentStatus: false,
    visitorStatus: false,
    graphStatus: false,
    conversionStatus: true,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },

  {
    name: "Sales attributed to marketing",
    href: "/OverTime",
    contentStatus: true,
    visitorStatus: false,
    graphStatus: true,
    conversionStatus: false,
    value: "₹0.00",
    aria: "-",
    visitors: "0",
    overTime: "sales",
    graphStart: "Feb 11, 2022",
    graphEnd: "Nov 11, 2022",
    conversions: [
      {
        name: "Added to cart",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Reached checkout",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
      {
        name: "Sessions converted",
        sessions: "0",
        percent: "0.00%",
        aria: "-",
      },
    ],
  },
];

export default {
  name: "AnalyticsDashboard",
  components: {
    AnalyticsTodayDrop,
    Popover,
    PopoverButton,
    PopoverPanel,
    CalendarIcon,
  },
  setup() {
    return {
      cardsCol1,
      cardsCol2,
      cardsCol3,
      resources,
      recentPosts,
    };
  },
};




const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

</script>
