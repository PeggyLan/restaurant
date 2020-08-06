<template>
  <div id="where" class="bg-dark d-flex justify-content-center flex-column">
    <!-- <div class="stamp d-flex justify-content-center align-items-center">Where?</div> -->
    <div class="banner d-flex justify-content-center align-items-center mx-auto">
        <lottie-player
        class="location"
        :src="lottie"
        :options="{
          autoplay: true,
          loop:true,
          speed: 1,
          width: '200px',
          height: '200px'
        }"
        />
          <h3>Where Are We ?</h3>
          <h6 class="mt-5">Location Intelligence</h6>
        <img src="../../public/img/assorted-map-pieces-2859169 (1).jpg" alt="">
    </div>
    <div class="box1 d-flex justify-content-center align-items-center flex-column">
        <div class="row box1-1 d-flex justify-content-center flex-column my-3">
          <div class="col ml-3 mt-3">
              <h5>New Taipei City / 三重店</h5>
              <p>Add : 新北市三重區三民街165巷2號3樓</p>
              <P>Tel : (xx) xxxx-xxxx</P>
              <p>Opening Time : Sun-Thu 11:00-22:00</p>
              <P>Fri-Sat 10:00-21:00</P>
          </div>
        </div>
        <div class="box1-2 d-flex justify-content-center flex-column my-3">
          <h3 class="mx-auto my-3 traffic">交通方式 : </h3>
          <div class="row d-flex justify-content-center flex-column">
            <div class="aaa col-md-12 mb-3 text-center">
                <div class="col-12 col-md-4 col-xl-4">
                  <img src="../../public/img/truck.png" height="50" width="50">公車
                </div>
                <div class="col-12 col-md-8 col-xl-8">
                  <span>搭至三民街東海中學站或中華路口站，再步行5-7分鐘即可到達。</span>
                </div>
            </div>
            <div class="aaa col-md-12 mb-3 text-center">
                <div class="col-12 col-md-4 col-xl-4">
                  <img src="../../public/img/train.png" height="50" width="50">捷運
                </div>
                <div class="col-12 col-md-8 col-xl-8">
                  <span>搭乘捷運至菜寮站，再轉程299路公車至東海中學站，即可到達。</span>
                </div>
            </div>
            <div class="aaa col-md-12 mb-3 text-center">
                <div class="col-12 col-md-4 col-xl-4">
                  <img src="../../public/img/bike.png" height="50" width="50">腳踏車
                </div>
                <div class="col-12 col-md-8 col-xl-8">
                  <span>騎乘至聯邦公園或重陽國小即可還車。</span>
                </div>
            </div>
            <div class="aaa col-md-12 mb-3 text-center">
                <div class="col-12 col-md-4 col-xl-4">
                  <img src="../../public/img/car.png" height="50" width="50">開車
                </div>
                <div class="col-12 col-md-8 col-xl-8">
                  <span>開車請直接至中華路與三民街交叉口即可到達。</span>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="box2 d-flex justify-content-center align-items-center mx-auto">
      <div class="map">
        <b-embed
          type="iframe"
          aspect="4by3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.080650990857!2d121.48166791537919!3d25.065255443190914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8e76b5afdd9%3A0x49bec1bfb5f9ae38!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5LiJ5rCR6KGXMTY15be3MuiZnzM!5e0!3m2!1szh-TW!2stw!4v1595513611525!5m2!1szh-TW!2stw" width="600" height="450" ></b-embed>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row my-3">
        <div class="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h5>New Taipei City / 三重店</h5>
            <p>Add : xxx xxx xxx xxx xx xx</p>
            <P>Tel : (xx) xxxx-xxxx</P>
            <p>Opening Time : Sun-Thu 11:00-22:00</p>
            <P>Fri-Sat 10:00-21:00</P>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12 map d-flex justify-content-center align-items-center">
          <img src="https://picsum.photos/300/300/?random=1">
        </div>
      </div>
    </div> -->
    <footer class="text-center d-flex justify-content-center align-items-center">
      <div class="copyright">
        Copyright © 2020 Peggy's Restaurant
      </div>
      <div class="social">
          <a href="https://www.facebook.com/tsvts/">
            <img src="../../public/img/fb.png" width="30">
          </a>
          <a href="https://www.instagram.com/peggy_0830/">
            <img src="../../public/img/ig.png" width="30">
          </a>
          <a href="https://www.facebook.com/tsvts/">
            <img src="../../public/img/line.png" width="30">
          </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lottie: 'https://assets9.lottiefiles.com/temp/lf20_EVDaJ0.json'
    }
  },
  methods: {
  }
}
</script>
