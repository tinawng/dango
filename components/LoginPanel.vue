<template>
  <div class="m-4 pt-4 w-64 rounded-lg shadow-xl flex-center bg-white">
    <form
      :action="backend_url + '/auth/login'"
      method="POST"
      class="w-full"
      v-on:submit.prevent="onSubmit"
    >
      <p>
        <input type="text" v-model="login" name="login" placeholder="Login" />
      </p>
      <p>
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
      </p>
      <p>
        <input v-ripple="{ center: false }" type="submit" value="🔓" />
      </p>
      <p v-if="err">❌ Wrong user</p>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    backend_url() {
      return process.env.BACKEND_URL;
    },
  },

  data: () => ({
    login: "",
    password: "",
    err: false,
  }),

  methods: {
    async onSubmit() {
      try {
        // 🥅 Handle error
        this.$http.onError((error) => {
          if (error.statusCode == 401) {
            this.err = true;
          }
        });

        // 🚀 Submit login infos
        const { token, user } = await this.$http.$post("/auth/login", {
          name: this.login.toLowerCase(),
          password: this.password,
        });

        // 🗃️ Store token & user datas
        this.$store.commit("auth/setToken", token);
        this.$store.commit("auth/setUser", user);
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
};
</script>

<style>
</style>
