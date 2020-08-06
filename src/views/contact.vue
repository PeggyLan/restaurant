<template>
  <div id="Contact" class="contact d-flex justify-content-cente align-items-center flex-column">
    <div class="stamp d-flex justify-content-center align-items-center fixed">Contact Us</div>
    <div class="msg">
      <h1>
        SEND US A MESSAGE
      </h1>
      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.subject"
          :options="subject"
          required
        >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
        </template>
        </b-form-select>
      </b-form-group>
      <b-form-textarea
        id="textarea-state"
        v-model="form.text"
        placeholder="Enter at least 10 characters"
      ></b-form-textarea>

      <b-button type="submit" variant="primary" class="mr-3 mt-3">Submit</b-button>
      <b-button type="reset" variant="danger" class="mr-3 mt-3">Reset</b-button>
    </b-form>
  </div>
    </div>
    <div id="flipbook">
      <flipbook class="flipbook" :pages="array" :singlePage=true></flipbook>
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
          <a href="https://www.facebook.com/tsvts/">
            <img src="../../public/img/line.png" width="30">
          </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Flipbook from 'flipbook-vue'
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        text: ''
      },
      subject: [{ value: '餐飲問題', text: '餐飲問題' },
        { value: '客訴問題', text: '客訴問題' },
        { value: '其他問題', text: '其他問題' }],
      show: true,
      array: [
        null,
        'img/book.png',
        'img/customer.png',
        'img/time.png'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert('感謝您的來信，我們會盡快回復')
      this.axios.post(
        process.env.VUE_APP_APIURL + '/getmessage',
        this.form
      )
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.subject = null
      this.form.text = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  components: { Flipbook }
}
</script>
