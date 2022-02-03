<template>
    <div class="md:pl-52 flex flex-col flex-1">
        <main class="flex-1">
        <div class="md:py-5 space-y-4">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="flex justify-between relative">
                  <h1 class="pt-8 xs:pt-0 text-xl font-semibold text-dark-text whitespace-nowrap">Marketing overview</h1>
                  <div class="xs:static absolute top-0 right-0"><Button Button="Create campaign" class="" /></div>
                </div>
                <div>
                    <p class=" text-base font-semibold text-dark-text">Results from marketing <span class=" text-xs text-light-text"><span class=" whitespace-nowrap">{{marketing.new}}, {{marketing.newYear}}</span> compared to <span class=" whitespace-nowrap">{{marketing.last}}, {{marketing.lastYear}}</span></span></p>
                </div>
            </div>
          <div class=" max-w-4xl mx-auto xs:px-4 sm:px-6 md:px-8 space-y-4 flex flex-col w-full overflow-hidden">
            <!-- Replace with your content -->
            <div class="mt-2 grid grid-cols-1 xs:grid-cols-2 gap-0 xs:gap-3 lg:grid-cols-4">
                <MarketingCard v-for="card in cards" :key="card.name" :name="card.name" :value="card.value" :amount="card.amount" :title="card.title" :position="card.position"/>
            </div>
            <RecentMarketingTable />
            <MarketingApps />    
            <div class="text-xxs mx-auto flex py-6 px-2 xs:px-4">
                <div><img class="w-4 mt-0.5 mr-3 xs:mr-1" src="@/assets/images/information.svg" alt=""></div> 
                <div >Learn more about &nbsp;  
                <a class=" text-blue-600 underline whitespace-nowrap" href="#"> marketing campaigns </a>
                &nbsp; and how  &nbsp;
                <a class=" text-blue-600 underline whitespace-nowrap" href="#"> Shopify sync report data. </a></div>
              </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import MarketingCard from '../components/MarketingCard.vue'
import RecentMarketingTable from '../components/RecentMarketingTable.vue'
import MarketingApps from '../components/MarketingApps.vue'

const cards = [
  { name: 'Online store sessions', value: '4', title:'title', position:'top'},
  { name: 'Orders from marketing', value: '0', title:'title', position:'bottom'},
  { name: 'Sales from marketing', amount: '0.00', title:'title', position:'top'},
  { name: 'Marketing cost', amount: '0.00', title:'title', position:'bottom'},
]

const marketing = 
    {new:"Jan 1-Jan 30",newYear:"2022",last:"Dec 2-Dec 31",lastYear:"2021"};

    export default {
        name:'Marketing',
        components:{
            Button,
            MarketingCard,
            RecentMarketingTable,
            MarketingApps,
        },
  setup() {
    return {
      marketing,
      cards,
    }
  },
        
    }
</script>

<style scoped>

</style>