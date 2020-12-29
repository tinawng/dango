export const state = () => ({
  token: undefined,
  user: undefined
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
    this.$http.setToken(token, "Bearer");
  },
  setUser(state, user) {
    state.user = user;
  }
}

export const getters = {
  isAuth: state => {
    return state.token != undefined && state.user != undefined;
  }
}
