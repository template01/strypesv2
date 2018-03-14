<template>
<div id="headerComp" class="" v-sticky="{ zIndex: 998, stickyTop: 0 }" :class="menuversion ? 'menuversion':''">
  <div id="headerSolidWrapper" :style="{'height':headerSolidHeight+'px'}" :class="{headerSolid:setHeaderSolid}">

    <div class="container">
      <div id="outerHeader" class="container pr-80 pl-80 ">

        <div id="innerHeader">
          <div id="logoTypeHeaderWrapper" class="">

            <p v-if="menuversion" class="logoTypeHeader is-size-4-touch is-size-2-desktop">
              <span class="has-text-white ">Strypes</span><span class="pl-40  has-text-primary  is-hidden-touch">Samen technologie.</span>
            </p>
            <p v-else class="logoTypeHeader  is-size-4-touch is-size-2-desktop">
              <span class="has-text-danger">Strypes</span><span class="pl-40 has-text-primary  is-hidden-touch">Samen technologie.</span>
            </p>

          </div>
          <div id="stripesWrapper">
            <div id="stripes" :class="menuversion ? 'menuversion':''" @click="toggleMenu()">
              <div class="line">
                <div :style="{'height':100/stripes+'%','top':(100/stripes)*index+'%'}" v-for="(stripe, index) in stripes" class="square el" :class="menuversion ? 'menuversion':''">
                  <div class="inner" :class="menuversion ? 'menuversion':''">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import VueSticky from 'vue-sticky' // Es6 module



export default {
  props: ['menuversion'],
  directives: {
    'sticky': VueSticky,
  },
  data: function() {
    return {
      headerOffsetTopInit: 65,
      headerOffsetTop: 65,
      headerSolidHeight: 0,
      savedScrollY: 0,
      setHeaderSolid: false,
      stripes: 5,
      genericData: 'generic component text'
    }
  },

  methods: {


    toggleMenu: function() {

      if (this.menuversion) {

        this.$store.commit('SET_MENUOPENED', false)

        document.documentElement.style.overflow = 'auto'


        window.scroll({
          top: this.scrollymenu,
          left: 0,
          behavior: 'smooth'
        });



      } else {

        this.$store.commit('SET_SCROLLYMENU', window.scrollY)

        document.documentElement.style.overflow = 'hidden'

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });


        this.$store.commit('SET_MENUOPENED', true)



      }
    }
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
      scrollymenu: "GET_SCROLLYMENY",
    }),
  },
  mounted() {
    var vm = this
    window.addEventListener('scroll', _.throttle(() => {
      if (window.scrollY <= vm.headerOffsetTopInit) {
        vm.headerOffsetTop = vm.headerOffsetTopInit - window.scrollY
        vm.headerSolidHeight = 0
        vm.setHeaderSolid = false

      } else {
        vm.headerOffsetTop = 0
        vm.setHeaderSolid = true
        vm.headerSolidHeight = vm.$el.querySelector("#innerHeader").offsetHeight
        // vm.setHeaderSolid = false
      }
    }, 10))
  }

}
</script>
<style scoped lang="scss">
#headerComp {
    &.menuversion {
        height: 0;
        .headerSolid {
            background: transparent;
            box-shadow: 0 0 0 0 rgba(11,34,86,0.10);
        }
    }
}
#headerSolidWrapper {
    transition: box-shadow 0.05s;
    &.headerSolid {
        background: $grey;
        box-shadow: 0 2px 5px 0 rgba(11,34,86,0.10);
    }
}
#outerHeader {
    position: absolute;
    top: 0;
    z-index: 998;
    width: 100%;

    #innerHeader {
        position: relative;

        display: inline-block;
        width: 100%;
    }

    .logoTypeHeader {}

    #stripesWrapper {
        // position: absolute;
        width: 30px;
        float: right;
    }

    #logoTypeHeaderWrapper {
        float: left;
        overflow: hidden;
        position: absolute;
        padding-bottom: 4px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        .logoTypeHeader {
            display: block;
        }

    }
}

#stripes {
    width: 100%;
    overflow: hidden;
    height: 55px;
    position: relative;
    cursor: pointer;
    .el {
        transition: width 250ms;
    }
    &:hover {
        .el {
            &:nth-of-type(2) {
                width: 0;
            }
            &:nth-of-type(4) {
                width: 0;
            }
        }
    }

    &.menuversion {

        &:hover {
            .el {
                &:nth-of-type(2) {
                    width: 100%;
                }
                &:nth-of-type(4) {
                    width: 100%;
                }
            }
        }
    }
}
.el {
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
    position: absolute;
    height: 10%;
    &:first-of-type {
        opacity: 0;
    }
    &:last-of-type {
        opacity: 0;
    }
    &.menuversion {
        &:nth-of-type(2) {
            width: 0;
        }
        &:nth-of-type(4) {
            width: 0;
        }
    }
    .inner {

        background: $orange;
        width: 100%;
        height: 100%;
        &.menuversion {
            background: $white;
        }
    }

}
</style>
