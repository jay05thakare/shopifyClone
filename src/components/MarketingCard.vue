
<template>
            <div class="">
              <!-- Card -->
              <div class="bg-white shadow xs:rounded-lg  justify-center ">
                <div class="p-4 pt-3 border border-gray-200">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                            <button data-tooltip-target="tooltip-top" :data-tooltip-placement="position" type="button" class="mb-2 md:mb-0 text-dark-text font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-b-2 border-dotted border-gray-300 bg-bg-hover">{{name}}</button>
                            <div id="tooltip-top" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-xs text-dark-text rounded-lg bg-white shadow opacity-0 tooltip">
                                {{title}}
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </dt>
                        <dd>
                          <div v-if="amount" class="text-lg font-medium text-gray-900">
                            ₹{{ amount }} -
                          </div>
                          <div v-else class="text-lg font-medium text-gray-900">
                            {{ value }} -
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
            </div>
</template>

<script>

export default {
    name:"MarketingCard",
  components: {
  },
  props:['name','value','amount','title','position'],
}
</script>