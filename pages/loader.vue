<template>
  <div>
    <initloader :loop="true"></initloader>
  </div>
</template>

<script>
import initloader from '~/components/initloader.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    initloader
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },

  layout: 'default_loader',
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

<style>

</style>
