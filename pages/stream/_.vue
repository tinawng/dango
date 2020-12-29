<template>
  <div>
    <video controls>
      <source :src="backend_url + '/dango/stream/' + file + '?auth_token=' + token" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  // middleware: "authenticated",

  async asyncData({ params }) {
    return { file: params.pathMatch };
  },

  computed: {
    backend_url() {
      // 🩹 Since env vars are not accessible from middleware server
      return this.$http._defaults.prefixUrl;
    },
    token() {
      return this.$store.state.auth.token;
    },
  },
};
</script>

<style>
</style>