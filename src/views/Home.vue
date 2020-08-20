<template>
  <div>
    <FilpCard />
  </div>
</template>

<script>
import FilpCard from '@/components/FilpCard.vue'

export default {
  name: 'Home',
  components: {
    FilpCard,
  }
}
</script>

<style lang="sass">
  @import @/assets/sass/_reset
  @import @/assets/sass/_page


</style>