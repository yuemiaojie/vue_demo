<template>
  <div>
    <div class="home-content">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            v-for="(v, i) in banners"
            :key="i"
            class="swiper-slide"
          >
            <img
              :src="v.pic"
              class="banner"
              alt=""
            >
            <h2
              data-swiper-parallax="-150"
              data-swiper-parallax-duration="800"
              data-swiper-parallax-opacity="0.2"
            >
              {{ v.tit }}
            </h2>
            <div
              data-swiper-parallax="-130"
              data-swiper-parallax-duration="800"
              data-swiper-parallax-opacity="0.2"
              class="slide-desc"
            >
              {{ v.desc }}
            </div>
          </div>
        </div>
        <div
          class="pre-slide theme-color"
          @click="slidePre"
        >
          <i
            class="el-icon-arrow-left"
            text="111"
          />
        </div>
        <div
          class="next-slide theme-color"
          @click="slideNext"
        >
          <i class="el-icon-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Home',
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  props: '',
  data() {
    return {
      banners: [
        {
          pic: require('@assets/images/event_1_large.jpg'),
          tit: '没有什么理由放弃',
          desc: '每天迎着清晨的第一缕阳光，乘坐最早的一班公交，每个奋斗的人都在使出浑身解数，沿途只见早起的上班族，等着校车的小学生，骑着电动车上班的农民工，和他们捡起掉落在地上沉沉的矿泉水，好像没有什么理由不努力，因为每个人都在和生活做博弈。'
        },
        {
          pic: require('@assets/images/event_2_large.jpg'),
          tit: '世界的每一处角落都是那么的美好',
          desc: '我们在地球上，扮演着不同的角色，但保护地球，是我们共同肩负的责任，可口可乐相信，当我们一起坚持在乎的态度，在乎地球的美，地球上的每一个角落，都将成为更好的存在。'
        },
        {
          pic: require('@assets/images/event_3_large.jpg'),
          tit: '发现美',
          desc: '生活中打动我们的，往往是那些细小而美好的事物：一朵灿烂的小花，一片洁白的云朵，一个会心的微笑，一句暖心的话语，一张天真的笑脸，一个深情的拥抱.......这些美好的瞬间，决定了我们人生的幸福感。正是这些心有所感的瞬间，闪耀着温暖的光芒，穿透每个平凡琐碎的日常，让我们在柴米油盐酱醋茶中发现了生活中的美。'
        },
        {
          pic: require('@assets/images/event_4_large.jpg'),
          tit: '你永远独一无二',
          desc: '你在我心中永远是独一无二的存在，我爱的也只是这世上唯一的你。也许以后，你还是会把我丢在家里，一个人面对着空荡的客厅发呆。可是，我知道，无论你走多远，都会记得回家的路。因为，这一生，我们注定要一起走下去。'
        },
        {
          pic: require('@assets/images/event_5_large.jpg'),
          tit: '时常感恩',
          desc: '愉快的事情会充满你的内心，你的全身；为什么还要去在乎那些不愉快的事情呢？人的精力是有限的，生命也很宝贵，一定要关注真正值得关注的东西呢！把注意力放在值得感恩的事情上，会让你看到很多很多生活的美好之处。'
        }
      ],
      swiperOption: {
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: '1.2',
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        parallax: true,
        on: {}
      }
    }
  },
  computed: {
  },
  created() { },
  mounted() {
  },
  methods: {
    slidePre() {
      this.mySwiper.slidePrev()
    },
    slideNext() {
      this.mySwiper.slideNext()
    }
  }
}
</script>

<style lang="scss" scoped>
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
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
.pre-slide {
  left: 10px;
}
.next-slide {
  right: 10px;
}
.slide-desc {
  text-decoration: underline;
}
</style>
