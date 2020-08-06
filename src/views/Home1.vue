<template>
<!-- Make a div wrapped slider,set height and width -->
<div id="Home" class="vh-25 row m-0 bg-dark">
  <div class="vh-100 overflow-hidden">
    <div style="width:100vw;height:95vh" class="column carousel">
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
  <div class="new d-flex align-items-center justify-content-center bg-dark">
        <h1 class="mb-5 text-white font-weight-bold">最新優惠</h1>
        <div class="ad flex-wrap">
            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>

            <div class="col-12 col-lg-4">
              <a href="#">
                <div class="view">
                  <img src="https://tgifridays.com.tw/images/menu/food/grill/sizzling-cajun-steak.jpg" class="img-fluid">
                    <div class="text">
                      <h4 class="text-center">田納西威士忌炭烤豬肋排</h4>
                    </div>
                  </div>
              </a>
            </div>
        </div>
      </div>
      <footer class="fixed-bottom">
        456123
      </footer>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data () {
    return {
      // data list [array]
      someList: [
        {
          html: 'slider1',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=1)'
          }
        },
        {
          html: 'slider2',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=2)'
          }
        },
        {
          html: 'slider3',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=3)'
          }
        },
        {
          html: 'slide4',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=4)'
          }
        },
        {
          html: 'slide5',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=5)'
          }
        },
        {
          html: 'slide6',
          style: {
            background: 'url(https://picsum.photos/1920/1080/?random=6)'
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
