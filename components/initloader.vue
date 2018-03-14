<template>
<div class="inititLoader">
  <div class="">
    <div class="container">
      <div id="outerHeader" class="container   pr-80 pl-80 ">
        <div id="innerHeader" :class="{ innerHeaderSlideUp: slideUpMenu }">
          <div id="logoTypeHeaderWrapper" class="mb-40" :class="{ logoTypeHeaderWrapperSlideUp: slideUpMenu }">
            <img :class="{ initLogotypeClass: initLogotype }" class="logoTypeHeader" :src="'strypes_testlogo_orange.svg'" /></div>
          <div :style="{'width':widthStripesData +'px'}" id="stripesWrapper" class="">
            <div class="" id="stripes" :class="{ stripesSlideUp: slideUpMenu }">
              <div class="line">
                <div :style="{'height':100/stripes+'%','top':(100/stripes)*index+'%'}" v-for="(stripe, index) in stripes" class="square el" :class="'el'+index">
                  <div class="inner">

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

import anime from 'animejs'

export default {
  props: ['loop'],
  data: function() {
    return {
      stripes: 5,
      duration: 3000,
      apploaded: false,
      initLogotype: false,
      widthStripesData: 0,
      menuComposeFin: [],
      slideUpMenu: false,
      genericData: 'generic component text',
    }
  },
  methods: {
    widthStripes: function() {
      // this.widthStripesData = 0
      // this.widthStripesData = this.$el.querySelector("#outerHeader").clientWidth
      this.widthStripesData = this.$el.querySelector("#innerHeader").clientWidth
    },
    randdelay: function() {
      return (Math.random() * 1) * this.duration / 2 / this.stripes;
    },
    runIntroLogotype: function() {
      this.initLogotype = true
    },
    runAnime: function(itemNumber) {
      var vm = this
      var basicTimeline = anime({
        easing: [0.42, 0, 0.58, 1],
        // loop: true,
        targets: '#stripes .el' + itemNumber,
        width: '100%',
        left: '100%',
        opacity: '1',
        duration: vm.duration,
        delay: function(el, i, l) {
          return vm.randdelay() * 5;
        },
        complete: function(anim) {
          if (!vm.loop) {
            if (!vm.appinitated) {
              anim.restart()
            } else {
              if (itemNumber > 0 && itemNumber < vm.stripes - 1) {
                vm.runEndAnime(itemNumber)
              }
            }
          } else {
            anim.restart()
          }

        }

      })
    },
    runEndAnime: function(itemNumber) {
      var vm = this
      var basicTimeline = anime({
        easing: [0.42, 0, 0.58, 1],
        // loop: true,
        targets: '#stripes .el' + itemNumber,
        width: vm.getmenuwidth+'px',
        left: vm.widthStripesData - vm.getmenuwidth + 'px',
        opacity: '1',
        duration: 250,
        complete: function(anim) {
          // console.log(itemNumber)
          setTimeout(function() {
            vm.menuComposeFin.push('fin')
            if (vm.menuComposeFin.length === 3) {
              vm.slideUpMenu = true
              setTimeout(function() {
                vm.$store.commit('SET_APPINITLOADER', 'true')
              }, 550)

            }
          }, 250)
        }

      })
    },
  },
  mounted() {
    this.runIntroLogotype()
    this.widthStripes()
    var vm = this
    // window.setTimeout(function() {
    vm.runAnime(0)
    vm.runAnime(1)
    vm.runAnime(2)
    vm.runAnime(3)
    vm.runAnime(4)
    // })

  },
  computed: {
    getmenuwidth: function() {
      if(this.screensize==='is-screen-s' || this.screensize==='is-screen-m'){
        return '30'
      }else{
        return '35'
      }
    },

    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  // watch: {
  //   'appinitated': function() {
  //     this.apploaded = true
  //   }
  // }

}
</script>
<style scoped lang="scss">
.inititLoader {
    background: #0a2155;
    z-index: 999;
    width: 100%;
    height: 110%;
    position: fixed;

}
#outerHeader {
    position: fixed;
    height: 100%;
    width: 100%;
    #innerHeader {
        position: relative;
        top: 50%;
        transform: perspective(1px) translateY(-50%);
        transition: all 0.5s;
        &.innerHeaderSlideUp {
            top: 120px;
            transform: translateY(0%);
        }

        @media only screen and (max-width: 1023px) {
          &.innerHeaderSlideUp {
              top: 0;
          }
        }

    }

    .logoTypeHeader {
        max-width: 260px;
        width: 25%;
        // width: 100%;
    }

    @media only screen and (max-width: 1023px) {
        .logoTypeHeader {
            width:240px;
        }
    }

    #stripesWrapper {
        // position: absolute;
        width: 300px;
    }

    #logoTypeHeaderWrapper {
        overflow: hidden;
        max-height: 500px;
        .logoTypeHeader {
            transition: transform 1s;
            // transform: translateX(-100%);
        }
        .initLogotypeClass {
            // transform: translateX(0%);

        }
        transition: all 0.25s;
        &.logoTypeHeaderWrapperSlideUp {
            margin: 0;
            max-height: 0;
        }
    }
}

#stripes {
    width: 100%;
    overflow: hidden;
    height: 95px;
    position: relative;

    &.stripesSlideUp {
        height: 65px;
        .el {
            &:first-of-type {}
            padding-top: 4px;
            padding-bottom: 4px;
        }
    }

    @media only screen and (max-width: 1023px) {
      &.stripesSlideUp {
          height: 55px;
      }
    }

}
.line {}
.el {
    width: 100%;
    left: -100%;
    padding-top: 6px;
    padding-bottom: 6px;
    position: absolute;
    // height: 10%;
    .inner {
        background: $orange;
        width: 100%;
        height: 100%;

    }
}
</style>
