<template>
  <div class="flex-vertical-center-x">
    <h1 class="w-3/4 my-4">📂 Directories</h1>
    <div class="w-3/4 my-2 flex flex-wrap">
      <div
        v-for="(dir, index) in directories"
        :key="dir"
        :class="['w-1/2 my-2', index % 2 ? 'pl-2' : 'pr-2']"
      >
        <NuxtLink :to="'/list/' + current_route + dir + '/'">
          <div
            class="h-28 border transition-shadow shadow-md hover:shadow-lg flex-center"
          >
            <b>{{ dir }}</b>
          </div>
        </NuxtLink>
      </div>
    </div>
    <h1 class="w-3/4 my-4">🎞️ Movies</h1>
    <div
      v-for="movie in movies"
      :key="movie"
      class="w-3/4 my-2 py-4 border transition-shadow shadow-md hover:shadow-lg text-center"
    >
      <NuxtLink :to="'/stream/' + current_route + movie">
        {{ movie }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",

  async asyncData({ $http, params }) {
    let path = params.pathMatch;
    path += path.endsWith("/") ? "" : "/";
    const { movies, directories } = await $http.$get("/dango/list/" + path);
    return { movies, directories };
  },

  computed: {
    current_route() {
      // 🩹 Since env vars are not accessible from middleware server
      return this.$nuxt.$route.path.replace("/list/", "");
    },
  },
};
</script>

<style>
</style>