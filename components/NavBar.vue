<template>
  <div class="absolute w-full h-24 top-0 flex justify-between">
    <div class="w-1/4 flex-center">
      <img class="h-16 w-16" src="~/assets/images/dango.png" />
      <span class="text-2xl font-bold">Dango</span>
    </div>

    <div class="w-1/4 flex-center" v-click-outside="shakeButton">
      <button
        v-if="!is_auth"
        :class="{ shake }"
        v-ripple="{ center: false }"
        @click="show = !show"
      >
        login
      </button>
      <b v-else class="uppercase">👋 Hello {{ user.name }}</b>
    </div>

    <transition name="slide-fade">
      <login-panel v-if="show && !is_auth" class="absolute top-0 right-0" />
    </transition>
  </div>
</template>

<script>
import LoginPanel from "./LoginPanel.vue";
export default {
  data: () => ({
    show: false,
    shake: false,
  }),
  
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    is_auth() {
      return this.$store.getters["auth/isAuth"];
    },
  },

  methods: {
    shakeButton() {
      const self = this;
      self.shake = true;
      setTimeout(() => {
        self.shake = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
</style>