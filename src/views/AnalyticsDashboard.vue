<template>
  <div class="md:pl-52 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6 space-y-4">
        <div class="px-4 sm:px-6 md:px-8 flex flex-col space-y-6">
          <h1 class="text-lg font-semibold text-dark-text">Analytics</h1>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class=" inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-dark-text bg-white hover:bg-gray-50 max-w-max " >
              <span><CalendarIcon class="w-5 h-5 mr-1 text-gray-600" /></span>
              Today
            </button>
            <span class="text-sm text-light-text"
              >compared to <span>Feb 11, 2022</span></span
            >
          </div>
        </div>
        <div class="mx-auto px-4 sm:px-6 md:px-8 space-y-5 flex flex-col w-full"
        >
          <!-- Replace with your content -->
          <div class=" flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 items-start w-full " >
            <!-- column 1 -->
            <div class="w-full h-auto space-y-4">
              <div v-for="card in cardsCol1" :key="card.name" class=" w-full bg-white shadow border border-gray-200 p-5 rounded-lg space-y-6">
                <div class="flex justify-between">
                  <h2
                    class=" text-base text-dark-text font-medium pr-4 box-border" >
                    {{card.name}}
                  </h2>
                  <a :href="card.href" class="text-sm text-blue-500 whitespace-nowrap">View report</a>
                </div>
                <div :class="[card.contentStatus ? 'block' : 'hidden','flex justify-between -mt-8']">
                  <h2 class="text-3xl text-dark-text font-medium">{{card.value}}</h2>
                  <button class="text-2xl">{{card.aria}}</button>
                </div>
                <div :class="[card.visitorStatus && card.contentStatus ? 'block': 'hidden', 'flex flex-col']">
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="w-full text-sm hidden xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{card.visitors}}</td>
                        <td>-</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td>Visitor</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td class="w-full">{{card.visitors}}</td>
                        <td>{{card.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.graphStatus && card.contentStatus ? 'block': 'hidden', 'space-y-2']">
                  <p
                    class=" max-w-max uppercase text-xs font-medium border-b-2 border-dotted border-gray-300 " >
                    {{card.overTime}} over time
                  </p>
                  <div class="bg-gray-100 rounded h-52 text-gray-600 text-sm">
                    graph*
                  </div>
                  <div class="text-right space-x-2">
                    <span class="text-xs text-light-text align-middle">
                      <span class="inline-block h-3 w-3 rounded-sm bg-gray-400 mr-1"></span>
                      {{card.graphStart}}
                    </span>
                    <span class="text-xs text-light-text align-middle">
                      <span class="inline-block h-3 w-3 rounded-sm bg-teal-500 mr-1"></span>
                      {{card.graphEnd}}
                    </span>
                  </div>
                </div>
                <div :class="[card.conversionStatus && card.contentStatus ? 'block': 'hidden']">
                  <p class="max-w-max uppercase text-dark-text text-xs font-medium">
                    conversion funnel
                  </p>
                  <table v-for="conversion in card.conversions" :key="conversion.name" class="w-full text-sm text-dark-text">
                    <tbody class="w-full">
                      <tr class="w-full hidden md:table-row">
                        <td class="pt-2">
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                        <td class="text-right">{{conversion.percent}}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{conversion.aria}}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="w-full md:hidden table-row">
                        <td>
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                      </tr>
                      <tr class="md:hidden table-row">
                        <td>{{conversion.percent}}</td>
                        <td class="text-right">{{conversion.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.contentStatus ? 'hidden': 'block', 'text-sm text-light-text p-4']">
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
            <!-- column 2 -->
            <div class="w-full h-auto space-y-4">
              <div v-for="card in cardsCol2" :key="card.name" class=" w-full bg-white shadow border border-gray-200 p-5 rounded-lg space-y-6">
                <div class="flex justify-between">
                  <h2
                    class=" text-base text-dark-text font-medium pr-4 box-border" >
                    {{card.name}}
                  </h2>
                  <a :href="card.href" class="text-sm text-blue-500 whitespace-nowrap">View report</a>
                </div>
                <div :class="[card.contentStatus ? 'block' : 'hidden','flex justify-between -mt-8']">
                  <h2 class="text-3xl text-dark-text font-medium">{{card.value}}</h2>
                  <button class="text-2xl">{{card.aria}}</button>
                </div>
                <div :class="[card.visitorStatus && card.contentStatus ? 'block': 'hidden', 'flex flex-col']">
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="w-full text-sm hidden xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{card.visitors}}</td>
                        <td>-</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td>Visitor</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td class="w-full">{{card.visitors}}</td>
                        <td>{{card.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.graphStatus && card.contentStatus ? 'block': 'hidden', 'space-y-2']">
                  <p
                    class=" max-w-max uppercase text-xs font-medium border-b-2 border-dotted border-gray-300 " >
                    {{card.overTime}} over time
                  </p>
                  <div class="bg-gray-100 rounded h-52 text-gray-600 text-sm">
                    graph*
                  </div>
                  <div class="text-right space-x-2">
                    <span class="text-xs text-light-text align-middle">
                      <span class="inline-block h-3 w-3 rounded-sm bg-gray-400 mr-1"></span>
                      {{card.graphStart}}
                    </span>
                    <span class="text-xs text-light-text align-middle">
                      <span class="inline-block h-3 w-3 rounded-sm bg-teal-500 mr-1"></span>
                      {{card.graphEnd}}
                    </span>
                  </div>
                </div>
                <div :class="[card.conversionStatus && card.contentStatus ? 'block': 'hidden']">
                  <p class="max-w-max uppercase text-dark-text text-xs font-medium">
                    conversion funnel
                  </p>
                  <table v-for="conversion in card.conversions" :key="conversion.name" class="w-full text-sm text-dark-text">
                    <tbody class="w-full">
                      <tr class="w-full hidden md:table-row">
                        <td class="pt-2">
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                        <td class="text-right">{{conversion.percent}}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{conversion.aria}}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="w-full md:hidden table-row">
                        <td>
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                      </tr>
                      <tr class="md:hidden table-row">
                        <td>{{conversion.percent}}</td>
                        <td class="text-right">{{conversion.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.contentStatus ? 'hidden': 'block', 'text-sm text-light-text p-4']">
                  <span>There were no sessions in this date range.</span>
                </div>
              </div>
            </div>
            <!-- column 3 -->
            <div class="w-full h-auto space-y-4">
              <div v-for="card in cardsCol3" :key="card.name" class=" w-full bg-white shadow border border-gray-200 p-5 rounded-lg space-y-6">
                <div class="flex justify-between">
                  <h2
                    class=" text-base text-dark-text font-medium pr-4 box-border" >
                    {{card.name}}
                  </h2>
                  <a :href="card.href" class="text-sm text-blue-500 whitespace-nowrap">View report</a>
                </div>
                <div :class="[card.contentStatus ? 'block' : 'hidden','flex justify-between -mt-8']">
                  <h2 class="text-3xl text-dark-text font-medium">{{card.value}}</h2>
                  <button class="text-2xl">{{card.aria}}</button>
                </div>
                <div :class="[card.visitorStatus && card.contentStatus ? 'block': 'hidden', 'flex flex-col']">
                  <table class="w-full space-y-2">
                    <tbody class="w-full">
                      <tr class="w-full text-sm hidden xl:block">
                        <td class="w-11/12">Visitors</td>
                        <td class="w-1/12">{{card.visitors}}</td>
                        <td>-</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td>Visitor</td>
                      </tr>
                      <tr class="w-full xl:hidden block">
                        <td class="w-full">{{card.visitors}}</td>
                        <td>{{card.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.graphStatus && card.contentStatus ? 'block': 'hidden', 'space-y-2']">
                  <p
                    class=" max-w-max uppercase text-xs font-medium border-b-2 border-dotted border-gray-300 " >
                    {{card.overTime}} over time
                  </p>
                  <div class="bg-gray-100 rounded h-52 text-gray-600 text-sm">
                    graph*
                  </div>
                  <div class="text-right space-x-2">
                    <span class="text-xs text-light-text align-middle">
                      <span :class="[graphStart = 'First-time' ? 'bg-teal-500':'bg-gray-400', 'inline-block h-3 w-3 rounded-sm  mr-1']"></span>
                      {{card.graphStart}}
                    </span>
                    <span class="text-xs text-light-text align-middle">
                      <span :class="[graphStart = 'Returning' ? 'bg-teal-900':'bg-teal-500', 'inline-block h-3 w-3 rounded-sm  mr-1']"></span>
                      {{card.graphEnd}}
                    </span>
                  </div>
                </div>
                <div :class="[card.conversionStatus && card.contentStatus ? 'block': 'hidden']">
                  <p class="max-w-max uppercase text-dark-text text-xs font-medium">
                    conversion funnel
                  </p>
                  <table v-for="conversion in card.conversions" :key="conversion.name" class="w-full text-sm text-dark-text">
                    <tbody class="w-full">
                      <tr class="w-full hidden md:table-row">
                        <td class="pt-2">
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                        <td class="text-right">{{conversion.percent}}</td>
                        <td>
                          <div class="text-right">
                            <span aria-hidden="true">{{conversion.aria}}</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="w-full md:hidden table-row">
                        <td>
                            <p>{{conversion.name}}</p>
                            <p class="text-light-text"><span>{{conversion.sessions}} sessions</span></p>
                        </td>
                      </tr>
                      <tr class="md:hidden table-row">
                        <td>{{conversion.percent}}</td>
                        <td class="text-right">{{conversion.aria}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div :class="[card.contentStatus ? 'hidden': 'block', 'text-sm text-light-text p-4']">
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
]

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

]

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

  
]

export default {
  name: "AnalyticsDashboard",
  components: {
    CalendarIcon,
  },
  setup() {
    return {
      cardsCol1,
      cardsCol2,
      cardsCol3
    };
  }
};
</script>