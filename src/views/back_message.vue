<template>
  <div class="text-white" id="message">
    <h3 class="text-center">訊息管理</h3>
    <b-table
      ref="selectableTable"
      selectable
      :items="this.form"
      :fields="fields"
      responsive="sm"
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template v-slot:cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button size="sm" class="mx-1" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" class="mx-1" @click="clearSelected">Clear selected</b-button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['selected', 'name', 'subject', 'email', 'text'],
      form: [],
      selected: []
    }
  },
  methods: {
    selectAllRows () {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    },
    onRowSelected (items) {
      this.selected = items
      this.axios.patch('http://localhost:3000/updatemessage', { data: this.selected })
        .then()
        .catch(error => {
          console.log(error)
        })
    },
    selectRow (index) {
      this.$refs.selectableTable.selectRow(index)
    }
  },
  mounted: function () {
    this.axios.get('http://localhost:3000/getmessage')
      .then(res => {
        this.form = res.data.result
        for (const i in this.form) {
          const ok = this.form[i].done === true
          if (ok) {
            this.selected.push(this.form[i])
            this.selectRow(i)
          }
        }
      })
  }
}
</script>
