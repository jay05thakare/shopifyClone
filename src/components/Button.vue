<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap">
    {{ Button }}
  </button>
</template>

<script>
export default {
    name:'Button',
    props:[
        'Button'
    ]
}
</script>
