<template lang="pug">
    #dm.dm.bg-dark.d-flex.justify-content-center.align-items-center.flex-column
        .container
            h1(:style="{color:'red'}").font-weight-bolder.mb-4 |全店活動
            .content.d-flex.justify-content-center.align-items-center.flex-column
                div
                  h2 {{this.$route.params.p1}}
                  h4(:style="{color:'red'}") {{this.$route.params.p2}}
                  p {{this.$route.params.p3}}
                  p {{this.$route.params.p4}}
                  p {{this.$route.params.p5}}
                  p {{this.$route.params.p6}}
                  p(:style="{color:'blue'}") {{this.$route.params.p7}}
                  p {{this.$route.params.p8}}
                  p(:style="{fontWeight:'900', color:'#0072E3'}" ) {{this.$route.params.p9}}
                  p(:style="{fontWeight:'900', color:'#0072E3'}") {{this.$route.params.p10}}
                  p {{this.$route.params.p11}}
                  .image1.d-flex.justify-content-center.align-items-center
                      img(:src='this.$route.params.src')
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
        { p1: '', p2: '2020/8/4~8/31期間限定，共度溫馨甜蜜時光，享用最豐盛的豪華饗宴！', p3: ' 一年一度的父親節、七夕就要到了，TGI FRIDAYS™集結多道海陸精選餐點，為您獻上【慶祝一夏雙人/四人套餐】- 招牌開胃菜＋沙拉＋主廚精選＋特選主餐＋甜點＋特調飲品，豐富多樣的美式料理一應俱全！今年更首度推出爸爸喜愛、情人也愛的2款啤酒特調，以及喝再多也不會ㄎ一ㄤ的「奶油啤酒不是酒」，彷彿一遊魔法世界超新奇！來FRIDAYS款待前世情人、今世愛人吃美食，慶祝一夏吧！', p4: '慶祝一夏雙人套餐：$1980', p5: '慶祝一夏四人套餐：$3880', p6: '※10%服務費另計', p7: '↓↓↓優惠再加碼【打卡炫父送啤酒】拍照活動↓↓↓', p8: '於2020/8/4-2020/8/9期間父子/父女檔到店消費，完成以下兩步驟，即可獲得－星期五皮爾森生啤乙杯（375ml / 價值170元，限現場立即兌換）', p9: 'Step1：追蹤TGI FRIDAYS Taiwan 官方IG帳號（@tgifridaystaiwan）', p10: 'Step2：與爸爸合照上傳至FB或IG，打卡TGI FRIDAYS餐廳 ', p11: '※贈送品項需酌收原價之10%服務費', p12: '※贈送品項需酌收原價之10%服務費', p13: '※每桌限兌換乙杯，限內用不得外帶', p14: '※本活動松高餐廳贈送品項更改為價值160元「生力生啤酒」乙杯(500ml)', src: 'https://tgifridays.com.tw/images/news/2020/07/30-tgif-fathersday-eventpage1.jpg' },
        { p1: '', p2: '夏天也能擁有好食慾！FRIDAYS獻上開胃又消暑的全新菜色，7/14~8/31期間限定！', p3: ' 迎接炎炎夏日，FRIDAYS推出【吃夏趣】夏季限定全新餐點！', p4: '7道開胃消暑系全新菜色，結合酸辣、異國醬料等獨創風味，色香味十足，讓人食慾大振、一解酷暑的悶熱感。 ', p5: '活動期間，凡點購【吃夏趣】任一道餐點，即享「精選調酒」加購優惠價 NT$99起！', p6: '', p7: '↓↓↓【來星期五吃夏趣　消暑甜點免費吃】↓↓↓', p8: ' ', p9: '夏日尋字趣味競賽開始！凡姓名有「星」、「期」、「五」、「吃」、「夏」、「趣」任一字或與任一字同音者，2020/7/14-2020/7/23期間來TGI FRIDAYS 消費，即免費招待價值200 元「星期五炸彈冰淇淋」乙份。', p10: ' ', p11: '', p12: '', p13: '', p14: '', src: 'https://tgifridays.com.tw/images/news/2020/07/09-tgif-summermenu-eventpage1.jpg' }
      ]
    }
  }
}
</script>
