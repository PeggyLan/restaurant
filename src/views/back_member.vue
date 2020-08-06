<template lang="html">
  <div>
    <vs-table :data="datas">
      <template slot="header">
        <h3 class="member_management">
          會員管理
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Name
        </vs-th>
        <vs-th>
          Account
        </vs-th>
        <vs-th>
          Email
        </vs-th>
        <vs-th>
          Phone
        </vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].name">
            <input type="text" v-model="tr.model.name" v-if="tr.edit">
            <span v-if="!tr.edit">{{data[indextr].name}}</span>
          </vs-td>
          <vs-td :data="data[indextr].account">
            <input type="text" v-model="tr.model.account" v-if="tr.edit">
            <span v-if="!tr.edit">{{data[indextr].account}}</span>
          </vs-td>
          <vs-td :data="data[indextr].email">
            <input type="text" v-model="tr.model.email" v-if="tr.edit">
            <span v-if="!tr.edit">{{data[indextr].email}}</span>
          </vs-td>
          <vs-td :data="data[indextr].phone">
            <input type="text" v-model="tr.model.phone" v-if="tr.edit">
            <span v-if="!tr.edit">{{data[indextr].phone}}</span>
          </vs-td>
          <vs-td :data="data[indextr]">
            <vs-button class="mx-1" v-if="tr.edit" @click="cancel(tr, indextr)" color="danger" type="filled">取消</vs-button>
            <vs-button class="mx-1" v-else @click="edit(tr, indextr)" color="success" type="filled">編輯</vs-button>
            <vs-button class="mx-1" v-if="tr.edit" @click="update(tr, indextr)" color="success" type="filled">更新</vs-button>
            <vs-button class="mx-1" v-else @click="del(indextr)" color="danger" type="filled">刪除</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    index: '',
    datas: [],
    selectid: ''
  }),
  mounted: function () {
    this.axios.post(process.env.VUE_APP_APIURL + '/getuser')
      .then(res => {
        this.datas = res.data.result.map(d => {
          return {
            name: d.name,
            account: d.account,
            email: d.email,
            phone: d.phone,
            edit: false,
            model: {
              name: d.name,
              account: d.account,
              email: d.email,
              phone: d.phone
            }
          }
        })
      }).catch(error => {
        this.$vs.dialog('錯誤', `${error.response.data.message}`, 'error')
      })
  },
  methods: {
    del (id) {
      this.selectid = id
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: '確認刪除',
        text: '確認刪除此會員嗎',
        accept: this.acceptAlert
      })
    },
    acceptAlert (color) {
      this.$vs.notify({
        color: 'primary',
        title: '已刪除',
        text: '已順利刪除所選項目'
      })
      console.log(this.datas[this.selectid].account)
      this.axios.post(process.env.VUE_APP_APIURL + '/deleteuser', {
        account: this.datas[this.selectid].account
      })
        .then(res => {
          if (res.data.success) {
            this.axios.post(process.env.VUE_APP_APIURL + '/getuser')
              .catch(() => {
                alert('發生錯誤')
              })
          }
        })
        .catch(() => {
          alert('發生錯誤')
        })
    },
    edit (tr) {
      tr.edit = true
    },
    update (tr, indextr) {
      console.log(indextr)
      this.axios.patch(process.env.VUE_APP_APIURL + '/updateuser', tr)
        .then(response => {
          tr.edit = false
          this.datas[indextr].name = tr.model.name
          this.datas[indextr].account = tr.model.account
          this.datas[indextr].email = tr.model.email
          this.datas[indextr].phone = tr.model.phone
        })
        .catch(error => {
          console.log(error)
          alert('發生錯誤')
        })
    },
    cancel (tr, indextr) {
      tr.edit = false
      tr.model.name = this.datas[indextr].name
      tr.model.account = this.datas[indextr].account
      tr.model.email = this.datas[indextr].email
      tr.model.phone = this.datas[indextr].phone
    }
  }
}
</script>
