<template>
  <div class="flex-vertical-center-x">
    <h1 class="w-3/4 my-4">📂 Directories</h1>
    <div class="w-3/4 my-2 flex flex-wrap">
      <div
        v-for="(dir, index) in directories"
        :key="dir"
        :class="['w-1/2 my-2', index % 2 ? 'pl-2' : 'pr-2']"
        v-ripple="{ center: false }"
      >
        <NuxtLink :to="'/list/' + current_route + dir + '/'">
          <div
            class="h-28 border rounded-md transition-shadow shadow-md hover:shadow-lg flex-center"
          >
            <b>{{ dir }}</b>
          </div>
        </NuxtLink>
      </div>
    </div>
    <h1 class="w-3/4 my-4">🎞️ Movies</h1>
    <div v-for="movie in movies" :key="movie" class="w-3/4">
      <NuxtLink :to="'/stream/' + current_route + movie">
        <div
          class="my-2 py-4 border rounded-md transition-shadow shadow-md hover:shadow-lg block whitespace-nowrap overflow-ellipsis overflow-hidden text-center portrait:text-xs"
          v-ripple="{ center: false }"
        >
          {{ purifyTitle(movie) }}
        </div>
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

  methods: {
    purifyTitle(title) {
      // Resolutions
      var res = title.replace(/1080p|720p|480p/gi, "");
      // Codecs
      res = res.replace(/h264|x264|x265/gi, "");
      // // Formats
      res = res.replace(/avi|mkv|mp4|wmv/gi, "");
      // // Tags
      res = res.replace(
        /pophd|multi|bluray|brrip|hdlight|xvid|60fps|ac3|notag|xantar|hush|xxx|acool|akatsuki|unrated|10bits|eaulive|eauve|hevc|sn2p|venue|rdh|dts|hd|sd/gi,
        ""
      );
      // Other specials characters
      res = res.replace(/[^a-zA-Z0-9\s]/g, " ");
      return res;
    },
  },
};
</script>

<style>
</style>