<template>
  <div>
    <FlipCard />
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue'
export default {
  name: 'Home',
  components: {
    FlipCard
  }
}
</script>

<style lang="sass">
  @import @/assets/sass/_reset
  @import @/assets/sass/_page

</style>
