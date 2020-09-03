<template>
  <div id="home-wrap">
    <router-link :to="{path: '/excel/2'}">跳转至excel</router-link>
    <div v-swiper:mySwiper="swiperOption" v-if="banners.length > 0">
      <div class="swiper-wrapper">
        <div v-for="(v, i) in banners" :key="i" class="swiper-slide">
          <img :src="v.pic" class="banner" alt="">
          <div class="desc-wrap">
            <h2 data-swiper-parallax-opacity="0.2">
              {{ v.tit }}
            </h2>
            <div data-swiper-parallax-opacity="0.2" class="slide-desc">
              {{ v.desc }}
            </div>
          </div>
        </div>
      </div>
      <div class="pre-slide theme-color" @click="slidePre">
        <i class="el-icon-arrow-left" text="111" />
      </div>
      <div class="next-slide theme-color" @click="slideNext">
        <i class="el-icon-arrow-right" />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import api from '@api'
export default {
  name: 'Home',
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  props: '',
  data() {
    return {
      banners: [],
      a: 2,
      banners01: this,
      swiperOption: {
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: '1.2',
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        parallax: true,
        updateOnImagesReady: true,
        speed: 1000,
        on: {}
      }
    }
  },
  created() {
    this.getHomeBannerData()
  },
  mounted() {
  },
  methods: {
    slidePre() {
      this.mySwiper.slidePrev()
    },
    slideNext() {
      this.mySwiper.slideNext()
    },
    async getHomeBannerData() {
      this.$loading()
      const headers = { isEmpty: true }
      const res = await api.get('homeBanner', null, { headers })
      this.banners = res
      this.$loading().close()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  .swiper-slide {
    min-height: 300px;
  }
  .swiper-slide .banner {
    overflow: hidden;
    border-radius: 10px;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    background-position: left top;
    background-size: auto 100%;
  }
  .slide-desc {
    text-decoration: underline;
    margin-top: 2px;
  }
  .desc-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    padding: 15px 10px 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.pre-slide,
.next-slide {
  position: absolute;
  z-index: 666;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px 11.5px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  cursor: pointer;
  font-weight: bold;
}
.pre-slide:hover,
.next-slide:hover {
  box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.pre-slide {
  left: 10px;
}
.next-slide {
  right: 10px;
}
</style>
