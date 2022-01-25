<template>
        <div class=" px-5 pb-5 pt-2 rounded-md bg-white text-dark text text-xs shadow space-y-2">
              <div class="flex justify-between">
                  <h4 class="pt-2 text-sm font-medium">{{title}}</h4>
                  <button class="w-4"><img src="@/assets/images/dots-horizontal.svg" alt=""></button>
              </div>
              <p class="mr-6 text-xs">{{description}}</p>
              <WhiteButton :buttonText="buttonText"/>
        </div>
</template>

<script>
import WhiteButton from './WhiteButton.vue'
    export default {
        name: 'InfoCard',
        components: {
            WhiteButton,
        },
        props:['title','description','buttonText'],
    }
</script>

<style lang="scss" scoped>

</style>