<template>
  <div class="flex-vertical-center text-steel-800">
    <div
      class="h-28 w-28 bg-white transition-shadow shadow-md hover:shadow-xl flex-center rounded-15"
      v-ripple="{ center: false, }"
    >
      <img class="h-16 w-16" :src="require(`~/assets/images/${image}`)" />
    </div>
    <span class="mt-4 title text-3xl font-semibold">{{ name }}</span>
    <span class="text-lg font-light">{{ baseline }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "baseline", "image"],
};
</script>

<style scoped>
.title {
  /* color: #35495e; */
  letter-spacing: 1px;
}
.shadow-3xl {
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
}
</style>