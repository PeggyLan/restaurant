<template lang="pug">
    #menu
        .header
            .img
              img(:src="'./img/logo.png'")
            .slogan
              h1 美味難以忘懷
              h2 Here's the main attraction
            #signature.d-flex.flex-column
                .title
                    h4 精選菜色
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides[selectData].title }}
                      p {{ slides[selectData].text }}
                      span {{ slides[selectData].text1 }}
                    .pic
                        img(:src='slides[selectData].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide, indx) in slides" :key="indx")
                        div.hooper-img
                          img(:src="slide.src" @click="selectData=indx")
                      hooper-navigation(slot="hooper-addons")
            #appeziter.d-flex.flex-column
                .title
                    h4.bg-dark 開胃菜
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides2[selectData2].title }}
                      p {{ slides2[selectData2].text }}
                      span {{ slides2[selectData2].text1 }}
                    .pic
                        img(:src='slides2[selectData2].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide2, indx) in slides2" :key="indx")
                        div.hooper-img
                          img(:src="slide2.src" @click="selectData2=indx")
                      hooper-navigation(slot="hooper-addons")
            #salad.d-flex.flex-column
                .title
                    h4.bg-dark 沙拉類
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides3[selectData3].title }}
                      p {{ slides3[selectData3].text }}
                      span {{ slides3[selectData3].text1 }}
                    .pic
                        img(:src='slides3[selectData3].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide3, indx) in slides3" :key="indx")
                        div.hooper-img
                          img(:src="slide3.src" @click="selectData3=indx")
                      hooper-navigation(slot="hooper-addons")
            #pasta.d-flex.flex-column
                .title
                    h4.bg-dark 義大利麵 & 飯類
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides4[selectData4].title }}
                      p {{ slides4[selectData4].text }}
                      span {{ slides4[selectData4].text1 }}
                    .pic
                        img(:src='slides4[selectData4].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide4, indx) in slides4" :key="indx")
                        div.hooper-img
                          img(:src="slide4.src" @click="selectData4=indx")
                      hooper-navigation(slot="hooper-addons")
            #handcrafted-burgers.d-flex.flex-column
                .title
                    h4.bg-dark 漢堡與三明治
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides5[selectData5].title }}
                      p {{ slides5[selectData5].text }}
                      span {{ slides5[selectData5].text1 }}
                    .pic
                        img(:src='slides5[selectData5].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide5, indx) in slides5" :key="indx")
                        div.hooper-img
                          img(:src="slide5.src" @click="selectData5=indx")
                      hooper-navigation(slot="hooper-addons")
            #grill.d-flex.flex-column
                .title
                    h4.bg-dark 炭烤系列
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides6[selectData6].title }}
                      p {{ slides6[selectData6].text }}
                      span {{ slides6[selectData6].text1 }}
                    .pic
                        img(:src='slides6[selectData6].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide6, indx) in slides6" :key="indx")
                        div.hooper-img
                          img(:src="slide6.src" @click="selectData6=indx")
                      hooper-navigation(slot="hooper-addons")
            #desserts.d-flex.flex-column
                .title
                    h4.bg-dark 甜點
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides7[selectData7].title }}
                      p {{ slides7[selectData7].text }}
                      span {{ slides7[selectData7].text1 }}
                    .pic
                        img(:src='slides7[selectData7].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide7, indx) in slides7" :key="indx")
                        div.hooper-img
                          img(:src="slide7.src" @click="selectData7=indx")
                      hooper-navigation(slot="hooper-addons")
            #drink.d-flex.flex-column
                .title
                    h4.bg-dark 飲料
                .food1.d-flex.flex-column.justify-content-center.align-items-center.text-center
                    .text1.my-5
                      h2 {{ slides8[selectData8].title }}
                      p {{ slides8[selectData8].text }}
                      span {{ slides8[selectData8].text1 }}
                    .pic
                        img(:src='slides8[selectData8].src')
                .food2.d-flex.justify-content-center
                    hooper.col-10.px-0(:infiniteScroll="true" :settings="hooperSettings")
                      slide(v-for="(slide8, indx) in slides8" :key="indx")
                        div.hooper-img
                          img(:src="slide8.src" @click="selectData8=indx")
                      hooper-navigation(slot="hooper-addons")
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
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperNavigation
    // slider,
    // slideritem
  },
  data () {
    return {
      selectData: 0,
      slides: [
        { src: './img/food/signature1.jpg', title: '霸氣總裁拼盤', text: '最招牌的炭烤系列給您最大滿足！經典的豬肋排塗上獨創雙醬與紐奧良調味料，烤至焦香入味，搭配以迷迭香、大蒜、奶油烘烤而成的鮮嫩半雞與七分熟的沙朗牛排佐紫蘇蕃茄沙拉，另可自選一道主廚精選配菜。', text1: '主廚精選配菜: 薯條/寇比起司馬鈴薯泥/茉莉香米飯/季節時蔬/焗烤起司筆管麵' },
        { src: './img/food/signature2.jpg', title: '經典哈燒桶', text: '一次給您雙重美味享受，結合招牌炭烤豬肋排與雞翅，沾裹綜合經典蘋果烤肉醬與田納西醬，搭配微辣的青辣椒與酥炸洋蔥，挑動您的味蕾。', text1: '' },
        { src: './img/food/signature3.jpg', title: '香烤半雞', text: '半隻鮮嫩雞，以紐奧良調味料、迷迭香、大蒜、奶油調味，烘烤至外皮金黃，搭配季節時蔬與寇比起司馬鈴薯泥與您自選的醬料一同享用。', text1: '醬料可選擇：雙醬/蘋果烤肉醬每日新鮮烘烤，限量供應' },
        { src: './img/food/signature5.jpg', title: '自創開胃菜組合', text: '一次嚐盡所有經典美味。快來組合屬於您的自創拼盤，可自選三樣開胃菜。香酥馬芝拉條/馬鈴薯皮/紐約辣雞翅/田納西芝麻雞柳/酥炸魚柳條/。', text1: '' },
        { src: './img/food/signature6.jpg', title: '三式超級精選', text: '最超值的組合，一次吃到紐奧良炸蝦、田納西芝麻雞柳及半份田納西威士忌炭烤豬肋排，適合大家一起分享。', text1: '內含芝麻 Contains Sesame Seeds' },
        { src: './img/food/signature4.jpg', title: '島嶼微風聖代', text: '香草冰淇淋與糖霜脆餅的完美組合，搭配新鮮鳳梨、草苺與香甜的芒果，最後淋上焦糖醬，散發出甜美濃郁的熱帶香氣。', text1: '' }
      ],
      selectData2: 0,
      slides2: [
        { src: './img/food/appetizers1.jpg', title: '馬鈴薯皮', text: '首創的菜色，每片香酥鬆軟的馬鈴薯皮都融入濃郁的起司、培根，建議搭配酸乳酪沾醬。' },
        { src: './img/food/appetizers2.jpg', title: '英式炸魚薯條', text: '英國最流行的傳統小吃。香脆魚柳條沾上美味的塔塔醬，配上薯條，為您呈現最道地的英國風味。', text1: '' },
        { src: './img/food/appetizers3.jpg', title: '義式蒜辣小管圈', text: '新鮮的小管圈搭配萊姆汁、大蒜和三種辣椒一起拌炒，是我們最受喜愛的海鮮類開胃菜。', text1: '' },
        { src: './img/food/appetizers4.jpg', title: '義式紫蘇蕃茄麵包', text: '法國麵包塗上百里香、橄欖油、大蒜等炭烤至金黃，堆疊上清爽的紫蘇蕃茄沙拉、醃製小蕃茄、九層塔，最後搭配義大利酒醋醬，開胃爽口。', text1: '' },
        { src: './img/food/appetizers5.jpg', title: '帕米森雞肉酥餅', text: '特製帕米森起司麵粉餅中包裹著炭烤雞肉丁、培根粒、紫蘇蕃茄沙拉與傑克起司，淋上義大利酒醋醬，口感豐富。', text1: '' },
        { src: './img/food/appetizers6.jpg', title: '香酥馬芝拉條', text: '以艾斯阿格起司、巧達起司與馬芝拉起司製作而成的馬芝拉條，炸至金黃酥脆，撒上帕米森起司。搭配馬利納拉醬。', text1: '' }
      ],
      selectData3: 0,
      slides3: [
        { src: './img/food/salad1.jpg', title: '凱撒沙拉', text: '美式經典代表。使用新鮮羅美生菜、香蒜奶油麵包丁以及帕米森起司。' },
        { src: './img/food/salad2.jpg', title: '金色陽光小管沙拉', text: '酥炸至金黃酥脆的小管圈，搭配新鮮綜合生菜與薄荷葉，拌入清爽可口的萊姆香菜醬，最後加上蕃茄、鳳梨與核桃，讓人彷彿置身於熱帶島嶼。', text1: '內含核桃 Contains Walnuts' },
        { src: './img/food/salad3.jpg', title: '義式油醋雞肉沙拉', text: '爽口羅美生菜拌上凱撒油醋醬，加上香蒜奶油麵包丁、帕米森起司、新鮮蕃茄，最後舖上炭烤酒醋雞肉。', text1: '將炭烤雞肉升級為炭烤鮭魚 +$130' },
        { src: './img/food/salad1.jpg', title: '凱撒沙拉', text: '美式經典代表。使用新鮮羅美生菜、香蒜奶油麵包丁以及帕米森起司。' },
        { src: './img/food/salad2.jpg', title: '金色陽光小管沙拉', text: '酥炸至金黃酥脆的小管圈，搭配新鮮綜合生菜與薄荷葉，拌入清爽可口的萊姆香菜醬，最後加上蕃茄、鳳梨與核桃，讓人彷彿置身於熱帶島嶼。', text1: '內含核桃 Contains Walnuts' },
        { src: './img/food/salad3.jpg', title: '義式油醋雞肉沙拉', text: '爽口羅美生菜拌上凱撒油醋醬，加上香蒜奶油麵包丁、帕米森起司、新鮮蕃茄，最後舖上炭烤酒醋雞肉。', text1: '將炭烤雞肉升級為炭烤鮭魚 +$130' }
      ],
      selectData4: 0,
      slides4: [
        { src: './img/food/pasta1.jpg', title: '南洋鮮蝦義大利麵', text: '使用杏仁麵包粉酥炸的蝴蝶蝦,搭配黃檸檬絲、紅椒、菠菜、帕米森起司、奶油醬與義大利寬麵一起拌炒,是一道充滿異國風味的新選擇。', text1: '內含杏仁 Contains Almonds' },
        { src: './img/food/pasta2.jpg', title: '紫蘇蕃茄炭烤雞肉麵', text: '義大利細麵佐以新鮮大蒜切片、紫蘇蕃茄沙拉與馬利納拉醬拌炒，搭配炭烤至鮮嫩多汁的雞肉，最後加上義大利酒醋醬與新鮮帕米森起司。', text1: '' },
        { src: './img/food/pasta3.jpg', title: '香辣泰國雞肉麵', text: '義大利細麵配上醃製雞柳、紅椒、角椒、蔥白、香脆腰果仁和特製香辣泰式醬一起快火拌炒，是我們最暢銷的獨創義大利麵。', text1: '內含腰果 Contains Cashews' },
        { src: './img/food/pasta4.jpg', title: '費特希尼鮮蝦雞肉寬麵', text: '費特希尼義大利寬麵配上鮮嫩雞肉、特選鮮蝦、紅椒，以紐奧良調味料及香濃奶油一起拌炒，撒上帕米森起司與青蔥。', text1: '' },
        { src: './img/food/pasta5.jpg', title: '蒜香鮮蔬義大利麵', text: '義大利細麵搭配新鮮蕃茄、青花菜、紫高麗、大蒜、紅蘿蔔、帕米森起司和香蒜羅勒奶油一起拌炒，是一道健康的義大利麵。', text1: '' },
        { src: './img/food/pasta6.jpg', title: '加勒比海海鮮飯', text: '充滿咖哩風味的茉莉香米飯加入大蒜、雞肉、蝴蝶蝦、小管圈、蕃茄丁、洋蔥、紅椒、青椒一起拌炒，最後放上香菜，喜歡異國海鮮料理的你絕對不能錯過。', text1: '' },
        { src: './img/food/pasta7.jpg', title: '香檸黃金魚排鮮蝦', text: '沾裹杏仁麵包粉炸至金黃酥脆的魚排，搭配使用新鮮青紅椒、大蒜、紐奧良調味料、檸檬奶油與羅勒奶油煨煮的蝴蝶蝦，附上茉莉香米飯及青翠蘆筍，多層次的搭配組合令人食指大動。', text1: '內含杏仁 Contains Almonds' }
      ],
      selectData5: 0,
      slides5: [
        { src: './img/food/burger1.jpg', title: '夠美式超濃起司漢堡', text: '濃郁的寇比起司、美國起司,搭配香炒酒醋洋蔥培根、再加上帕米森奶油起司醬、千島醬及黑胡椒培根。', text1: '' },
        { src: './img/food/burger2.jpg', title: '培根起司漢堡', text: '經典的美式原味，搭配美國起司與香脆培根。', text1: '' },
        { src: './img/food/burger3.jpg', title: '山胡桃炭烤雞肉迷你堡', text: '山胡桃炭烤雞肉迷你堡', text1: '' },
        { src: './img/food/burger4.jpg', title: '日出熔岩漢堡', text: '嫩煎太陽蛋配上洋蔥圈，宛如日光乍現，搭配美國起司、焦糖洋蔥、香炒雪花牛、新鮮生菜，再特別結合蒜味美乃滋，口感滑順、香氣十足！', text1: '' },
        { src: './img/food/burger5.jpg', title: '鮮蔬農夫漢堡', text: '素食全新選擇！外觀如一般牛肉漢堡可口，獨特之處在於使用天然豆類製作而成的漢堡排，搭配新鮮生菜、蕃茄、紫紅洋蔥、炒蘑菇等，再抹上松露美乃滋，吃出素食新鮮感！即使不含任何肉類，仍為味蕾帶來滿足。', text1: '' },
        { src: './img/food/burger6.jpg', title: '綜合蔬菜三明治', text: '清爽無負擔的美式三明治。將瑞士起司、生菜沙拉、鱷梨醬、蕃茄切片與紅蘿蔔絲一同夾入烘烤至金褐色的雜糧麵包中，附上香酥薯條。', text1: '' }
      ],
      selectData6: 0,
      slides6: [
        { src: './img/food/ribs1.jpg', title: '田納西威士忌炭烤豬肋排', text: '使用台灣本地農場飼養的優質豬肋排，先將肉質以慢火烤至軟嫩，再塗上田納西醬，炭烤至雙面焦香入味，搭配香脆薯條和涼拌捲心菜。', text1: '' },
        { src: './img/food/ribs2.jpg', title: '田納西威士忌炭烤肋眼牛排', text: '精選12oz.肋眼牛排，精心炭烤到您喜愛的熟度，可挑選任兩道主廚精選配菜與招牌田納西醬一同享用。', text1: '主廚精選配菜: 薯條/寇比起司馬鈴薯泥/茉莉香米飯/季節時蔬/焗烤起司筆管麵 升級超值雙拼組合餐：一 升級為紐奧良炸蝦雙拼組合 +$320一 升級為炭烤鮭魚雙拼組合 +$360一 升級為半份炭烤豬肋排雙拼組合 +$470' },
        { src: './img/food/ribs3.jpg', title: '肋眼牛排', text: '精選12oz.肋眼牛排，精心炭烤到您喜愛的熟度。可挑選任兩道主廚精選配菜與您自選的醬料一同享用。', text1: '醬料可選擇：野菇醬/黑胡椒醬主廚精選配菜: 薯條/寇比起司馬鈴薯泥/茉莉香米飯/季節時蔬/焗烤起司筆管麵升級超值雙拼組合餐：一 升級為紐奧良炸蝦雙拼組合 +$320一 升級為炭烤鮭魚雙拼組合 +$360一 升級為半份炭烤豬肋排雙拼組合 +$470' },
        { src: './img/food/ribs4.jpg', title: '沙朗牛排', text: '精選8 oz.沙朗牛排，精心炭烤到您喜愛的熟度，可挑選任兩道主廚精選配菜與您自選的醬料一同享用。', text1: '加購價4oz.沙朗牛排 +$250醬料可選擇：野菇醬/黑胡椒醬主廚精選配菜: 薯條/寇比起司馬鈴薯泥/茉莉香米飯/季節時蔬/焗烤起司筆管麵升級超值雙拼組合餐：一 升級為紐奧良炸蝦雙拼組合 +$320一 升級為炭烤鮭魚雙拼組合 +$360一 升級為半份炭烤豬肋排雙拼組合 +$470' },
        { src: './img/food/ribs5.jpg', title: '美式炭烤豬肋排', text: '經典豬肋排，將整塊鮮嫩豬肋排慢火炭烤後，塗上蘋果烤肉醬，搭配薯條與涼拌捲心菜。', text1: '' },
        { src: './img/food/ribs6.jpg', title: '雙醬炭烤豬肋排', text: '經典豬肋排，整塊鮮嫩豬肋排與特製紐奧良調味料，塗上獨創雙醬，慢火炭烤至雙面焦香入味，搭配薯條與涼拌捲心菜。', text1: '' }
      ],
      selectData7: 0,
      slides7: [
        { src: './img/food/dessert1.jpg', title: '摩卡咖啡冰淇淋派', text: '招牌甜點，巧克力餅乾加上烘烤杏仁片、巧克力醬與咖啡冰淇淋，是甜而不膩的經典好滋味。', text1: '內含杏仁 Contains Almonds' },
        { src: './img/food/dessert2.jpg', title: '鳳梨蘭姆起司派', text: '香濃手工起司蛋糕，配以美味酥脆的派皮，再淋上鳳梨蘭姆醬、香草奶油，濃郁可口，建議先吃一口原味，再搭配旁邊的烤鳳梨片與淋醬、香草奶油，多重享受。', text1: '內含核桃 Contains Walnuts' },
        { src: './img/food/dessert3.jpg', title: '巧克力布朗尼', text: '溫熱的巧克力布朗尼與香草冰淇淋，搭配美國巧克力醬、焦糖醬及核桃果仁。', text1: '內含核桃 Contains Walnuts' },
        { src: './img/food/dessert1.jpg', title: '摩卡咖啡冰淇淋派', text: '招牌甜點，巧克力餅乾加上烘烤杏仁片、巧克力醬與咖啡冰淇淋，是甜而不膩的經典好滋味。', text1: '內含杏仁 Contains Almonds' },
        { src: './img/food/dessert2.jpg', title: '鳳梨蘭姆起司派', text: '香濃手工起司蛋糕，配以美味酥脆的派皮，再淋上鳳梨蘭姆醬、香草奶油，濃郁可口，建議先吃一口原味，再搭配旁邊的烤鳳梨片與淋醬、香草奶油，多重享受。', text1: '內含核桃 Contains Walnuts' },
        { src: './img/food/dessert3.jpg', title: '巧克力布朗尼', text: '溫熱的巧克力布朗尼與香草冰淇淋，搭配美國巧克力醬、焦糖醬及核桃果仁。', text1: '內含核桃 Contains Walnuts' }
      ],
      selectData8: 0,
      slides8: [
        { src: './img/food/drink1.jpg', title: '橘色柚惑', text: 'Aperol香甜酒搭配新鮮薄荷葉、檸檬萊姆汁，融合酸甜葡萄柚與清新的薄荷香氣，帶有微氣泡感，是適合夏天飲用的絕佳飲品。', text1: '' },
        { src: './img/food/drink2.jpg', title: '黑莓長島冰茶', text: '頂級琴酒、蘭姆酒、伏特加、覆盆莓香甜酒、柑橘香甜酒與黑莓，散發濃郁莓果香氣。', text1: '' },
        { src: './img/food/drink3.jpg', title: '非常莓好香格里拉', text: 'Aperol香甜酒加上特選紅酒與白酒，搭配三種綜合莓果、新鮮檸檬、萊姆與柳橙，果香濃郁，是佐餐的最佳選擇。', text1: '' },
        { src: './img/food/drink4.jpg', title: '蜜桃白酒香格里拉', text: '以白酒與頂級琴酒為基底，加入接骨木花香甜酒，搭配草莓和水蜜桃與新鮮檸檬萊姆汁，是杯充滿清爽果香與白葡萄酒香氣的獨家飲品。', text1: '' },
        { src: './img/food/drink5.jpg', title: '長島冰茶極品', text: '經典頂級琴酒、頂級蘭姆酒、頂級伏特加、白蘭地、柑橘香甜酒、可樂與檸檬萊姆汁調製而成。濃烈的層次分明，入喉瞬間綻放濃醇烈酒與甘醇果香。', text1: '' },
        { src: './img/food/drink6.jpg', title: '經典摩西多', text: '夏日清爽的招牌飲品。新鮮薄荷葉，加入檸檬萊姆汁並融合蘇打汽泡水，酸甜口感，散發涼快清新的風味。', text1: '風味另可選擇:萊姆/蘋果/玫瑰情人/藍莓石榴' },
        { src: './img/food/drink7.jpg', title: '金質獎章', text: '新鮮香蕉、草莓為基底，加上鳳梨汁和進口椰漿、紅石榴汁與碎冰，調製而成濃郁香甜的水果風味。', text1: '' },
        { src: './img/food/drink8.jpg', title: '香檸莓果茶', text: '新鮮水果特調。以伯爵紅茶為基底，搭配檸檬萊姆汁與草莓，融合百香果與龍舌蘭蜜，給您酸甜可口好滋味。', text1: '' }
      ],
      hooperSettings: {
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          300: {
            itemsToShow: 2,
            centerMode: false
          },
          750: {
            itemsToShow: 3,
            centerMode: false
          },
          1024: {
            itemsToShow: 4,
            centerMode: false
          },
          1200: {
            itemsToShow: 6,
            centerMode: false
          }
        }
      },
      imgSrc: './img/the-boss-platter.jpg'
    }
  }
}
</script>
