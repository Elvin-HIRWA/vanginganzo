import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: null,
    permissionName: null,
    userID: null,
    urlPath: null,
    userName: "hello"
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token') && localStorage.getItem('permissionName') && localStorage.getItem('userID') && localStorage.getItem('urlPath') && localStorage.getItem('userName')) {
        state.token = localStorage.getItem('token')
        state.permissionName = localStorage.getItem('permissionName')
        state.userID = localStorage.getItem('userID')
        state.userName = localStorage.getItem('userName')
        state.urlPath = localStorage.getItem('urlPath')
        state.isAuthenticated = true
      } else {
        state.token = null
        state.permissionName = null
        state.userID = null
        state.isAuthenticated = false
      }
    },
    // setUrlPath(state, urlPath) {
    //   state.urlPath = urlPath
    // },
    setUserName(state, userName) {
      state.userName = userName
      state.isAuthenticated = true
    },
    removeUserName(state) {
      localStorage.removeItem('userName')
      state.userID = null
      state.isAuthenticated = false
    },
    setUserID(state, userID) {
      state.userID = userID
      state.isAuthenticated = true
    },
    removeUserID(state) {
      localStorage.removeItem('userID')
      state.userID = null
      state.isAuthenticated = false
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    setPermissionName(state, permissionName) {
      state.permissionName = permissionName
      state.isAuthenticated = true
    },
    removeToken(state) {
      localStorage.removeItem('token')
      state.token = null
      state.isAuthenticated = false
    },
    removePermissionName(state) {
      localStorage.removeItem('permissionName')
      state.permissionName = null
      state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})
