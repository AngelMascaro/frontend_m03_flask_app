import { createStore } from 'vuex'

export default createStore({
  state: {
    userState: {
      loggedIn: false,
      user: null,
      token: null
    },
  },
  getters: {
    loggedIn(state) {
      return state.userState.loggedIn
    },
    user(state) {
      return state.userState.user
    },
    token(state) {
      return state.userState.token
    }
  },
  mutations: {
    login(state, payload) {
      state.userState.loggedIn = true
      state.userState.user = payload.user
      state.userState.token = payload.token
    },
    logout(state) {
      state.userState.loggedIn = false
      state.userState.user = null
      state.userState.token = null
    }
  },
  actions: {
    loginAction(context, payload) {
      context.commit('login', payload)
    },
    logoutAction(context, payload) {
      context.commit('logout', payload)
    }

  }
})
