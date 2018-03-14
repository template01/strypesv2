<template>
<div id="menuOpenWrapper" class="">
  <headercomp :menuversion="true"></headercomp>
  <div id="menuOpenInner" style="padding-top:255px;" class="container p-80">
    <div id="main-nav">
      <div class="columns">
        <div class="column">
          <p class="flex-container space-between">
            <span class="menuItemWrapper" v-for="(item,index) in mainnav" @mouseenter="setActive(index)" @mouseleave="setDeactive(index)">
              <span class="nav-item is-size-1 has-underline-1" :style="item.active ? {}:{'border-color':'transparent'}">
                {{item.main}}
              </span>
            <span class="pt-20 desc is-size-4">
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
      <p class="is-size-4">
        <span class="mr-40 has-underline-4">Home</span>
        <span class="mr-40">Contact</span>
        <span class="mr-20 has-underline-4">nl</span>
        <span class="">en</span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import headercomp from '~/components/header.vue'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    headercomp,
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
            padding-bottom: 160px;
        }
        #main-nav {
            position: relative;
            top: calc(50% - 80px);
            transform: translateY(-50%);
            .nav-item {
                display: inline-block;
                cursor: pointer;
            }

            .flex-container {
                padding: 0;
                margin: 0;
                list-style: none;
                display: flex;
            }
            .space-between {
                justify-content: space-between;
            }
            .column {
                position: relative;
                transition: color 0.5s, border 0.5s;
                .desc {
                    opacity: 0;
                    overflow: hidden;
                    position: absolute;
                    left: 0;
                    top: 70px;
                    transform: translateY(-10px);
                    transition: transform 1s, opacity 0.25s;
                }
                .menuItemWrapper{
                  min-width: 200px;
                  position: relative;
                }
                .menuItemWrapper:hover {
                    color: $white;
                    .desc {
                        opacity: 1;
                        transition-delay: 0.1s;

                        transform: translateY(0px);

                    }
                }
            }
        }
    }
}
</style>
