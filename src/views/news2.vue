<template>
  <div id="News" class="bg-dark  d-flex justify-content-center flex-column">
    <div class="stamp d-flex justify-content-center align-items-center">News</div>
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <div class="row imformation1 mb-5">
        <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_334.jpg">
        <div class="my-auto mx-5">
          <h2>【吃夏趣】夏日全新餐點，開胃上桌</h2>
          <p>夏天也能擁有好食慾！獻上開胃又消暑的全新菜色，7/14~8/31期間限定！</p>
        </div>
      </div>
      <div class="row imformation2 mb-5">
        <div class="my-auto mx-5">
          <h2>【暑假限定】夏日海洋兒童體驗營</h2>
          <p>2020/7/1~8/31期間，來當小小店長，好吃又好玩！</p>
        </div>
        <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_333.jpg">
      </div>
      <div class="row imformation3 mb-5">
        <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_331.jpg">
        <div class="my-auto mx-5">
          <h2>【迎接畢業季】謝師宴派對，預訂享優惠！</h2>
          <p>2020/6/2~7/31期間，提前來電預約謝師宴派對，招待老師免費吃！</p>
        </div>
      </div>
      <div class="row imformation4 mb-5">
        <div class="my-auto mx-5">
          <h2>【新蔬食運動】未來肉餐點天天85折，吃得營養又環保！</h2>
          <p>2020/5/19-2020/6/29限定優惠，不吃肉，也能享用營養美味的道地美式料理！</p>
        </div>
        <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_330.jpg">
      </div>
      <div class="row imformation5 mb-5">
        <img src="https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_328.jpg">
        <div class="my-auto mx-5">
          <h2>【母親節套餐】來吃豐盛饗宴 4/21 暖心上市！</h2>
          <p>2020/4/21~5/18款待媽咪吃美食，FRIDAYS精選海陸餐點+歡樂氣氛，給您最難忘的母親節...</p>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <b-pagination-nav size="sm" number-of-pages="2" base-url="#" align="center" use-router></b-pagination-nav>
    </div>
    <footer>
      456123
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boxs: [
        { title: '【吃夏趣】夏日全新餐點，開胃上桌', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_334.jpg', text: '夏天也能擁有好食慾！獻上開胃又消暑的全新菜色，7/14~8/31期間限定！' },
        { title: '【暑假限定】夏日海洋兒童體驗營', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_333.jpg', text: '2020/7/1~8/31期間，來當小小店長，好吃又好玩！' },
        { title: '【迎接畢業季】謝師宴派對，預訂享優惠！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_331.jpg', text: '2020/6/2~7/31期間，提前來電預約謝師宴派對，招待老師免費吃！' },
        { title: '【新蔬食運動】未來肉餐點天天85折，吃得營養又環保！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_330.jpg', text: '2020/5/19-2020/6/29限定優惠，不吃肉，也能享用營養美味的道地美式料理！' },
        { title: '【母親節套餐】來吃豐盛饗宴 4/21 暖心上市！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_328.jpg', text: '2020/4/21~5/18款待媽咪吃美食，FRIDAYS精選海陸餐點+歡樂氣氛，給您最難忘的母親節...' },
        { title: '【吃夏趣】夏日全新餐點，開胃上桌', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_334.jpg', text: '夏天也能擁有好食慾！獻上開胃又消暑的全新菜色，7/14~8/31期間限定！' },
        { title: '【暑假限定】夏日海洋兒童體驗營', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_333.jpg', text: '2020/7/1~8/31期間，來當小小店長，好吃又好玩！' },
        { title: '【迎接畢業季】謝師宴派對，預訂享優惠！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_331.jpg', text: '2020/6/2~7/31期間，提前來電預約謝師宴派對，招待老師免費吃！' },
        { title: '【新蔬食運動】未來肉餐點天天85折，吃得營養又環保!', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_330.jpg', text: '2020/5/19-2020/6/29限定優惠，不吃肉，也能享用營養美味的道地美式料理！' },
        { title: '【母親節套餐】來吃豐盛饗宴 4/21 暖心上市！', src: 'https://tgifridays.com.tw/images/thumbnails/lnee/thumb_157_328.jpg', text: '2020/4/21~5/18款待媽咪吃美食，FRIDAYS精選海陸餐點+歡樂氣氛，給您最難忘的母親節...' }
      ],
      paginatedBoxs: this.boxs,
      perPage: 5,
      currentPage: 1
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
    }
  },
  computed: {
    totalRows () {
      return this.boxs.length
    },
    numberOfPages () {
      return parseInt(this.totalRows / this.perPage) + 1
    }
  },
  mounted () {
    this.paginate(this.perPage, 0)
  }
}
</script>
