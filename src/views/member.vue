<template>
  <div id="member" class="bg-dark vh-100">
    <div class="container d-flex justify-content-center">
      <b-row class="flex-column">
        <div class="member_card bg-light" style="width:500px;height:300px;border-radius:20px">
          <div class="d-flex mb-3">
            <img class="member_card_logo" src="/img/member_card_logo.png" alt="">
            <div class="member_img col-xl-5">
              <img src="/img/member_img.jpg" alt="" width="300px">
            </div>
            <div class="member_in col-xl-6">
              <h3>admin</h3>
              <h4>0912-212-121</h4>
              <h4>1996/08/30</h4>
            </div>
          </div>
          <img src="/img/barcode.gif" alt="">
        </div>
        <div class="centerx d-flex">
          <div class="mt-5 text-center d-flex">
            <a @click="popupActivo1=true" class="mr-5">
              <img src="../../public/img/ticket.png" width="220">
              <h2 class="text-white text-center">優惠券</h2>
            </a>
            <a @click="popupActivo2=true" class="ml-5">
              <img src="../../public/img/setting.png" width="200">
              <h2 class="text-white text-center">會員資料修改</h2>
            </a>
          </div>
          <vs-popup classContent="popup-example" title="優惠卷" :active.sync="popupActivo1">
            <h1>目前尚無優惠卷</h1>
          </vs-popup>
          <vs-popup classContent="popup-example" title="會員資料修改" :active.sync="popupActivo2">
            <div class="row justify-content-center m-0">
              <div>
                <vs-input  label="姓名" class="inputx popup1" placeholder="admin" v-model="value1"/>
                <vs-input label="電話" class="inputx popup1" placeholder="0912-212-121" v-model="value2"/>
                <vs-input label="生日" class="inputx popup1" placeholder="1996/08/30" v-model="value3"/>
                <vs-input label="信箱" class="inputx popup1" placeholder="admin@gmail.com" v-model="value4"/>
                <vs-input label="密碼" class="inputx popup1" placeholder="admin1234" v-model="value5"/>
                <vs-input label="確認密碼" class="inputx popup1" placeholder="admin1234" v-model="value6"/>
              </div>
              <div class="mx-5">
                <vs-button color="success" type="relief">Success</vs-button>
                <vs-button color="danger" type="relief">Danger</vs-button>
              </div>
            </div>
          </vs-popup>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      popupActivo1: false,
      popupActivo2: false
    }
  }
}
</script>

<style lang="stylus">
.popup-example
  .vs-input
    float left
    width 50%
    margin 10px
    margin-top 5px
  .con-select
    margin-left 10px
    width 50%
    margin-bottom 10px

</style>
