<template>
<div id="menuOpenWrapper" class="">
  <headercompmobile :menuversion="true"></headercompmobile>
  <div id="menuOpenInner" style="padding-top:65px;"  class="container p-80">
    <div id="main-nav">
      <div class="columns pt-80">
        <div class="column">
          <p class="">
            <span class="menuItemWrapper" v-for="(item,index) in mainnav" @mouseenter="setActive(index)" @mouseleave="setDeactive(index)">
              <span class="nav-item is-size-4 has-underline-3" :style="item.active ? {}:{'border-color':'transparent'}">
                {{item.main}}
              </span>
            <span class="desc">
                {{item.desc}}
              </span>

            </span>

          </p>

        </div>
      </div>
      <!-- <div class="columns">
        <div v-for="(item,index) in mainnav" class="column" @mouseenter="setActive(index)" @mouseleave="setDeactive(index)">
          <p class="nav-item is-size-1 has-underline-1" :style="item.active ? {}:{'border-color':'transparent'}">
            {{item.main}}
          </p>
          <p class="pt-20 desc is-size-4">
            {{item.desc}}
          </p>
        </div>

      </div> -->
    </div>

    <div id="bottom-nav">
      <p class="is-size-5">
        <span class="mr-40 has-underline-5">Home</span>
        <span class="mr-40">Contact</span>
        <span class="mr-20 has-underline-5">nl</span>
        <span class="">en</span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import headercompmobile from '~/components/headermobile.vue'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    headercompmobile,
  },
  props: [],
  data: function() {
    return {
      genericData: 'generic component text',
      mainnav: [{
        'main': 'Over',
        'desc': 'Het DNA en het team van Strypes.',
        'active': false
      }, {
        'main': 'Diensten',
        'desc': 'Inzicht in onze projecten.',
        'active': false
      }, {
        'main': 'Jobs',
        'desc': 'Werken in een inspirerende werkomgeving.',
        'active': false
      }, {
        'main': 'Blog',
        'desc': 'Blijf op de hoogte.',
        'active': false
      }]
    }
  },
  methods: {
    setActive: function(index) {
      // this.mainnav[index]/
      this.$set(this.mainnav[index], 'active', true)
    },
    setDeactive: function(index) {
      // this.mainnav[index]/
      this.$set(this.mainnav[index], 'active', false)
    }
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style scoped lang="scss">
// @import '../assets/scss/variables.scss';
#menuOpenWrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background: $orange;
    z-index: 999;

    .is-size-4 {
        line-height: 1.15;
    }
    #menuOpenInner {
        height: 100%;
        #bottom-nav {
            position: absolute;
            bottom: 0;
            padding-bottom: 26px;
        }
        #main-nav {
          .menuItemWrapper{
            display: block;
            margin-bottom: 5px;
          }
            position: relative;

            .nav-item {
                width: 100%;
                display: inline-block;
                cursor: pointer;
            }
            .column {
                position: relative;
                transition: color 0.5s, border 0.5s;

            }
        }
    }
}
</style>
