<template>
  <div>

    <FilpCard />

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import FilpCard from '@/components/FilpCard.vue'

export default {
  name: 'Home',
  components: {
    FilpCard,
    HelloWorld
  }
}
</script>

<style lang="sass">
  @import @/assets/sass/_reset
  @import @/assets/sass/_page


</style>