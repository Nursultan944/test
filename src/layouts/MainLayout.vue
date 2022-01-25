<template>
<router-view></router-view>
</template>

<script>
import EssentialLink from '../components/EssentialLink'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

})
</script>
