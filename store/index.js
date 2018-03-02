import axios from 'axios'

export const state = () => ({
  appinitated: false,
  appinitatedloader: false,
  apiRoot: 'https://jsonplaceholder.typicode.com',
  posts: [],
  previewData: [],
  menuopened: false,
  screensize: 0,
  screensizeformat: null,
  scrollYMenu: 0,
})

//
// function checkReadmore(){
//   if (window.location.hash === '#read') {
//     return true;
//   }else{
//     return false;
//   }
// }
// this.$store.commit('SET_READMORE', true)


export const getters = {

  GET_SCROLLYMENY(state) {
    return state.scrollYMenu
  },

  GET_APP_INITIATED(state) {
    return state.appinitated
  },

  GET_APP_INITIATEDLOADER(state) {
    return state.appinitatedloader
  },

  GET_APP_MENUOPENED(state) {
    return state.menuopened
  },


  GET_SCREENSIZE(state) {
    return state.screensizeformat
  },

  GET_POSTS(state) {
    return state.posts
  },

  GET_PREVIEWDATA(state) {
    return state.previewData
  },
}

export const mutations = {

  SET_PREVIEWDATA(state, previewData) {
    state.previewData = previewData;
  },


  SET_SCROLLYMENU(state, posY) {
    state.scrollYMenu = posY;
  },

  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_MENUOPENED(state, toggle) {
    state.menuopened = toggle;
  },

  SET_APPINITIATED(state, toggle) {
    state.appinitated = toggle;
  },

  SET_APPINITLOADER(state, toggle) {
    state.appinitatedloader = toggle;
  },


  SET_SCREENSIZEFORMAT(state, screensizeformat) {
    state.screensizeformat = screensizeformat;
  },

}

// LOAD INITIAL DATA

export const actions = {
  async nuxtServerInit({
    commit,
    state
  }, {
    req
  }) {

    const postsRes = await axios.get(state.apiRoot + '/posts')
    state.posts = postsRes.data
  }
}
