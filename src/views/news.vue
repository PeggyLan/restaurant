<template lang="pug">
  #news.d-flex.justify-content-center.flex-column
    div.stamp.d-flex.justify-content-center.align-items-center News
    b-container.d-flex.justify-content-center.align-items-center
      b-row.flex-column.d-flex.justify-content-center.align-items-center
        b-col.information(
          v-for="(box, index) in paginatedBoxs"
          :key="index"
          :style="{maxWidth:'100%'}"
          @click="route(index)"
          ).p-3
          .d-flex.flex-wrap
            b-col.carditem1(cols="12" sm="5").py-3.d-flex.justify-content-center.align-items-center
              b-img.image(:src="box.src" :style="{width:'250px', zIndex:'2' }")
            b-col.carditem(cols="12" sm="7").d-flex.flex-column.justify-content-center
              h3(:style="{color:'white'}") {{ box.title }}
              p(:style="{color:'white'}") {{ (box.text.length > 30) ? box.text.substr(0,30) + '...' : box.text }}
              .tag.d-flex.mt-3
                h6(:style="{color:'white'}").mr-auto {{ box.time }}
    b-pagination-nav(
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      :number-of-pages="numberOfPages"
      :link-gen="linkGen"
      @change="onPageChanged"
      pills
      use-router
      align="center"
    )
    footer.text-center.d-flex.justify-content-center.align-items-center
            .copyright Copyright © 2020 Peggy's Restaurant
            .socoal
              a(href='https://www.facebook.com/tsvts/')
                img(src="../../public/img/fb.png" :style="{width:'30px' }")
              a(href='https://www.facebook.com/tsvts/')
                img(src="../../public/img/ig.png" :style="{width:'30px' }")
              a(href='https://www.facebook.com/tsvts/')
                img(src="../../public/img/line.png" :style="{width:'30px' }")

</template>

<script>
export default {
  data () {
    return {
      boxs: [
        { link: '/dm', title: '【Tex-Mex墨西哥狂饗曲】推出墨西哥全新菜單，美味登場', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_325.jpg', text: 'HOLA！FRIDAYS獻上道地菜餚調飲，帶您認識熱情墨西哥，2/25~4/20期間限定！' },
        { link: '/where', title: '【防疫重要公告】', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_326.jpg', text: '全台餐廳自主防疫措施公告' },
        { link: '/story', title: '【歡聚外帶套餐】4/17起預購享優惠，多道人氣餐點帶回家！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_329.jpg', text: '預購享88折優惠！到FRIDAYS外帶限定套餐，讓連假、母親節在家團聚好歡樂！' },
        { link: '/story', title: '【母親節套餐】來吃豐盛饗宴 4/21 暖心上市！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_328.jpg', text: '2020/4/21~5/18款待媽咪吃美食，精選海陸餐點+歡樂氣氛，給您最難忘的母親節...' },
        { link: '/story', title: '【新蔬食運動】推出未來肉餐點天天85折，一起吃得營養又環保！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_330.jpg', text: '2020/5/19-2020/6/29限定優惠，不吃肉，也能享用營養美味的道地美式料理！' },
        { link: '/story', title: '【迎接畢業季】謝師宴派對，預訂享優惠！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_331.jpg', text: '2020/6/2~7/31期間，提前來電預約謝師宴派對，招待老師免費吃！' },
        { link: '/story', title: '【道地美式餐盒】獨創新品美味上市，隨時隨地享受美味！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_332.jpg', text: '推出多款美式餐盒，一個人輕鬆也能享用道地美式餐點！' },
        { link: '/story', title: '【暑假限定】夏日海洋兒童體驗營', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_333.jpg', text: '2020/7/1~8/31期間，來當小小店長，好吃又好玩！' },
        { link: '/story', title: '【吃夏趣】夏日全新餐點，開胃上桌', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_334.jpg', text: '夏天也能擁有好食慾！獻上開胃又消暑的全新菜色，7/14~8/31期間限定！' },
        { link: '/story', title: '【父親節七夕首選】慶祝一夏雙人/四人套餐，用好料犒賞老爸&情人', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_335.jpg', text: '父親節七夕過節就是要來用豐盛套餐、啤酒特調滿足愛人的胃！' }
      ],
      paginatedBoxs: this.boxs,
      perPage: 5,
      currentPage: 1,
      box: [
        { p1: '', p2: '2020/8/4~8/31期間限定，共度溫馨甜蜜時光，享用最豐盛的豪華饗宴！', p3: ' 一年一度的父親節、七夕就要到了，TGI FRIDAYS™集結多道海陸精選餐點，為您獻上【慶祝一夏雙人/四人套餐】- 招牌開胃菜＋沙拉＋主廚精選＋特選主餐＋甜點＋特調飲品，豐富多樣的美式料理一應俱全！今年更首度推出爸爸喜愛、情人也愛的2款啤酒特調，以及喝再多也不會ㄎ一ㄤ的「奶油啤酒不是酒」，彷彿一遊魔法世界超新奇！來FRIDAYS款待前世情人、今世愛人吃美食，慶祝一夏吧！', p4: '慶祝一夏雙人套餐：$1980', p5: '慶祝一夏四人套餐：$3880', p6: '※10%服務費另計', p7: '↓↓↓優惠再加碼【打卡炫父送啤酒】拍照活動↓↓↓', p8: '於2020/8/4-2020/8/9期間父子/父女檔到店消費，完成以下兩步驟，即可獲得－星期五皮爾森生啤乙杯（375ml / 價值170元，限現場立即兌換）', p9: 'Step1：追蹤TGI FRIDAYS Taiwan 官方IG帳號（@tgifridaystaiwan）', p10: 'Step2：與爸爸合照上傳至FB或IG，打卡TGI FRIDAYS餐廳 ', p11: '※贈送品項需酌收原價之10%服務費', p12: '※贈送品項需酌收原價之10%服務費', p13: '※每桌限兌換乙杯，限內用不得外帶', p14: '※本活動松高餐廳贈送品項更改為價值160元「生力生啤酒」乙杯(500ml)', src: 'https://tgifridays.com.tw/images/news/2020/07/30-tgif-fathersday-eventpage1.jpg' },
        { p1: '', p2: '夏天也能擁有好食慾！FRIDAYS獻上開胃又消暑的全新菜色，7/14~8/31期間限定！', p3: ' 迎接炎炎夏日，FRIDAYS推出【吃夏趣】夏季限定全新餐點！', p4: '7道開胃消暑系全新菜色，結合酸辣、異國醬料等獨創風味，色香味十足，讓人食慾大振、一解酷暑的悶熱感。 ', p5: '活動期間，凡點購【吃夏趣】任一道餐點，即享「精選調酒」加購優惠價 NT$99起！', p6: '', p7: '↓↓↓【來星期五吃夏趣　消暑甜點免費吃】↓↓↓', p8: ' ', p9: '夏日尋字趣味競賽開始！凡姓名有「星」、「期」、「五」、「吃」、「夏」、「趣」任一字或與任一字同音者，2020/7/14-2020/7/23期間來TGI FRIDAYS 消費，即免費招待價值200 元「星期五炸彈冰淇淋」乙份。', p10: ' ', p11: '', p12: '', p13: '', p14: '', src: 'https://tgifridays.com.tw/images/news/2020/07/09-tgif-summermenu-eventpage1.jpg' }
      ]
    }
  },
  methods: {
    paginate (pageSize, pageNumber) {
      const boxsToParse = this.boxs.slice().reverse()
      this.paginatedBoxs = boxsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      )
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    route (index) {
      const i = this.currentPage === 1 ? index : index + 5 * (this.currentPage - 1)
      console.log(i)
      this.$router.push({ name: 'dm', params: { p2: this.box[i].p2, p3: this.box[i].p3, p4: this.box[i].p4, p5: this.box[i].p5, p6: this.box[i].p6, p7: this.box[i].p7, p8: this.box[i].p8, p9: this.box[i].p9, p10: this.box[i].p10, p11: this.box[i].p11, p12: this.box[i].p12, p13: this.box[i].p13, p14: this.box[i].p14, src: this.box[i].src } })
    }
  },
  computed: {
    totalRows () {
      return this.boxs.length
    },
    numberOfPages () {
      return parseInt(this.totalRows / this.perPage)
    }
  },
  mounted () {
    this.paginate(this.perPage, 0)
  }
}
</script>
