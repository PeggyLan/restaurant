<template>
<!-- Make a div wrapped slider,set height and width -->
<div id="Home" class="vh-25 row m-0">
  <div class="overflow-hidden">
    <div style="width:100vw;" class="column carousel">
      <lottie-player
        class="scroll"
        :src="lottie"
        :options="{
          autoplay: true,
          loop:true,
          speed: 1,
          width: '50px',
          height: '50px'
        }"
        />
      <!-- Using the slider component -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
      </slider>
      <!-- <div id="go-to-top" class="animated bounce" style="animation-duration: 3s;">
            <a href="#new">
              <font-awesome-icon :icon="['fas','angle-down']" size="1x"></font-awesome-icon></a>
      </div> -->
    </div>
  </div>
  <div class="new d-flex align-items-center justify-content-center">
        <h1 class="text-white font-weight-bold">Now News !</h1>
        <div class="ad d-flex justify-content-center flex-wrap">
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_335.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【父親節七夕首選】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_334.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【吃夏趣】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_333.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【暑假限定】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_332.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【道地美式餐盒】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_331.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【迎接畢業季】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
              <router-link to="/news">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_330.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">【新蔬食運動】</h4>
                    </div>
                  </div>
              </router-link>
            </div>
        </div>
      </div>
      <footer class="text-center d-flex justify-content-center align-items-center">
      <div class="copyright">
        Copyright © 2020 Peggy's Restaurant
      </div>
      <div class="social">
          <a href="https://www.facebook.com/tsvts/">
            <img src="../../public/img/fb.png" width="30">
          </a>
          <a href="https://www.facebook.com/tsvts/">
            <img src="../../public/img/ig.png" width="30">
          </a>
          <a href="http://line.me/ti/p/@797lbdfu">
            <img src="../../public/img/line.png" width="30">
          </a>
      </div>
    </footer>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data () {
    return {
      lottie: 'https://assets10.lottiefiles.com/packages/lf20_nEykVY.json',
      // data list [array]
      someList: [
        {
          // html: 'slider1',
          style: {
            background: 'url(https://www.thatsmags.com/image/view/201706/TGIF_Nashville_2012__0140_F.jpg)',
            backgroundSize: 'cover'
          }
        },
        {
          // html: 'slider2',
          style: {
            background: 'url(https://www.upmedia.mg/upload/article/20200409145956273631.jpg)',
            backgroundSize: 'cover'
          }
        },
        {
          // html: 'slider3',
          style: {
            background: 'url(https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-9/37416541_10156326767978280_1211289143791845376_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=5thsZ1JOwIwAX9nRVSE&_nc_ht=scontent.ftpe7-2.fna&oh=048c75741c5aa59d2815fc4d3981cfb8&oe=5F4028B2)',
            backgroundSize: 'cover'
          }
        },
        {
          // html: 'slide4',
          style: {
            background: 'url(https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/78644301_2877304695637732_5698958406748995584_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=CdiypgPAxYoAX8gEDCh&_nc_ht=scontent.ftpe7-4.fna&oh=b30e90dc605dc7de62b043bfe9e3bd42&oe=5F3F621D)',
            backgroundSize: 'cover'
          }
        },
        {
          // html: 'slide5',
          style: {
            background: 'url(https://imgs.gvm.com.tw/upload/gallery/oimg22/22929_01.jpg)',
            backgroundSize: 'cover'
          }
        },
        {
          // html: 'slide6',
          style: {
            background: 'url(https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/66743836_10161784115600447_5790193562339508224_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=m5cLJikXGlAAX_fweTE&_nc_ht=scontent.ftpe7-4.fna&oh=35a64f5bd4c1abde428ff36d39ee1189&oe=5F3EE68C)',
            backgroundSize: 'cover'
          }
        }
      ],
      // Slider configuration [obj]
      options: {
        currentPage: 0,
        speed: 300,
        itemAnimation: true,
        centeredSlides: true,
        thresholdDistance: 100,
        thresholdTime: 300,
        loopedSlides: 2,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
