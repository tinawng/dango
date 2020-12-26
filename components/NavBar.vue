<template>
  <div class="absolute w-full h-24 top-0 flex justify-between">
    <div class="w-1/4 flex-center">
      <img class="h-16 w-16" src="~/assets/images/dango.png" />
      <span class="text-2xl font-bold">Dango</span>
    </div>
    <div class="w-1/4 flex-center">
      <button v-ripple="{ center: false }">login</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>