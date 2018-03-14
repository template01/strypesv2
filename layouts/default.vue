<template>
<div>
  <transition name="fade">
    <initloader v-if="!appinitatedloader"></initloader>
  </transition>
  <transition name="fade">
    <menuopencomp class="is-hidden-touch" v-if="menuopened"></menuopencomp>
  </transition>
  <transition name="fade">
    <menuopencompmobile class="is-hidden-desktop" v-if="menuopened"></menuopencompmobile>
  </transition>



  <headercomp class="is-hidden-touch"></headercomp>
  <headercompmobile class="is-hidden-desktop"></headercompmobile>
  <nuxt :style="nuxtpaddingtop"></nuxt>
</div>
</template>
<script>
import initloader from '~/components/initloader.vue'
import headercomp from '~/components/header.vue'
import headercompmobile from '~/components/headermobile.vue'
import menuopencomp from '~/components/menuOpenComp.vue'
import menuopencompmobile from '~/components/menuOpenCompmobile.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  data: function() {
    return {
      mobilepaddingtop: {
        'padding-top': '65px'
      },
      desktoppaddingtop: {
        'padding-top': '255px'
      },
    }
  },
    components: {
        initloader,
        headercomp,
        headercompmobile,
        menuopencomp,
        menuopencompmobile
      },
      computed: {
        ...mapGetters({
          appinitated: "GET_APP_INITIATED",
          appinitatedloader: "GET_APP_INITIATEDLOADER",
          menuopened: "GET_APP_MENUOPENED",
        }),
        nuxtpaddingtop: function() {
          if(this.screensize==='is-screen-s' || this.screensize==='is-screen-m'){
            return this.mobilepaddingtop
          }else{
            return this.desktoppaddingtop
          }
        }
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
