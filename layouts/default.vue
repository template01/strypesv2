<template>
<div >
  <transition name="fade">
    <!-- <initloader v-if="!appinitatedloader"></initloader> -->
  </transition>
  <transition name="fade">
    <menuopencomp v-if="menuopened"></menuopencomp>
  </transition>
  <headercomp></headercomp>

    <nuxt style="padding-top:255px;"></nuxt>
</div>
</template>
<script>
import initloader from '~/components/initloader.vue'
import headercomp from '~/components/header.vue'
import menuopencomp from '~/components/menuOpenComp.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    initloader,
    headercomp,
    menuopencomp
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
      appinitatedloader: "GET_APP_INITIATEDLOADER",
      menuopened: "GET_APP_MENUOPENED",
    }),
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {


    // GET POSTS START
    // if (store.state.posts.length == 0) {
    //   const postsRes = await axios.get(store.state.apiRoot + '/posts')
    //   store.commit('SET_POSTS', postsRes.data)
    // }

    // RETURN DATA DIRECTLY
    // return { title: 'blah blah blah' }


  },


}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

  {
  opacity: 0;
}

.inititLoader {
  background: #0a2155;
  height: 100vh;
}
</style>
